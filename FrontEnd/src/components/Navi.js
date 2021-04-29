import React from 'react'
import { Button } from 'react-bootstrap';
import {Nav,Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'

const Navi = () => {
    return (
        <div>
           <Nav style={{justify_content:' center',boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px' ,position:'fixed',overflow:'hidden',width:'100%',zIndex:'1',backgroundColor:'white',marginTop:'-5px'}} >
                <Navbar.Brand style={{color:"black",    textShadow: "0.5px 0.5px 2px #C60CD5",display:'flex'}} href="/">
                <img src="https://cdn.dribbble.com/users/10882/screenshots/14941053/media/a6e6d6800180b303bf6e600e05f5a699.png" width='150px' style={{margin:'-40px'}}/>
                <h3 style={{margin:'1px'}}>YAHC</h3>
                </Navbar.Brand>
                    <div style={{display:'flex',  justifyContent:'flex-end',border:'solid 1px white',flex:'wrap',marginTop:'10px'}}>
                        <Link to="/templateslist" style={{flex:""}}>
                        <Button style={{width:"100%",border:'solid 1px white'}}>Templates</Button>
                        </Link>
                        <div style={{width:'3vh'}}></div>
                        <Link to="/editor" style={{}} >
                        <Button style={{width:"100%",border:'solid 1px white',backgroundColor:'#7d2ae8'}}>Create Template</Button>
                        </Link>
                        <div style={{width:'5vh'}}></div>
                    </div> 
                    </Nav>
        </div>
    )
}

export default Navi
