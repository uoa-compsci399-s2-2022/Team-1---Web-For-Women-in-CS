import React from "react";
import "./header_ppt.css"
 
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class header_ppt extends React.Component {
 
    render() {
        return (
            <div className='header_ppt'>
                <div className="row">
                    <div className="col-12">
                        
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img1"
                                    src="https://img95.699pic.com/photo/50067/1029.jpg_wh860.jpg"
                                    alt="First slide"
                                />
                                
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img1"
                                    src="https://th.bing.com/th/id/R.5cfbc42a0349fb7e44b55edd119eed26?rik=84y6SBrYH4IRvw&pid=ImgRaw&r=0"
                                    alt="First slide"
                                />
                                
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img1"
                                    src="https://th.bing.com/th/id/R.da21dbb0bbed8a02e8effa67a9c9d456?rik=eh16JA6cphKQBQ&pid=ImgRaw&r=0"
                                    alt="First slide"
                                />
                                
                            </Carousel.Item>
                         </Carousel>
                        
                    </div>
                </div>
            </div>
        )
    };
}
 
export default header_ppt;