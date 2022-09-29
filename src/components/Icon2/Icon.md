<!-- # Icon

Icons are often used when explaining a process, as you can visually represent each step.

## When to use

When you want to help user visually understand each step of a process and facilitate the visual separation and understanding of the elements they contain.

- **Default** - This is the default state of the icon.
  e.g. &lt;Icon icon='Star' &gt;

- **Hover** - To be used for hover state of icon by setting hover property to true.
  e.g. &lt;Icon icon='Star' hover='true' &gt;

- **HoverType** - To be used to set the hover behaviour of the icon. Primary by default.

- **container** - To be used to wrap the SVG in a div element of specific size. Necessary
when hover type is secondary.

- **Active** - To be used for active state of icon by setting active property to true.
  e.g. &lt;Icon icon='Star' active='true' &gt;

- **activeIcon** - An alternative to the above active. Specify a different Icon that replaces the current Icon when the Icon is in active mode. **This still needs the active prop to be passed.**
  e.g. &lt;Icon icon='PersonalizationExperiences' active={activeConditionhere} activeIcon='PersonalizationExperiencesHover' &gt;

### Additional properties

- **fill** - Can be used to set custom fill color to corresponding svg element.
  e.g. &lt;Icon icon='Star' fill='pink' &gt;

- **stroke** - Can be used to set custom stroke color to corresponding svg element.
  e.g. &lt;Icon icon='Star' stroke='pink' &gt;

- **width** - Can be used to set custom width to corresponding svg element.
  e.g. &lt;Icon icon='Star' width='100' &gt;

- **height** - Can be used to set custom height to corresponding svg element.
  e.g. &lt;Icon icon='Star' height='100' &gt;

- **data** - Can be used to render a string or an Element besides Icon.
  e.g. &lt;Icon icon='Star' data="data as string" &gt;
  e.g. &lt;Icon icon='Star' data=<>data as markup</> &gt;

### How to add new Icons to the Icon component

Place the new svg file in the svg folder. Add a property(newly added svg filename) to the object('iconName') in constants.ts file. Also import the new svg file and add the imported svg in object('iconComponents') in constants.ts file.

**Naming convention** - Imported svg file should follow CamelCasing, no usage of underscore in between name.

#### e.g import **IconName** from './svg/IconName.svg -->
