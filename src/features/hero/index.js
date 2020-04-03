import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'


 class Hero extends Component{
   
    
    render(){
        const pos=this.props.heroposition.move;

        // console.log("this.props.heroposition.move",this.props.heroposition.move);
        const heroStyle={
            position: "relative",
            left:"50%",
            top: "90%",
            width: "50px",
            height:"50px",
            transform:` translate(${pos[1]}%,${pos[0]}%)`, 
          }
      
        return(
            <Fragment>
            <div className="Hero" style={heroStyle}/>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        heroposition: state.Hero,  
        

    }
}

export const HeroContainer = connect(mapStateToProps, null)(Hero);

