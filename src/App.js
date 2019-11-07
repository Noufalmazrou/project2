import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import './index.css';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import AllCategories from './AllCategories'
import NewArrivals from './NewArrivals';
import Brands from './Brands';
import { Navbar, Nav, Image, Button, Form, FormControl, OverlayTrigger, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import Products from './Products';
import Circle2Time from './animations-yasser-master/LoadingPages/Circle2Time';
import Nyx from './Nyx';
import Benefit from './Benefit';
import Maybellin from './Maybellin';
import Dior from './Dior';
import Smashbox from './Smashbox'; 
export default class App extends Component {
  state = {
    data: [],
    allbrans: null , 
    brands : ["nyx", "dior", "benefit", "smashbox", "maybelline"]
  }


  componentDidMount() {

    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then((res) => {
        this.setState({
          seta: res.data.filter(ele => {
            return ele.brand == "nyx" || ele.brand == "dior" || ele.brand == "benefit" || ele.brand == "smashbox" || ele.brand == "maybelline"
          })
        })
    console.log(res)

      }).then(eleee => {
        console.log("test")

        var number = [20, 20, 20, 20, 20]
        var array = ["nyx", "dior", "benefit", "smashbox", "maybelline"]
        var arrayOfbrands = []
        this.state.seta.forEach(ele => {
          for (let index = 0; index < array.length; index++) {
            const element = array[index];



            if (ele.brand == element && number[index] > 0) {
              number[index] = number[index] - 1
              // console.log( number[index])
              arrayOfbrands.push(ele)
             
            }
          }


        })
        this.setState({
          allbrans: arrayOfbrands
        })


      })
     
  }

  //  function 



  render() {
    // var makeupData = this.state.data.map((ele) => {
     
    //   return <Brands ele={ele} />

    // }
    // )
    console.log(this.state.allbrans)
    return (
      <div className="App">


        <BrowserRouter>
          <Navbar bg='white' fixed="top" variant="dark" style={{ opacity: '0.8' }}>

            <Nav className="mr-auto">

              <Nav.Link href="/NewArrivals" style={{ color: 'black' }}>NewArrivals</Nav.Link>
              <Nav.Link href="/Brands" style={{ color: 'black' }}>Brands</Nav.Link>
              <Nav.Link href="/Gifts" style={{ color: 'black' }}>Gifts</Nav.Link>
              <NavDropdown title="AllCategories" id="collasible-nav-dropdown" style={{ color: 'black' }}>
                <NavDropdown.Item href="/brands/Dior">Dior</NavDropdown.Item>
                <NavDropdown.Item href="/brands/Benefit">Benefit</NavDropdown.Item>
                <NavDropdown.Item href="/brands/Nyx">Nyx</NavDropdown.Item>
                <NavDropdown.Item href="/brands/Maybellin">Maybellin</NavDropdown.Item>
                <NavDropdown.Item href="/brands/Smashbox">Smashbox</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* <Nav className="ml-auto">
              <Form inline>
                <FormControl type="text" placeholder="Search" className="ml-auto" />
                <Button variant="outline-dark">Search</Button>
              </Form>
            </Nav> */}


          </Navbar>
          <br />
          <br></br>
          <br></br>

          <Nav >

          </Nav>
          <Switch>
          <Route path="/Brands/:name" render={(props) => <Products    {...props}  brand = {
            this.state.allbrans ==null ? <Circle2Time  /> :  this.state.allbrans.filter(ele=>{
console.log(props.match.params.name)
              return ele.brand.toLowerCase() == props.match.params.name.toLowerCase()
            })
          }  loding = { this.state.allbrans ==null ? false : true }/>   }/>

            <Route path="/AllCategories" component={AllCategories} />
            <Route path="/NewArrivals" component={NewArrivals} />
            <Route path="/Brands" render={()=> <Brands makeAp = { this.state.allbrans ==null ? [] : this.state.allbrans }/> }/>
            {console.log(this.state.allbrans)
            }
            {/* <Route path="/Gifts" component={Gifts} />
            <Route path="/Dior" component={Dior} />
            <Route path="/Benefit" component={Benefit} />
            <Route path="/Nyx" component={Nyx} />
            <Route path="/Maybellin" component={Maybellin} />
            <Route path="/Smashbox" component={Smashbox} /> */}
          </Switch>
        </BrowserRouter>




      </div>
    )
  }
}

