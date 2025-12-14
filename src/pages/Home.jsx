import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from "../assets/IMG_3390.jpg";
import banner2 from "../assets/IMG_3391.jpg";

function Home() {
  return (
    <div>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Banner 1"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Banner 2"
            style={{ height: '400px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>

      {/* Content */}
      <div className="text-center p-5">
        <h1 className="fw-bold">Belajar Jadi Seronok 🎉</h1>
        <p className="lead">Home & Online Tuition</p>

        {/* Internal link pakai Link */}
        <Link to="/quiz" className="btn btn-primary btn-lg m-2">
          🎯 Cuba Mini Quiz
        </Link>

        {/* External link tetap guna a */}
        <a
          href="https://wa.me/60123456789"
          className="btn btn-success btn-lg m-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Tutor
        </a>
      </div>
    </div>
  );
}

export default Home;
