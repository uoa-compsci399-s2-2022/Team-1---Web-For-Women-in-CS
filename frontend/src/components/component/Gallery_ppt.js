import React from "react";
import "./Gallery_ppt.css"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class Galleryppt extends React.Component {
 
    render() {
        return (
            <div className='Gallery_ppt'>
                
                    
                        
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img"
                                    src='https://static.au.edusercontent.com/files/xyoeZ9ILwbfVmIWDpfCzppZR'
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img"
                                    src='https://static.au.edusercontent.com/files/n1H0Oz0YE0J0LCaszBlhxWCD'
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img"
                                    src='https://static.au.edusercontent.com/files/M6MMmf205YlCJP8M03zeXPyH'
                                    alt="First slide"
                                />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100 img"
                                    src='https://static.au.edusercontent.com/files/2gK4ihZuakEMZtFvId8q5hlz'
                                    alt="First slide"
                                />
                            </Carousel.Item>

                         </Carousel>
                    </div>
              
            
        )
    };
}
 
export default Galleryppt;