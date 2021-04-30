import React from 'react'

// class Cards extends React.Component{
//     render(){
//         const res =   fetch('/api/posts');
//         const cardData =   res.json();
//     return (
//         <div>
//            <section>
//         {
//           cardData.map((card, i) => {
//             return (
//               <div className="card" id="card" style={this.props.cardStyle} key={i}>
//                 <p className="title">{card.title}</p>
//                 <p className="desc">{card.desc}</p>
//                 <a href="#"><img src={card.url} /></a>
//               </div>
//             )
//           })
//         }
//         </section> 
//         </div>
//     )
// }
// }

class Display extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        temps:[],
        currentCard: 0,
        position: 0,
        cardStyle: {
          transform: 'translateX(0px)'
        },
        width: 100,
      };
    }
  
    async componentDidMount() {
    //   let boxWidth = document.getElementById("card").clientWidth;
      this.setState({ width: 100 });
      const res = await fetch('/api/posts');
        const data =await  res.json();
        this.setState({
            temps:data
        })
        console.log(this.state.temps)
       
    }
    
    // func: click the slider buttons
    handleClick(type) {
      // get the card's margin-right
      let margin = window.getComputedStyle(document.getElementById("card")).marginRight;
      margin = JSON.parse(margin.replace(/px/i, '')); 
  
      const cardWidth = this.state.width; // the card's width
      const cardMargin = margin; // the card's margin
      const cardNumber = this.state.temps.length() // the number of cards
      let currentCard = this.state.currentCard; // the index of the current card
      let position = this.state.position; // the position of the cards
  
      // slide cards
      if(type === 'next' && currentCard < cardNumber-1) {
        currentCard++;
        position -= (cardWidth+cardMargin);
      } else if(type === 'prev' && currentCard > 0) {
        currentCard--;
        position += (cardWidth+cardMargin);
      }
      this.setCard(currentCard, position);
    }
    
    setCard(currentCard, position) {
      this.setState({
        currentCard: currentCard,
        position: position,
        cardStyle: {
          transform: `translateX(${position}px)`
        }
      })
    }
  
    render() {
      return (
        <div className="cards-slider">
          <div className="slider-btns">
            <button className="slider-btn btn-l" onClick={() => this.handleClick('prev')}>&lt;</button>
            <button className="slider-btn btn-r" onClick={() => this.handleClick('next')}>&gt;</button>
          </div>
          {/* <Cards cardStyle={this.state.cardStyle} /> */}
          <div>
           <section>
        {
          this.state.temps.map((card, i) => {
            return (
              <div className="card" id="card" style={this.props.cardStyle} key={i}>
                <p className="title">{card.title}</p>
                <p className="desc">{card.desc}</p>
                <a href="#"><img src={card.url} /></a>
              </div>
            )
          })
        }
        </section> 
        </div>
        </div>
      )
    }
  }


export default Display