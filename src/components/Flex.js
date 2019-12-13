import React, { Component } from 'react'
import './Flex.css'
import nargiza from '../images/DSC_0005 1.png';

export default class Flex extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="box">
                <div className="ImgBx">
                    <img src={nargiza}></img>
                </div>
                <div className="contentt">
                    <h2>НАРГИЗА АЛИЕВА</h2>
                    <h4>Исполнительный директор, соучредитель.</h4>
                    <h6>Опыт работы в микрофинансировании более 12 лет.</h6>
                </div>
            </div>
        </React.Fragment>
        )
    }
}
