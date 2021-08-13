import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';


class Movies extends React.Component {

    render() {
        return (
            <>

                <Row >
                <header >
                    <h4>Movie List</h4>
                </header>  
                    {
                        this.props.showCard &&
                        this.props.movies.map(element => {
                            return (
                                <Col lg={4} className="cardMovie">
                                    <br /><br />
                                    <Card style={{ width: '28rem' }}>
                                        <Card.Header className="text-center textCardHead" as="h4">{element.title}</Card.Header>
                                        <Card.Body className="textCard">
                                        <Card.Img variant="top" src={element.poster_path} />
                                            <Card.Text className="text-left" >
                                                <h6>Average Votes:</h6> {element.vote_average}
                                                <h6>Conut Votes:</h6>  {element.vote_count}
                                                <h6>Overview:</h6>{element.overview}
                                                <h6>Popularity:</h6> {element.popularity}
                                                <h6>Release Date :</h6> {element.release_date}
                                            </Card.Text>

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

export default Movies;