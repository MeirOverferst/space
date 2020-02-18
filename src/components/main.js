import React, { Component} from 'react';
import { connect } from 'react-redux'
import {moveup,movedown,moveleft,moveright} from '../features/hero/reducer'
import '../style/main.css'
import ArenaContainer from '../features/arena/index'









 class Main extends Component {












    render() {
    // let clicks =[]
    window.addEventListener("keydown", e => {

      // let ArrowUp = this.props.clickup(e);
      // let ArrowDown = this.props.clickdown(e);
      // let ArrowLeft = this.props.clickleft(e);
      // let ArrowRight = this.props.clickright(e);
      // e.key=ArrowUp;
      // e.key=ArrowDown;
      // e.key=ArrowLeft;
      // e.key=ArrowRight;
       if (e.key === "ArrowUp") {this.props.clickup(e)}
       else if(e.key === "ArrowDown") {this.props.clickdown(e)}
       else if(e.key === "ArrowLeft") {this.props.clickleft(e)}
       else if(e.key === "ArrowRight") {this.props.clickright(e)}
      //  else if (e.code === "Space") {console.log("Potato")}

    }
    )



      return (
        <div className="main_container">
        <ArenaContainer/>
        <div className="button_div">
        <button className="start_Button" >START</button>

        </div>
        </div>
      );
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      clickup: () => dispatch(moveup()),
        clickdown: () => dispatch(movedown()),
        clickleft:() => dispatch(moveleft()),
        clickright:() => dispatch(moveright()),
    }
}

  

  export const MainContainer = connect(null, mapDispatchToProps)(Main)

  // <button onClick={this.props.clickup } >Top</button>
  // <button onClick={this.props.clickdown} >Buttom</button>
  // <button onClick={this.props.clickleft}  >Left</button>
  // <button onClick={this.props.clickright}  >Right</button>