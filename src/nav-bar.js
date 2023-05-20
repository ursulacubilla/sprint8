import { Link  } from "react-router-dom";

export function NavBar() {
 return(
    <nav className="App-navBar-div">
        <hr className="hr" />
    <ul className="App-navBar-ul">
    <li className="App-navBar"><Link to="welcome">WELCOME</Link></li>
    <li className="App-navBar"><Link to="/home">HOME</Link></li>
    <li className="App-navBar"><Link to="/application">STARSHIPS</Link></li>
    </ul>
    <hr className="hr" />
    </nav>
 );

}

{/* <nav className="App-navBar-div">
<hr />
<ul className="App-navBar-ul">
<li className="App-navBar"><Link to="/">HOME</Link></li>
<li className="App-navBar"><Link to="/">STARSHIPS</Link></li>
</ul>
    <hr />
</nav> */}

{/* <NavLink
style={({ isActiive }) => ({
    color: isActiive ? 'red' : 'blue',
})}
    to="/"
>Home</NavLink> 
otra forma de hacer los navs mas lindos, me gusta :)
*/}