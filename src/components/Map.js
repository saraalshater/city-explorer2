import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Card } from 'react-bootstrap';
import '../App.css';



class Map extends React.Component {

    render() {

        return (

            <>
                <Container>
                    {this.props.showCard &&
                        <Card className="text-center">
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>{this.props.displayName}</Card.Title>
                                <Card.Text>{this.props.displayName}is located at {this.props.lat} by{this.props.lon}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    }
                    {this.props.showMap &&
                    <div className="mx-auto d-block">
                            <br/>
                            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.props.lat},${this.props.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`} rounded fluid />
                            <br/><br/>
                    </div>
                    }
                    {this.props.displayErr &&this.props.errorMsg}
                </Container>

            </>

        )

    }



}

export default Map;