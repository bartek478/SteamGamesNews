import { Link } from "react-router-dom"
import weblogo from './WebsiteLogo.png';
import './Navbar.css';

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg">
            <div class="navcolor container-fluid d-flex">
              <a class="navbar-brand me-auto" href="#">
                <img src={weblogo} alt="Steam Logo"></img>
              </a>
              <div class="navcolor collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/news" class="nav-link">Search News</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/docs" class="nav-link">About/Docs</Link>
                  </li>
                </ul>
              </div>

              <div class="d-flex ms-auto">
                <button class="btn btn-primary" id="instbut"><a href="https://store.steampowered.com/" id="instbuta">Install Steam</a></button>
              </div>
            </div>
        </nav>


    )
}
export default Navbar
