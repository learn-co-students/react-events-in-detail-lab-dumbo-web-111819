import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    render() {
       
        let findCoords = event => { 
            this.props.onReceiveCoordinates([event.clientX, event.clientY])
        }
        return (
            <div>
                <button onClick={findCoords}
                />
            </div>
        )
    }
}
