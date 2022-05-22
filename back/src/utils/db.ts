import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import { DATABASE_URL } from '../config';
import { SequelizeStorage, Umzug } from 'umzug';

config();

export let connected = false;

export const sequelize = new Sequelize(DATABASE_URL ?? '', {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const runMigrations = async () => {
  const migrator = new Umzug({
    migrations: {
      glob: 'migrations/*.js',
    },
    storage: new SequelizeStorage({ sequelize }),
    context: sequelize.getQueryInterface(),
    logger: console,
  });

  const migrations = await migrator.up();
  console.log('Migrations up to date', {
    files: migrations.map((mig) => mig.name),
  });
};

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await runMigrations();
    connected = true;
    console.log('connected to the database');
  } catch (err) {
    console.log('failed to connect to the database');
    console.log(err);
    return process.exit(1);
  }
};
