//Compilation en JSX de la class component ShoppingList

import React from 'react';

class ShoppingList2 extends  React.Component{
    render(){
        return (
            React.createElement("div",{
                className:"shopping-list"
            }, React.createElement("h1", null, "Shopping List for "),
            React.createElement("ul", null, React.createElement("li", null, "Instagram"), React.createElement("li", null, "Whatsapp"), React.createElement("li", null, "Oculus")))
        );
    }
}



export default ShoppingList2;