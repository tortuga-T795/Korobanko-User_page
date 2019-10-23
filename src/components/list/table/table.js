import React from 'react';
import {persons} from '../persons'
import "./table.css"

export default class Table extends React.Component{
    state= {
        persons:persons
    };

    displayPerson = person => {
        const newList = person.map((el,index) => {
            return(
                <>
                    <th className="name-style">
                        <h5>{el.name}</h5>
                    </th>
                    <tr>
                        <td key={index} className="table-info">
                            <>{this.displayPersonList(el.list)}</>
                        </td>
                    </tr>
                </>
            )
        });
        return (<table>{newList}</table>)
    };

    displayPersonList = list => {
        const newList = list.map((el,index) => {
            return(
                <div key={index}>
                    <p>{index+1}-ое задание</p>
                    <ul>
                        <li key = '0'>{el.start}</li>
                        <li key = '1'>{el.end}</li>
                        <li key = '2'>{el.text}</li>
                    </ul>
                </div>
            )
        });
        return <>{newList}</>
    };

    render() {
        return (
            <div>
                {this.displayPerson(persons)}
            </div>
        );
    }
}