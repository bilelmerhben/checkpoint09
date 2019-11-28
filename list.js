import React from 'react';
import Todolist from './todolist';
import ButtonChild from './toggle';
import './task.css';
export default class List extends React.Component {

    state = {

        tab: [
            { id: 1, contenu: 'Wake up' },
            { id: 2, contenu: 'Good morning' },
            { id: 3, contenu: 'Have a good day!' }
        ],
        contenue: '',
        condition: false

    }

    handleChange = (e) => {


        this.setState({

            contenue: e.target.value

        })


    }

    handleClick = (e) => {

        const tab2 = [...this.state.tab, { id: this.state.tab.length + 1, contenu: this.state.contenue }]
        this.setState({

            tab: tab2

        })
        e.preventDefault()

    }
    toggleclass = () => {
        this.setState({
            condition: !this.state.condition
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <input type='text' placeholder="Write here please" onChange={this.handleChange} />
                    <button >Add</button>
                </form>
                <Todolist todo={this.state.tab} ></Todolist>
                
                <ButtonChild
                    className={(this.state.condition) ? 'this.state.tab.contenu toggled'  : 'this.state.tab'}
                    toggleClassName={this.toggleclass}
                >

                </ ButtonChild>
            </div>




        );
    }
}  