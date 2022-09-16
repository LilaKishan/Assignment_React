import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav class="navbar-expand-lg sticky-top navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-brand">
                    <img src="https://cdn.dribbble.com/users/1104230/screenshots/3914137/cricketid_01-trial03_crop.gif" alt="Logo" width="50" height="40" class="d-inline-block align-text-top" />
                    </div>
                    <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link " to="/CRUD">CRUD</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}