import { Card } from 'react-bootstrap';
import React from 'react'

class SingleBook extends React.Component {

    state = {
        selected: false
    }
    change = () => {
        if (this.state.selected === true) {
            return 'selected';
        } else {
            return 'not-selected';
        }
    }

    render() {
        return (
        
        <Card id={this.change()} onClick={() => {
            this.setState({selected: !this.state.selected});
        }} style={{ width: '18rem' }}>
            <Card.Img className={this.change()} variant="top" src={this.props.img} />
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