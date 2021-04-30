import React, { useRef, useState } from 'react'
import { Route } from 'react-router'
import {BrowserRouter as Router, Switch,Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Module from './module'
import Navi from './Navi'


class PersonalTemplates extends React.Component{
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
            <div>
                            <div style={{height:'10vh'}}></div>
                            <div className='container'>
            {/* <div style={{display:'grid',gridTemplateColumns : 'repeat(3, 1fr)',gridGap: '20px', alignItems: 'stretch', marginTop:'10px'}}> */}
            <h2 ><b>All your Templates</b></h2>
            <div className="row d-flex justify-content-between flex-wrap" style={{justifyContent:'space-between'}}>
            {
                this.state.temps.map((design,i)=>{
                    var img="";
                    if(design.img_url)
                     img=design.img_url;
                    return(
                        <div class="card img-fluid col-md-3 " style={{marginRight:'50px'}}>
                        <div style={{display:'block', position:'relative', width:'300px', height:'400px', overflow:'hidden',borderRadius:'10px',boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',}}>
                                {/* <img class="card-img-top" src={img} alt="Card image" style={{width:"300px",backgroundSize:'none',height:'250px',objectPosition:'-100px,-200px',borderRadius:'10px',boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'}}/> */}
                                <img class="card-img-top" src={img} alt="Card image" style={{position:'absolute',left:'-700px'}}/>

                        </div>
                               <Router>
                                    <Link to="/tempeditor"><button style={{position:'absolute',top:'80%',left:'50%',cursor:'pointer',color:'white',color:'black',borderRadius:'5px'}}>Edit</button></Link>
                                    <Route path="/tempeditor">
                                    <Module id={i} key={design}/>
                                    </Route>
                                </Router>
                                <div class="card-img-overlay">
                                <h5 className="card-title">Template {i+1} </h5>
                                
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
        </div>
        )
    }

}

export default PersonalTemplates;