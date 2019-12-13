import React, { Component } from 'react'
import './Flex.css';
import img1 from '../images/img1.jpg';

export default class Schema extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="box">
                <div className="ImgBx">
                    <img src={img1}></img>
                </div>
            </div>
        </React.Fragment>
        )
    }
}
