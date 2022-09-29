# Contentstack Venus Component Library

The Venus React component library provides a comprehensive collection of Contentstack’s UI components which can be used to quickly build UI Extensions and Contentstack-based applications.

In this section, we have covered the general information about the user interface (UI) component library that we use at Contentstack. The Venus component library is what we refer to when designing or adding UI components.


## How to use the Library

To start working with a component you need to perform the following:

 -   Install the library package
    
 -   Import style
    
 - Import required component

### Install the library package

To install the new interface components package in your app, run the following:
```js
npm i @contentstack/venus-components --save
```

### Import style

Finally, import the CSS style as follows:

```js
import '@contentstack/venus-components/build/main.css';
```

### Import required component

To import a component, run the following:
```js
import {component} from '@contentstack/venus-components';
```

For example, to import the Button component, run the following:
```js
import { Button } from '@contentstack/venus-components';
```

### Design Token

 Design tokens are the value variables required to easily build/maintain the UI. They are used in place of hard-coded values to ensure development flexibility and maintain UI consistencies across the design system.
 
These variables include values of CSS properties such as spacing, color, and typography.

We can consume these values by including them in our project in one of the below mentioned ways:

-   JavaScript
```js
	import {TokenName} from '@contentstack/venus-components/build/variables.js';
```
-   CSS    
```js
	@import '@contentstack/venus-components/build/variables.css';
```
 
-   SCSS    
```js
	@import '@contentstack/venus-components/build/variables.scss';
```
  

## Support and Feedback

You can also help us improve by providing your valuable feedback and suggestions. Please contact our Support team for more information.