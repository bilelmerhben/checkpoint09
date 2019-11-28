import React from 'react';
import ButtonChild from './toggle';

const Todolist = ({todo}) => {
   

    const newtableau = todo.map(index => {
        return (
            <div key={index.id}>
               <ButtonChild> <p >{index.id}=>{index.contenu}</p></ButtonChild>
            </div>
        )
    });

    return (<div>
        {newtableau}
    
    </div>

    );
}
export default Todolist;
