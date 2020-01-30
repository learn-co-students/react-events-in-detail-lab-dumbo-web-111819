import React, {Component} from 'react'

export default class DelayedButton extends Component {

   handleOnClick = (evt) => {
      // setTimeout(() => {this.props.onDelayedClick(evt)}, this.props.delay)
      evt.persist();
      window.setTimeout(() => {
         this.props.onDelayedClick(evt);
      }, this.props.delay);
   };

   render(){
      return(
         <button onClick={this.handleOnClick} />
      )
   }

}

