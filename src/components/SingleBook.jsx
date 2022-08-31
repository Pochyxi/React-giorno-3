import { Card } from 'react-bootstrap';
import React from 'react'

class SingleBook extends React.Component {

    state = {
        selected: true
    }
    render() {
        return (
        
        <Card style={{ width: '18rem' }}>
            <Card.Img className='img-fluid' onClick={(e) => {
            this.setState({ selected: !this.state.selected });
            let card = e.target
            console.log(this.state.selected)
            if (this.state.selected === true) {
                card.classList.add('selected')
            } else {
                card.classList.remove('selected')
            }
            
        }} variant="top" src={this.props.img} />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                    {this.props.price} $
                </Card.Text>
            </Card.Body>
        </Card>
    )
    } 
}

export default SingleBook;