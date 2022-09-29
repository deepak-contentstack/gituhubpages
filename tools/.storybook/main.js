const findStories = () => {
  let publicList = [
    './docs/**/*.stories.mdx',
    '../../src/components/Button/*.stories.tsx',
    '../../src/components/Typography/Link/*.stories.tsx',
    '../../src/components/Textarea/*.stories.tsx',
    '../../src/components/Checkbox/*.stories.tsx',
    '../../src/components/Radio/*.stories.tsx',
    '../../src/components/Tag/*.stories.tsx',
    '../../src/components/ToggleSwitch/*.stories.tsx',
    '../../src/components/TextInput/*.stories.tsx',
    '../../src/components/FieldLabel/*.stories.tsx',
    '../../src/components/InstructionText/*.stories.tsx',
    '../../src/components/Typography/Heading/*.stories.tsx',
    '../../src/components/Typography/Paragraph/*.stories.tsx',
    '../../src/components/Table/*.stories.tsx',
    '../../src/components/Select/*.stories.tsx',
    '../../src/components/Modal/*.stories.tsx',
    '../../src/components/DropDown/*.stories.tsx',
    '../../src/components/Icon2/*.stories.tsx',
    '../../src/components/Tooltip/*.stories.tsx',
    '../../src/components/SkeletonTile/*.stories.tsx',
    '../../src/components/Notification/*.stories.tsx',
    '../../src/components/EmptyState/*.stories.tsx',
    '../../src/components/Accordion/*.stories.tsx',
    '../../src/components/Carousel/*.stories.tsx',
    '../../src/components/Field/*.stories.tsx',
    '../../src/components/Search/*.stories.tsx',
    '../../src/components/Button/ButtonGroup/*.stories.tsx',
    '../../src/components/AssetCardVertical/*.stories.tsx',
    '../../src/components/ColorPicker/*.stories.tsx',
    '../../src/components/DateTimepicker/*.stories.tsx',
    '../../src/components/DateRangePicker/*.stories.tsx',
    '../../src/components/Datepicker/*.stories.tsx'
  ]

  let closedList = [
    './docs/**/*.stories.mdx',
    '../../src/components/**/*.stories.tsx',
    '../../src/components/**/*.stories.mdx'
  ]
  return process.env.STORYBOOKMODE === 'public' ? publicList : closedList
}

module.exports = {
  stories: async (list) => [...list, ...findStories()],
  addons: [
    // '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-a11y',
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    'storybook-design-token/register',
    '@storybook/addon-controls',
    'storybook-addon-designs'
  ],
  typescript: {
    reactDocgen: 'react-docgen'
  }
}
