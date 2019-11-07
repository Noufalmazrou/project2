import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import information from './Information';
import Brand from './Brand'
import axios from 'axios';
import logo from './Imagess'
import Circle4 from "../src/animations-yasser-master/LoadingPages/Circle4"
import Products from './Products'

export default class Brands extends Component {
    state = {
        data: information.info,
        allbrans: [],
        brands: ["Dior", "Smashbox", "Nyx", "Maybelline", "Benefit"],

    }


    componentDidMount() {


    }

    render() {
        // console.log(this.state.allbrans)

        var makeupData = this.state.brands.map((ele, i) => {
            console.log()

            return <Brand ele={ele} Imagess={logo.imglogo[i].images} />

        }
        )

        var no = this.props.makeAp.map((ele) => {
            // console.log(ele);



            return <Products img={ele.image_link} name={ele.name} price={ele.price} price_sign={ele.price_sign} />
        })


        return (
            <div>
{console.log(this.props.makeAp)}
                {makeupData}
                {no.length == 0 ? <Circle4 /> : no}

            </div>

        )
    }
}
