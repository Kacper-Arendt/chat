import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT;
export const SECRET = process.env.SECRET;

// export const DATABASE_URL = process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL;
export const DATABASE_URL = process.env.DATABASE_URL;
