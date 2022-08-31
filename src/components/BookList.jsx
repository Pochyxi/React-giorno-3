import React from 'react'
import SingleBook from './SingleBook';
import { Container, Row, Col, Form } from 'react-bootstrap';

class BookList extends React.Component {
    state = {
        string:'',
    }
    
    filterBookList = () => {
          return this.props.list.filter((book) => book.title.toLowerCase().includes(this.state.string))
        
    }

    render() {
        return (
            <Container className='my-5 h-50 text-center'>
                <form>
                <Form.Group>
                    <Form.Label>RICERCA</Form.Label>
                    <Form.Control
                        type="text" 
                        placeholder="Inserisci il titolo" 
                        value={this.state.string}
                        onChange={(e) => {
                            this.setState({string: e.target.value}); 
                        }}
                        />
                        
                </Form.Group>  
                </form>
                <Row>
                   {
                    this.filterBookList().map((book) => {
                        return (
                            <Col className='d-flex my-5 justify-content-center' key={book.asin} xs={12} md={4} lg={2}>
                                <SingleBook img={book.img} title={book.title} price={book.price} />
                            </Col>
                        )
                    })
                } 
                </Row>
                
            </Container>
        )
    }
}

export default BookList;
