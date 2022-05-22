/// <reference types="cypress" />
// @ts-ignore
module.exports = (on: any, config: any) => {
  if (config.testingType === "component") {
    require("@cypress/react/plugins/react-scripts")(on, config);
  }

  return config;
};
