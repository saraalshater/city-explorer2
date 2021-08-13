import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import {Col,Row} from 'react-bootstrap';



class Weather extends React.Component {

  render() {
    return (
      <>

<Row >
<header className="text-center weatherText" >
                    <h4>The Weather for the next 16 days</h4>
                </header>
                {
          this.props.showCard && this.props.weather.map(element => {
            return (
                  <Col xs={3} className="columCard">
              <Card className="text-center weatherCard" >
                <Card.Body>
                  <Card.Title>{element.date}</Card.Title>
                  <Card.Text>{element.description}</Card.Text>
                </Card.Body>
              </Card>
              </Col>

)
})
}


</Row>
      </>
    )
  }


}

export default Weather;