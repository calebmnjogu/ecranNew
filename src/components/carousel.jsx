import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Carousel() {
  return (
    <section classNameName="row">
      <div classNameName="col-md-12">
        <div
          className="carousel slide carousel-collapse-sm"
          data-bs-ride="carousel"
          id="mycarousel"
        >
          {/* <!-- Wrapper for our carousel inner --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/NA-TV1.jpg"
                alt=""
                className="w-100 d-block"
                style={{ height: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/carousel1.jpg"
                alt=""
                className="w-100 d-block"
                style={{ height: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/!!carousel2.png"
                alt=""
                className="w-100 d-block"
                style={{ height: "450px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/Headphones.jpg"
                alt=""
                className="w-100 d-block"
                style={{ height: "450px" }}
              />
            </div>
          </div>

          {/* Controllers for the carousel */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mycarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
