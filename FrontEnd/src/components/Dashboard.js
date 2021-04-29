import React from 'react'
import Navi from './Navi'

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
                    <div style={{width:'1200px',heigth:'2200px' ,border:'solid black 1px',backgroundImage:'url(https://www.ohiomfg.com/wp-content/uploads/revslider/videoslider_boxed/video_space_cover.jpg)',backgroundSize:'cover'}}>
                        <div style={{border:'solid 2px white',padding:'20px'}}>
                            <h2>Design Any Template</h2>
                            <div style={{margin:'100px'}}>
                                <button>Personal Templates</button>
                                <button>Poster</button>
                                <button>Announcments</button>
                                <button>Annual Reports</button>
                                <button>Financial Analysis</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        )
    }
    
}

export default Dashboard
