import React from 'react'

export default class CoordinatesButton extends React.Component {

    // createCoordinates = (event) => {
    //     let arr = []
    //     arr.push(event.clientX)
    //     arr.push(event.clientY)
    //     return arr
    // }

    render(){
        return (
            <button onClick={(event)=>this.props.onReceiveCoordinates([event.clientX, event.clientY])}>Click for Mouse Coordinates</button>
        )
    }
}