import React, { Component } from 'react'
import Circle2Time from './animations-yasser-master/LoadingPages/Circle2Time'
import {Card,Button} from 'react-bootstrap'
import BrandItem from './BrandItem';

export default class Prodect extends Component {
    render() {
        console.log(this.props);
        // this.props.brand[0].brand
        var makeupData = this.props.loding? this.props.brand.map((ele, i) => {
            // console.log(ele)

            return <BrandItem name={ele.name} Imagess={ele.image_link}  price = {ele.price} price_sign={ele.price_sign}  />} ) : "lo"
        return (
            <div>
                
                {   !this.props.loding?   this.props.brand  : makeupData}
            </div>
        )
    }
}
