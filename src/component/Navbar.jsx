import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{
      display:"flex",
      height:'10vh'
    }}>
      <Container style={{
        flex:"2"
      }}> 
        
        <Typography>FoodStore</Typography>
      </Container>
      <Container style={{
        flex:"5",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        fontSize:"20px"
        
      }}>
      <Link to="/">  <Button>Home</Button></Link>
      <Link to="/saved">  <Button>saved</Button></Link>
      <Link to="/favourites">  <Button>Favourites</Button></Link>
      <Link to="/checkout">  <Button>checkout</Button></Link>
        
      </Container>
    </div>
  )
}

export default Navbar