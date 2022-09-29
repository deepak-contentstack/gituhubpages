module.exports = function (plop) {
  plop.setGenerator('storybook-component', {
    description: 'Create a component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your component name?'
    }],
    actions: [{
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.css',
        templateFile: 'plop-templates/Component.css.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Component.index.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.md'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Component.test.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/Component.stories.hbs'
      }
    ]
  })
}