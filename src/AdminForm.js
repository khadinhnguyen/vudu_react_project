import { Container, Form, Button, Col } from 'react-bootstrap';



import './AdminForm.css';



export default function AdminForm(){

    return (
        <div className="background-container">  
                <br/>          
                <Container fluid="sm">
                    <div className="form-container">  
                            <h1 >Create a Movie</h1>                               
                            <Form>                                
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text"/>
                                    {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text> */}
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Synopsis</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Rental Price Per Day</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Purchase Price</Form.Label>
                                        <Form.Control type="number" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>                         
                                    <Form.Group  as={Col} controlId="exampleForm.SelectCustomSizeSm">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control as="select" size="sm" custom>
                                        <option>Movie</option>
                                        <option>Tv</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col}  controlId="exampleForm.SelectCustomSizeSm">
                                        <Form.Label>Genre</Form.Label>
                                        <Form.Control as="select" size="sm" custom>
                                        <option>Action</option>
                                        <option>Scri-fi</option>
                                        <option>Family</option>
                                        <option>Kid</option>
                                        <option>Comedy</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col}  controlId="exampleForm.SelectCustomSizeSm">
                                        <Form.Label>Feature</Form.Label>
                                        <Form.Control as="select" size="sm" custom>
                                        <option>None</option>
                                        <option>Banner</option>
                                        <option>Rental</option>
                                        <option>Deal of The Week</option>
                                        <option>New Release</option>
                                        <option>TV Season</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group  as={Col}  controlId="exampleForm.SelectCustomSizeSm">
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control as="select" size="sm" custom>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group as={Col}  controlId="formGridEmail">
                                            <Form.Label>Number of Starts</Form.Label>
                                            <Form.Control type="number" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="Small Poster Image" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="Large Poster Image" />
                                </Form.Group>

                                <Button variant="primary" type="submit" block>
                                    Submit
                                </Button>
                            </Form>                       
                    </div>
                </Container>
            </div>




    )
}