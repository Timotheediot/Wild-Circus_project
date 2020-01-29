import React from "react";
import Photo1 from '../assets/img/circus1.jpg'
import Photo2 from '../assets/img/circus2.jpg'
import Photo3 from '../assets/img/circus3.jpg'
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='SliderContainer'>

            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Photo1} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block text-white">
                            <h5>Welcome</h5>
                            <p>…</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Photo2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Photo3} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


        </div>
    )
}

export default Home;