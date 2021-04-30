import React from 'react'
import Navi from './Navi'
import {BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import Cards from './Cards'
import Templatelist from './templatelist'
import PersonalTemplates from './PersonalTemplates'

class Dashboard extends React.Component{
    async componentDidMount(){
        const res = await fetch('/api/posts');
        const data = await res.json();
        this.setState({
            temps:data
        })
        console.log(this.state.temps)
    }
    render(){
        return (
            <div>
                <Navi/>
                <div style={{height:'5vh'}}></div>
                <div class="my-5 text-center container">
                <div class="row mb-2">
                    <div class="col text-center">
                        <h1>Email Editor </h1>
                        <p class="lead">Drag and Drop what all you want.</p>
                    </div>
                    <Router>
                    <div style={{width:'1200px',heigth:'2200px' ,border:'solid black 1px',backgroundImage:'url(https://www.ohiomfg.com/wp-content/uploads/revslider/videoslider_boxed/video_space_cover.jpg)',backgroundSize:'cover'}}>
                        <div style={{border:'solid 2px white',padding:'20px'}}>
                            <h2 style={{color:'#9896a4'}}>Design Any Template</h2>
                            <div style={{margin:'100px'}}>
                            
                            <Link to='/pt'><button>Personal Templates</button></Link>
                             <Link to='/p'><button>Poster</button></Link>   
                             <Link to='/pt'><button>Announcments</button></Link>
                             <Link to='/p' ><button>Annual Reports</button></Link>
                                
                            </div>
                        </div>
                    </div>
                    <Switch>
                                <Route path="/pt"><Templatelist/></Route>

                            </Switch>
                            </Router>
                </div>
                </div>
                </div>
        )
    }
}

export default Dashboard
