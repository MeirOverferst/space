import React, { Component } from 'react';
import { arenaSize } from './arenaSize'
import { HeroContainer } from '../hero/index'

export default class Arena extends Component {


    render() {

        const arenaStyle = {
            width: arenaSize[0],
            height: arenaSize[1],
            position: " relative",
            margin: "0 auto",
            background: "lightgrey",
        }
        return (
            <div style={arenaStyle} >
                <HeroContainer />
            </div>
        )
    }
}

