## **Default**

There are two types of EmptyState components that you can use :

- **Primary** : This is the default type. Use it when you want to display a bolder title.
- **Secondary** : Use this type when you want to display a less bolder information.


<!-- # EmptyState Component

## Props for EmptyState component:
- heading :-
    - This is an optional prop.
    - It is of type `string` or `ReactNode` i.e you can either send the title of the page as a string or as a component.
    - This is a prop that is used to set the title of the page.
- description :- 
   - This is an optional prop.
   - It is of type `string` or `ReactNode` i.e you can either send the description of the page as a string or as a component.
   - This is a prop that is used to set the description of the page. 
- img :- 
    - This is an optional prop.
    - This is of type `ReactNode`.
    - This is mainly to display the image if you want to display on the top of the page.
    - You can send a custom image using this prop.
- imgSrc :-
    - Another way to display image by using this prop where you need to send the src and the alt of the image.
    - This is an optional prop.
    - It is of type `object` which takes two more props further.
        - src :-
            - This is a required prop if you are using imgSrc.
            - It is of type `string` where you need to send the src of the image you want to display.
        - alt :- 
            - This is an optional prop.
            - It is of type `string`.
            - If you want to the `<img>` tag to have an `alt`, you can use this prop.
- displayImage :- 
    - This is an optional props.
    - It is of type `boolean`
    - If you don't want to display the default image if not passed by the user, then use this prop and set the prop to `false`.
- children :- 
    - This is optional.
    - If you want to render any children or you want to render a custom component which consist of header, description and image, you can use this.
    - You need to simply wrap the component you want to display with `<EmptyState></EmptyState>`.
    - It is of type `ReactNode`

## Note :- 
- If you are opting for sending the image, then use either `img` or `imgSrc`.  -->