import React, { Component } from 'react'
import {Card,Button, ButtonGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Images from './Imagess'
import NYX from './NYX.jpg'
import dior from './dior.jpg'
export default class Brand extends Component {
  

    render() {
console.log(this.props.ele)
        return (
              <div className="Br">
 <Card style={{ width: '15rem', height: '30rem' }} >
      <Card.Img variant="top" src={this.props.Imagess} />
      <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text> {this.props.price} {this.props.price_sign} </Card.Text> 
        <Button style={{backgroundColor: 'gainsboro'}} variant="primary"> Buy it </Button>
      </Card.Body>
      </Card> 
</div>

            
        )
    }
}
