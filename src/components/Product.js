import React from 'react'

const Product = (props) => {

    console.log(props)
    let id = props.match.params.id

    const clickHandler = () => {
        props.history.goBack()
        //props.history.push("/")         // define where you want to go in the parameter section of the function call
    }

    return(
        <div>
            <h4>Product Component</h4>
            <p>Product No. {id} selected</p>
            <button onClick={clickHandler}>Go back</button>
        </div>
    )
}

export default Product