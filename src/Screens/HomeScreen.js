import React from "react";
import { Carousel } from "react-bootstrap";
const HomeScreen = () => {

    return(
        <>
         <div>
            <marquee>VTU Results 2024 out - 
                 Check Exam Results here!!!
                 <a href="#">Click here...</a>Best of Luck!!!
            </marquee>
        </div>
        <div>
        <Carousel>
            <Carousel.Item>
                <img height="550px"
                className="d-block w-100"
                src="images/img1.jpg"
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img height="550px"
                className="d-block w-100"
                src="images/img2.jpg"
                alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img height="550px"
                className="d-block w-100"
                src="images/img3.jpg"
                alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img height="550px"
                className="d-block w-100"
                src="images/img4.jpg"
                alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img height="550px"
                className="d-block w-100"
                src="images/img5.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
        </>
    )
}

export default  HomeScreen;