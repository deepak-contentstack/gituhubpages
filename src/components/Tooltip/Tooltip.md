## **Tooltip**

A Tooltip Component can be used to indicate the user what is the functionality of certain element.

### **Tooltip Variant use**

- **dark**: Tooltip with dark variant can be used to show additional information for certain element.

  - props:
    - variant: dark

- **light**: Tooltip that has more details and components as a content (eg: Tooltip Card, Publish status.)

  - props:
    - variant: light

#### **Props**:

- **content**: String or React Component

  - required

- **position**: String

  - required
  - values : right | left | top | bottom

- **variantType**: String

  -optional (defaults to dark)
  -values : dark | light

- **showArrow**: Boolean

  - optional

- **trigger**: String

  - optional
  - default value : 'mouseenter focus'
  - other values: 'click', 'focusin', 'mouseenter click'

* **onHidden**: function
  Invoked once after tooltip hides.
  - optional


* **visible**: Boolean
  - Control the tooltips visibility
  - optional


* **showClose**: Boolean
  - Show a close icon at the top right corner of the tooltip
  - optional

* **onClose**: Functiom
  - Callback function to be executed after close icon is clicked
  - optional


