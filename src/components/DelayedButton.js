import React, { Component } from 'react'

export default class DelayedButton extends Component {
    render() {
        let delayedClick = (event) => { 
            event.persist()
            window.setTimeout(() => { 
                this.props.onDelayedClick(event)
            }, this.props.delay)
        }
        return (
            <div>
                <button onClick={delayedClick}> Delayed</button> 
                
            </div>
        )
    }
}
// class DelayedButton extends React.Component {
//   handleClick = event => {
//     event.persist();
//     window.setTimeout(() => {
//       this.props.onDelayedClick(event);
//     }, this.props.delay);
//   };

