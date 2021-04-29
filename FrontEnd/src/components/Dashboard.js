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
                        <h1>Carousel with outer controls</h1>
                        <p class="lead">Does what it says on the tin.</p>
                    </div>
                </div>
                <div class="row d-flex align-items-center">
                    <div class="col-1 d-flex align-items-center justify-content-center">
                 <a href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <div class="carousel-nav-icon">
               
                    </div>
                    </a>
                </div>
                </div>
                </div>
                </div>
        )
    }
    
}

export default Dashboard
