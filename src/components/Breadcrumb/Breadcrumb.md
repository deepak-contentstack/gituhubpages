# Breadcrumb

Breadcrumbs are a great way to show hierarchy-based information for a page

## When to use

When you want to indicate the current page's location within a navigational hierarchy.

### Properties

- **breadcrumbItems** - It's an array of objects consisting of path(url) and corresponding display name. Display name can be a string or a react node | component.
  **_*Syntax*_**: breadcrumbItems=[
  {
  name:'Breadcrumb 1'.
  path:'url',
  action:function
  },
  ...
  ]

#### Eg: &lt; Breadcrumb breadcrumbItems={breadcrumbItems} &gt;
