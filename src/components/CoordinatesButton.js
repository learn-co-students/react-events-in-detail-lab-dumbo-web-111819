import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

   handleOnClick = (evt) => {
      // console.log(evt.clientX, evt.clientY)
      this.props.onReceiveCoordinates([evt.clientX, evt.clientY])
   }


   render(){
      return(
         <button onClick={this.handleOnClick} />
      )
   }

}

