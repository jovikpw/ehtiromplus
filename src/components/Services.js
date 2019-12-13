import React, { Component } from 'react'
import {FaUser, FaUsers} from 'react-icons/fa';
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaUser />,
                title:"Кредитование с залогом",
                info:"Предоставление автотранспорта или имущества под залог"
            },
            {
                icon:<FaUser />,    
                title:"Кредитование под поручительством третьих лиц",
                info:"Предоставление справки с места работы поручителя"
            },
            {
                icon:<FaUsers />,
                title:"Групповая солидарность",
                info:"Группа состоит из трех или шести человек, члены группы несут ответсвенность за выплату кредита солидарно "
            },
            {
                icon:<FaUsers />,
                title:"Кредитование в качестве обеспечиния предоставляется смешанный залог",
                info:"Предоставление движимого имущества, а также поручительство третьих лиц."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Наши Услуги" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return ( <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
        )
    }
}
