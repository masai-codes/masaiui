const capitalize = require("lodash/capitalize");
const camelCase = require("lodash/camelCase");

const workspaces = ["packages"];

module.exports = async function createPackage(
  /** @type {import('plop').NodePlopAPI} */ plop
) {
  plop.setHelper("capitalize", (text) => {
    return capitalize(camelCase(text));
  });

  plop.setGenerator("component", {
    description: "Generates a component package",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Enter component name:",
      },
      {
        type: "input",
        name: "description",
        message: "The description of this component:",
      },
      {
        type: "list",
        name: "outDir",
        message: "where should this component or package live?",
        default: "packages",
        choices: workspaces,
      },
    ],
    actions(answers) {
      const actions = [];

      if (!answers) return actions;

      const { componentName, description, outDir } = answers;

      actions.push({
        type: "addMany",
        templateFiles: "plop-templates/component/**",
        destination: `./${outDir}/{{dashCase componentName}}`,
        base: "plop-templates/component/",
        data: { description, componentName },
        abortOnFail: true,
      });

      return actions;
    },
  });
};
