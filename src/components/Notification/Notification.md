## **Default**

- **Default** : Lets you display the “default” toast message.
- **Success** : Lets you display the “success” toast message.
- **Message** : Lets you display a generic toast message.
- **Warning** : Lets you display a “warning” toast message.
- **Error** : Lets you display an “error” toast message.
- **Shortcut** : Lets you display the shortcut of a certain component/button within a toast message.
- **Custom** : Lets you display a custom toast message.
- **Dark** : Lets you display a toast message with a darker background.


<!-- # Toast Notification

## csNotification method:
- This method is to be called when you want to use toast notification.
- This takes three parameters as props.

### csNotification props/parameters:
- type :-
    - This is a required parameter where you need to specify what type of toast is it. 
        
    > eg.: type = "warning"
    
    - The type should be a String.
- notifyProps:-
    - This is an optional parameter.
    - It takes an object.
    - These are the adidtional properties for a Toast notification where you can opt out the hideProgressBar by setting it to true.
    
    >eg.: {notifyProps: {hideProgressBar: true}} 
    
    - notifyProps object has four things which are optional.
        - hideProgressBar:- This is to hide Porgress bar. It's of type boolean.
        - position:- This is to change the display position of the toast. It is of type String. It has only six position i.e.   Default position is top-right
            - top-right
            - top-center
            - top-left
            - bottom-right 
            - bottom-center
            - bottom-left 
        - closeOnClick:- This is to close the toast on clicking on it. It has a boolean value. Default value:- true
        - draggable:- This is to close the toast by dragging it. It has a boolean value. Default value:- true
- displayContent:-
    - This is a required paramenter which will display the text or the component you want to notify.
    - It takes an object and there are four parameters in it:-
        - component:- where you can send a component as the props. This has to be a ReactNode.
        - text:- where you can send what text you want to add. This has to be a string.
        - description:- where you can add more description about the notification. This has to be a string.
        - error:- where you can display multiple error. This has to be an object with the key as the error title and value as the description of it (Array).
            
    >eg.: error:{errorTitle: ['error1']}}
    
    - Note: You need to choose one from Component or text which is mandtory. Description and Error are optional.
        
## Toast configuration:-
- limit: This is the limit to which you can display notification at one time. It's been set to 1 -->