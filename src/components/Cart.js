import React from 'react'
import {withRouter} from 'react-router-dom'

const Cart = (props) => {
    console.log(props)
    return(
        <h4>Cart Component</h4>
    )
}

//  export default withRouter(Cart)  // if we remove this withRouter HOC, the Cart component will not recieve any kind of router related props if not using component prop to pass this

export default Cart