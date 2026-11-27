function Navbar({ brandName }) {
    return (
        <nav className= "navbar">
            <h2> {brandName} </h2>
            <span className="badge">React + Vite Demo</span>
        </nav>
    );
}

export default Navbar;