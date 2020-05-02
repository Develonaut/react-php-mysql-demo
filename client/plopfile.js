const requireField = (fieldName) => (value) => {
  if (String(value).length === 0) {
    return `${fieldName} is required`;
  }
  return true;
};

// type: "list",
// name: "component",
// message: "Select component",
// when: (answer) => answer.action === "add",
// choices: () => [
//   {
//     name: "Create component folder",
//     value: "create"
//   },
//   {
//     name: "Add separate component",
//     value: "add"
//   }
// ]

const yesNoChoices = () => [
  {
    name: "Yes",
    value: true,
  },
  {
    name: "No",
    value: false,
  },
];

const componentTypeChoices = () => [
  {
    name: "common",
    value: "common",
  },
  {
    name: "feature",
    value: "features",
  },
  {
    name: "core",
    value: "core",
  },
];

module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Creat a React Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What's the component name?",
        validate: requireField("name"),
      },
      {
        type: "list",
        name: "isContained",
        message: "Does the component need a container?",
        choices: yesNoChoices,
      },
      {
        type: "list",
        name: "location",
        message: "What's the component type?",
        choices: componentTypeChoices,
      },
      {
        type: "list",
        name: "isMUIPrimitive",
        message: "Is this a MUI Primitive?",
        choices: yesNoChoices,
        when: ({ location }) => location === "common",
      },
    ],
    actions: ({ location }) => {
      const actions = [
        {
          type: "add",
          path: "src/{{location}}/{{pascalCase name}}/component.jsx",
          templateFile: "plop-templates/Component/component.jsx.hbs",
        },
        {
          type: "add",
          path: "src/{{location}}/{{pascalCase name}}/component.test.jsx",
          templateFile: "plop-templates/Component/component.test.jsx.hbs",
        },
        {
          type: "add",
          path: "src/{{location}}/{{pascalCase name}}/styles.js",
          templateFile: "plop-templates/Component/styles.js.hbs",
        },
        {
          type: "add",
          path: "src/{{location}}/{{pascalCase name}}/index.js",
          templateFile: "plop-templates/Component/index.js.hbs",
        },
      ];

      if (location !== "features") {
        actions.push(
          {
            type: "add",
            path: "src/{{location}}/index.js",
            templateFile: "plop-templates/injectable-index.js.hbs",
            skipIfExists: true,
          },
          {
            type: "append",
            path: "src/{{location}}/index.js",
            pattern: "/* PLOP_INJECT_EXPORT */",
            template: 'export * from "./{{pascalCase name}}";',
          }
        );
      }

      return actions;
    },
  });
};
