const Navbar = ({setCategory,category}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className="badge bg-light fs-4 text-dark">NewsMag</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a onClick={()=>setCategory("general")} name="Home" className={`nav-link ${category==="general"?'active':""}`}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>setCategory("business")} name="business" className={`nav-link ${category==="business"?'active':""}`} >Business</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>setCategory('entertainment')} name="entertainment" className={`nav-link ${category==="entertainment"?'active':""}`} >Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>setCategory("science")} name="science" className={`nav-link ${category==="science"?'active':""}`} >Science</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>setCategory("sports")} name="sports" className={`nav-link ${category==="sports"?'active':""}`}>Sports</a>
                            </li>
                            <li className="nav-item">
                                <a onClick={()=>setCategory("technology")} name="technology" className={`nav-link ${category==="technology"?'active':""}`} >Technology</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
