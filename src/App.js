import React, {useState, Suspense} from 'react'
import {BrowserRouter, Link, NavLink, Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Index from './components/Index'
// import Cart from './components/Cart'
import NotFound from './components/NotFound'
import './App.css'

let Cart = React.lazy( () => import('./components/Cart') )

function App() {

  let [authorised, setAuthorised] = useState(false)

  let CartWithRouter = withRouter(Cart)

  return (
    <BrowserRouter>
      
      {/* <Route path="/" exact>
        <h4> Default Route </h4>
      </Route>
      <Route path="/Home">
        <h4> Home Route </h4>
      </Route> */}

      <header> 
        <div style={{display: "flex", margin: "auto" }}>
          <span style={{flexGrow: "1"}}></span>
          <nav style={{margin: "0px 10px"}}> 
            {/* <Link to="/">Index</Link> */}
            <NavLink to="/product">Index</NavLink>
          </nav>
          <nav style={{margin: " 0px 10px"}}> 
            {/* <Link to="/home"> Home </Link> */}
            <NavLink to="/cart">Cart</NavLink>
          </nav>
          <button onClick= { () => {setAuthorised(!authorised)} } style={{margin: "0px 10px"}}> {authorised? "logout" : "Login"} </button>
        </div>
      </header>

      <Switch>

        {/* <Route path="/">
          <h4> Default Route </h4>
        </Route> */}                    // letting this route be the first will cause to display this route everytime, because it's path is sub-string for every browser url

        {/* { authorised ? (
          <Route path="/cart" render={() =>
            <Suspense fallback={<h4>Loading ... </h4>}>
              <Cart></Cart>
            </Suspense>
          }>
          </Route>
        ): null } */}
        
        {/* { authorised ? (
          <Route path="/cart">
            { here we are trying to pass the component as child of this <Route></Route> instead of using component prop, then
            in that case the router props like history, match etc are not passed to the <Cart> component unless the <Cart> component
            itself is wrapped around withRouter HOC refer line no. 11 in Cart.js file } 
            <Suspense fallback={<h4>Loading ... </h4>}>         
              <Cart></Cart>
            </Suspense>
          </Route>
        ): null } */}

        { authorised ? (
          <Route path="/cart">
            { /*here we are trying to pass the component as child of this <Route></Route> instead of using component prop, then
            in that case the router props like history, match etc are not passed to the <Cart> component unless the <Cart> component
            itself is wrapped around withRouter HOC refer line no. 11 in Cart.js file  */} 
            <Suspense fallback={<h4>Loading ... </h4>}>         
              <CartWithRouter></CartWithRouter>
            </Suspense>
          </Route>
        ): null }

        <Route path="/product" component={Index}>
        </Route>

        <Route path="*"> <NotFound></NotFound> </Route>

        {/* <Redirect from="/" to="/product" exact/>      */}
        
        {/* adding exact to this lead to only '/' being redirected to product route, 
        which is not the default case, as in default every route has a '/' so even 
        when '/anything' is called it is redirected to product itself. And we may 
        not want this to out default case everytime, as we may want to have a seperate
        route for 404-error-apage (which is basically depicted below) */}  

      </Switch>

    </BrowserRouter>
  );
}

export default App;
