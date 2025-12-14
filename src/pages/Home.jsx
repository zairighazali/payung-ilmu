import { Carousel } from 'react-bootstrap';
import banner1 from "../assets/IMG_3390.jpg";
import banner2 from "../assets/IMG_3391.jpg";
//import banner3 from "../assets/banner3.jpg";

function Home() {
  return (
    <div>
      {/* Carousel Banner */}
      <div id="homeCarousel" className="carousel slide mb-5" data-bs-ride="carousel" style={{ maxHeight: '400px', overflow: 'hidden' }}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src={banner1}
        className="d-block w-100"
        alt="Banner 1"
        style={{ objectFit: 'cover', height: '400px' }}
      />
    </div>
    <div className="carousel-item">
      <img
        src={banner2}
        className="d-block w-100"
        alt="Banner 2"
        style={{ objectFit: 'cover', height: '400px' }}
      />
    </div>
  </div>
  {/* Controls */}
  <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


      {/* Content bawah carousel */}
      <div className="text-center p-5">
        <h1 className="fw-bold">Belajar Jadi Seronok 🎉</h1>
        <p className="lead">Home & Online Tuition</p>

        <a href="/quiz" className="btn btn-primary btn-lg m-2">
          🎯 Cuba Mini Quiz
        </a>

        <a
          href="https://wa.me/60123456789"
          className="btn btn-success btn-lg m-2"
        >
          WhatsApp Tutor
        </a>
      </div>
    </div>
  );
}

export default Home;
