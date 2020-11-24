import React, { Component } from 'react';


class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

        );
    }

}

export default Menu;

/* To add in the new component in here, let me first import React and then also import Component from React. 
    Because that is what will allow me to create a React Component. 
    And once we do this, let's create our new component here as a class component and so I will type class Menu extends Component. 
    As you can see, this is how you would add in a new component to React Application and the name of this new component is Menu. 
    And within this menu component, I'm going to first define the constructor for this component. 
    So, we'll define the constructor and this constructor gets a parameter called props. 
    With this constructor props, I need to supply this props to my super class. 
    So, I say super props here, and this is required whenever you define a class component. 
    Furthermore, any component in React, a class component should implement this method called render() which will turn the corresponding view for this component. 
    So, inside this render method, I need to return the view for this component. 
    So, I'm going to create this return value here and you can see the red squiggly line, telling me that this is empty at the moment so I need to fill that in appropriately. 
    Also when you create the component, don't forget to export that component from this file, because we would need to import this component wherever we want to make use of it within our application. 
    So, there you go. We have completed the basic structure for a component. A class component would be defined like this. 
    So, you first extend the component, you define the constructor for it, and then also implement a function called render(), 
    inside this component which will return what needs to be displayed on the UI by this component. 
    And don't forget to export the component from this file. That's it. 
    So, any time you need to create a new component, this is how you would go about creating that new component. 
*/