import React, { useRef, useState } from 'react'
import { Route } from 'react-router'
import {BrowserRouter as Router, Switch,Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Module from './module'
import Navi from './Navi'


class Templatelist extends React.Component{
    state={
        temps:[],
        modalShow:false
    }
    async componentDidMount(){
        const res = await fetch('/api/posts');
        const data = await res.json();
        this.setState({
            temps:data
        })
        console.log(this.state.temps)
       
    }

    render(){

        return(
            <div><Navi/>
                            <div style={{height:'5vh'}}></div>
            <div style={{display:'grid',gridTemplateColumns : 'repeat(3, 1fr)',gridGap: '20px', alignItems: 'stretch', marginTop:'10px'}}>

            {
                this.state.temps.map((design,i)=>{
                    var img="";
                    if(design.img_url)
                     img=design.img_url;
                    return(
                        <div class="card img-fluid" style={{width:"50px"}}>
                                <img class="card-img-top" src={img} alt="Card image" style={{width:"150px"}}/>
                                <div class="card-img-overlay">
                                <h5 className="card-title">Template {i+1} </h5>
                                <h6 className="card-subtitle mb-2 text-muted">Data</h6> 
                                <Router>
                                    <Link to="/tempeditor"><Button>Edit</Button></Link>
                                    <Route path="/tempeditor">
                                    <Module id={i} key={design}/>
                                    </Route>
                                </Router>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
        )
    }

}

export default Templatelist;