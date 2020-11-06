This project covers the concept of react routing, i.e. client-side routing

1. starts with installing third party npm library react-router-dom
2. routing is not a built-in feature in react
3. In whichever component we want to use react-routing we need enclose it into <BrowserRouter> </BrowserRouter> tag/component 
4. You define routes that you want in your application using the <Route> tag/component
        
        <Route path="/home" component={Home} />
        This becomes a route for example.com/home

        <Route path="/" component={Home} />
        This becomes a route for example.com/

        These routes are displayed even when a url which is substring of the path of there routes i.e. for a url "example.com/" both of these routes are displayed, to avoid this behaviour you can add exact attribute to the route so that the following route will only be displayed when tha browser url matches excatly as path of the routes.

        therefore, 

        <Route path="/home" exact component={home} />

        will only be displayed when the browser url matches exactly as path of the route i.e. for example.com/home and not for example.com/ 

5. We can also add these routes inside Switch component which will change a default behaviour, when these routes are inside a switch they are switched for best match that appears first. Not all the routes are dsiplayed even when the path is substring of browser url.


        <Switch>
             <Route path="/home" component={Home} />   // only one of these are displayed even when the route is example.com/
             <Route path="/" component={Home} />
        </Switch>

6. Every component that is rendered through these routes recieve some extra set props that tells about the match, history etc.

The match props contain the browser url that was given to fetch this componet as route, which is very useful when you are using relative routes concept.

7. We can use <Link> component to define anchor tags that would lead to one of these routes, using simple anchor tag will not cause client side routing, the browser refetches the route from the server if it's an anchor tag. So to achieve client side rendering we need to have different kinds of links and <Link> provide us with that.

    <Link to="/" />         // link to index component
    <Link to="/home" />   // link to home component

The <Link> always uses absolute routing which means it appends the url in the <Link> to the domain, and this is default behaviour, for eg. if <Link to="/about"> is present in home component then doesn't mean that it will redirect to example.com/home/about it will redirect it to example.com/about only irrespective of the component it is present in.

To achieve relative routing you can use the props match recieved from <Route> for eg. if you want to go to example.com/home/about from home component you can add a <Link> in the following way

    <Link to=props.match.url+"/about" />        // this will lead to a route to exampl.com/home/about

8. There is an alternative to <Link> component that is <NavLink> component which has the same usage, just one difference that <NavLink> component recieves a secial class when it is the active link. Hence it is uselful in situtation where we want to have navigation links in our application and want to give different style to the active link

        js:
        <NavLink to="/home" />

        css:
        .active{
                background-color: orange;
        } 

9. We can surely have multiple routes with single component to be displayed for eg. 
        <Route path="/index" component={Index} />
        <Route path="/" component={Index} />

Now both the routes will lead to index component but that is still not the best solution, react-router-dom provides us with another component that can be used in these cases i.e. <Redirect> component that take from which route to redirect and where to redirect.

        <Router path="/index" component={Index} />
        <Redirect from="/" to="/index">

10. Adding route authentication in react is as simple as hiding the route itself if the authentication parameter is not met by using conditional rendering, for eg. to auhtenticate the index route just conditionally render this route based upon authentication parameter.

11. NOTE: HOW TO PASS ROUTER PROPS TO A RENDERED COMPONENT WHEN RENDERING IT AS CHILD COMPONENT INSTEAD OF PASSING IT THROUGH COMPONENT PROP OF ROUTER COMPONENT.

        using the withRouter HOC, wrap all the component with withRouter which you're willing to pass this way, if not then it won't recieve any router related props like history, match, etc.

        import React from 'react'
        import {withRouter} from 'react-router-dom'

        const Home = props => {
                return(
                        <p>Home</p>
                )
        }

        export default withRouter(Home)

12. NOTE: When running the application on the production server where we have hosted our application as example.com/my-app then your application might fail because the routes in this case should pre-pended with example.com/my-app but instead they are pre-pended with example.com/ as this is default behaviour. Therefore we need change the dafault behaviour of react-router. And that is done where we use our,
        <BrowserRouter>
                {...}
        </BrowserRouter>

by changing the basename prop of this component to "/my-app" which is by default "/" as shown below,

        <BrowserRouter basename="/my-app">
                ...
        </BrowserRouter>