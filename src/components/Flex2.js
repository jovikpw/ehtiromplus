import React, { Component } from 'react'
import './Flex.css'
import nargiza from '../images/DSC_0005 1.png';

export default class Flexxx extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="box">
                <div className="ImgBx">
                    <img src={nargiza}></img>
                </div>
                <div className="contentt">
                    <h2>АШУРОВ ДИЛШОД</h2>
                    <h4>Главный бухгалтер.</h4>
                    <h6>Опыт работы в микрофинансировании более 10 лет.</h6>
                </div>
            </div>
        </React.Fragment>
        )
    }
}
