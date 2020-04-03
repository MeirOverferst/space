import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import {
  moveup,
  movedown,
  moveleft,
  moveright,
  shooter
} from '../features/hero/reducer'
import '../style/main.css'
import ArenaContainer from '../features/arena/index'


const mapDispatchToProps = dispatch => {
  return {
    clickup: () => dispatch(moveup()),
    clickdown: () => dispatch(movedown()),
    clickleft: () => dispatch(moveleft()),
    clickright: () => dispatch(moveright()),
    clicktoshoot: () => dispatch(shooter())
  }
}







class Main extends Component {
  render() {
    window.addEventListener("keydown", e => {
    if (e.which === 38) {
        this.props.clickup(e)
      } else if (e.which === 40) {
        this.props.clickdown(e)
      } else if (e.which === 37) {
        this.props.clickleft(e)
      }  else if(e.which === 39) {
        this.props.clickright(e)
      }
    })

    window.addEventListener("click",e=>{
  if(e){
    this.props.clicktoshoot(e)
  }
})

let pressTimer;
let multishoot;
window.addEventListener("mousedown",e=>{
  pressTimer = window.setTimeout((e)=>{
    multishoot= window.setInterval((e) => {
      this.props.clicktoshoot(e)
   }, 80);
    //after 400ms the player shoot each shot in 80ms-aka auto mode
  },300);
  return false;
})

window.addEventListener("mouseup",e=>{
 clearTimeout(pressTimer);
 clearInterval(multishoot);
 return false; 
});

    return (<div className="main_container" >
      <ArenaContainer />
      <div className="button_div" >
        <button className="start_Button" > START </button>
      </div>
    </div>
    );
  }
}




export const MainContainer = connect(null, mapDispatchToProps)(Main)

// <button onClick={this.props.clickup } >Top</button>
// <button onClick={this.props.clickdown} >Buttom</button>
// <button onClick={this.props.clickleft}  >Left</button>
// <button onClick={this.props.clickright}  >Right</button>