import React from 'react';


const Todolist = ({ todo }) => {
const mytoggle=(e)=>{
console.log(e.target.style);
e.target.style.textDecoration='line-through';
}

    const newtableau = todo.map(index => {
        return (
            <div key={index.id}>
                <p onClick={mytoggle} >{index.id}=>{index.contenu}</p>
            </div>
        )
    });

    return (<div>
        {newtableau}
    </div>

    );
}
export default Todolist;
