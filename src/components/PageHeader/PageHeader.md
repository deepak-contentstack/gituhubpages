## **PageHeader**

A page header consists of title, title content, information, and set of CTA's called as actions.

#### **Neccessary Props**:

- **title**: Object

  - required
  - Structure: { label : string , component :JSX | React Node , info : url }

- **content**: String or React component

  - optional

- **actions**: Array

  - optional
  - Structure: [ { label : string , onClick : MouseEvent , type : string } ]
