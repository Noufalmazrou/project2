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
 <Card style={{ width: '15rem', height: '25rem' }} >
      <Card.Img variant="top" src={this.props.Imagess} />
      <Card.Body>
        <Card.Title><h2>{this.props.ele}</h2></Card.Title>
        <Card.Text> <h5>{"For more Products"}</h5> </Card.Text>
        <Button style={{backgroundColor: 'lavenderblush' , color: 'white'}} variant="primary"> <Link to ={`/Brands/${this.props.ele}`}  > Click here </Link></Button>
      </Card.Body>
      </Card> 
</div>

            
        )
    }
}
