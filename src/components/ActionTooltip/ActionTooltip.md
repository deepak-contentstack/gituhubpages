## **ActionTooltip**

A ActionTooltip Component can be used to provide tooltip with set of operation the user can perform when hovered on certain list/ELement.

#### **Props**:

- **list**: Array of Objects

  - required
  - Structure: {
    label : string , component :JSX | React Node ,
    title : string
    action : function to trigger when clicked,
    }

- **type**?: `'primary' | 'secondary'`

  - Optional
  - Default value: `'primary'`
