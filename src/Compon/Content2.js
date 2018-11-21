import React, {Component} from 'react';
import RightPane2 from './RightPane2'
import LeftPane2 from './LeftPane2'

class Content2 extends Component {
    state = {
        displayMenu: true,
        selectedFood: 'nothing yet',
        menu: ["Beaf","Chicken", "Bottels", "BBQ", "Tikka"],
        message: ''   
    };
    // chekMenu = () => {
    //     if(this.state.displayMenu === true) {
    //         this.setState({displayMenu: false})
    //     } else {
    //         this.setState ({displayMenu:true})
    //     }
    // }

    updateSelection = ( value, index ) => {
        console.log( index )
    this.setState({ selectedFood: value })
      }

 
     handleSubmit = () => {
     let menu_item = this.refs.menu_item.value; // what is refs here
     let menuItems = this.state.menu.slice();

     menuItems.push(menu_item)
     this.setState({menu: menuItems})
 } 
 
 removeItem = (i) => {
     let d_item = this.state.menu;
     d_item.splice(i, 1)    
 this.setState({menu: d_item})
}

emptyObject = () => {
        this.setState({
            message: "menu is empty"})
        }

render() {
    
// const menuItems = this.state.menu.map((value, index) => {
      
// return <li key={index} onClick={() => { this.setState({ selectedFood: value }) }} >  {value}  </li>

// })
    return(
        <div className="contentArea">
        <div>
            <input type = "text" ref="menu_item" />
            <input type = "submit" value="submit" onClick={this.handleSubmit} /><br />
            <input type = "text" ref="d_item"  placeholder="Enter food name"/>
            <input type = "submit" value="remove item" onClick={this.removeItem} />
            <input type = "submit" value = "Empty" onClick = {this.emptyObject} />
        </div>
            {/* <button onClick = {this.chekMenu}>Toogle menu</button>
            <h2>Menu:</h2>
            <h2>selectedFood: {this.state.selectedFood}</h2>
             <ul>
             {this.state.displayMenu === true ? menuItems : ''}
             </ul> */}
             <LeftPane2 menu={this.state.menu} updateSelection = {this.updateSelection} />
             <RightPane2 selectedFood = {this.state.selectedFood}/>
        </div>
    )
}
}
export default Content2