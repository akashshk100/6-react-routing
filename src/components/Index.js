import React from 'react'
import {Link, Route} from 'react-router-dom'
import Product from './Product'


const Index = (props) => {
    console.log(props)

    let products = [1,2,3]

    return(
        <div>
            <h4>Index Component</h4>
            { products.map( (id, index) => {
                return (
                    <Link key={index} to={props.match.url+"/"+id}>
                        <p>Product No. {id}</p>
                    </Link>
                )
            } )}
            <Route path={ props.match.url+"/:id" } component={Product} exact>
            </Route>
        </div>
    )
}

export default Index