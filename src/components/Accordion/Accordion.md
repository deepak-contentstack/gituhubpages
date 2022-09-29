# Accordion

## Best practices
- Avoid the Accordion data to be pre-rendered for the initial render of the accordion. It will be available on the DOM once the data is loaded in the accordion and the preRender will be automatically set to `true`.