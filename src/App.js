import "./App.css";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";
import img11 from "./assets/11.jpg";
import img12 from "./assets/12.jpg";
import img13 from "./assets/13.jpg";
import img14 from "./assets/14.jpg";
import img15 from "./assets/15.jpg";
import img16 from "./assets/16.jpg";
import img17 from "./assets/17.jpg";
import img18 from "./assets/18.jpg";

function App() {
  return (
    <div className="container-fluid p-0 mt-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-2">
        <a className="navbar-brand" href="example.com">
          TOKUDA ACESSORIES
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="example.comnavbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="example.com">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="example.com">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="example.com">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="example.com">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row d-flex justify-content-center p-0 m-0">
        <div className="column">
          <img alt="item.jpg" src={img1} />
          <img alt="item.jpg" src={img2} />
          <img alt="item.jpg" src={img3} />
          <img alt="item.jpg" src={img4} />
          <img alt="item.jpg" src={img5} />
          <img alt="item.jpg" src={img6} />
        </div>
        <div className="column">
          <img alt="item.jpg" src={img7} />
          <img alt="item.jpg" src={img8} />
          <img alt="item.jpg" src={img9} />
          <img alt="item.jpg" src={img10} />
          <img alt="item.jpg" src={img11} />
          <img alt="item.jpg" src={img12} />
        </div>
        <div className="column">
          <img alt="item.jpg" src={img13} />
          <img alt="item.jpg" src={img14} />
          <img alt="item.jpg" src={img15} />
          <img alt="item.jpg" src={img16} />
          <img alt="item.jpg" src={img17} />
          <img alt="item.jpg" src={img18} />
        </div>
      </div>

      <div className="row m-0">
        <div className="col-md-12 d-flex justify-content-center align-center">
          <div className="spinner-border m-5 text-light" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
