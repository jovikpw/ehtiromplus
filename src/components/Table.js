import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            {name: 'Виды кредитов', age: 'Сумма', email: 'Обеспечение' },
            {name: 'Кредиты обеспеченные залогом', age: 'До 50 000 000 сумов', email: 'Автотранспорт и ювелирные изделия' },
            {name: 'Кредиты выданные под поручительство', age: 'До 20 000 000 сумов', email: 'Поручительство третьих лиц' },
            {name: 'Групповые кредиты', age: 'До 12 000 000сумов', email: 'Групповое поручительство' },
            {name: 'Кредиты на образование', age: 'До 50 000 000 сумов', email: 'Поручительство третьих лиц' },
            {name: 'Потребительские кредиты', age: 'До 50 000 000 сумов', email: 'Автотранспорт, ювелирные изделия и поручительство третьих лиц' },
            {name: 'Лизинг', age: 'До 600 000 000 сумов', email: 'Объекты лизинга' },
            {name: 'Микрокредиты', age: 'До 300 000 000 сумов', email: 'Недвижимые имущества, Автотранспорт, поручительство 3их лиц' }
         ]
      }
   }
   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age, email } = student //destructuring
       return (
          <tr key={id}>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }
   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      
    return (
        <React.Fragment>
        <div>
            <h1 id='title'>Информация о кредитах</h1>
            <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
         </React.Fragment>
      );
   }
}

export default Table