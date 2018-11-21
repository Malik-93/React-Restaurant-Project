import React, { Component } from 'react';


class LeftPane2 extends Component {

  render() {

    return (
      <div className="leftPane">
      <h2>Menu:</h2>   
      { this.props.menu.map( ( value, index ) => {
        return <li key={index} onClick={ () => { 

          this.props.updateSelection( value )
          
        } }  >  {value}  </li>
      }  ) }
      <h3>newMenue:</h3>
{ this.props.menu.map( ( value, index ) => {
  return <li key={index} onClick={ () => { 

    this.props.newMenu( )
    
  } }  >  {}  </li>
}  ) }

      </div>
    )

  }

}
export default LeftPane2