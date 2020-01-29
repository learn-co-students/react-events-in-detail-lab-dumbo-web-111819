// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    handleDelayClick = (event) => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }

    render(){
        return(
            <button onClick={this.handleDelayClick}>Delayyyy</button>
        )
    }
}

export default DelayedButton