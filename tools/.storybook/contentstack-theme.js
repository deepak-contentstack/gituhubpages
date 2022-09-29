import { create } from '@storybook/theming'
import Logo from '../../src/static/images/Logo.png'
const pkg = require('../../package.json')

export default create({
  base: 'light',

  // Branding information
  brandTitle: ``,
  brandUrl: '/',
  brandImage: Logo
})
