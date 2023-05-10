
export function NavBar() {
 return(
    <nav className="App-navBar-div">
        <hr />
    <ul className="App-navBar-ul">
    <li className="App-navBar"><a href="/">HOME</a></li>
    <li className="App-navBar"><a href="/">STARSHIPS</a></li>
    </ul>
        <hr />
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