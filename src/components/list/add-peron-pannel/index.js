import React from 'react'

export default class SearchPanel extends React.Component{
    render() {
        return(
            <div>
                <input placeholder="Новый элемент" type = "text"/>
                <button>addEl</button>
            </div>
        )
    }
};