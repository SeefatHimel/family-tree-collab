import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{ fontSize: "150px" }}>
            <div className="collapse navbar-collapse" >
                <div className="navbar-nav">
                    <Link className="navbar-brand" to="/">Tree</Link>
                    <Link className="navbar-brand" to="/regForm">Registration</Link>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;