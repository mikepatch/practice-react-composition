import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuid } from 'uuid';

import List from './List';
import Form from './Form';

class App extends React.Component {
    state = {
        usersList: [],
    }

    addUser(userName) {
        this.setState(state => {
            return {
                usersList: [...state.usersList, { id: uuid(), userName }],
            };
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const formElement = event.target;
        const { userName } = formElement.elements;

        this.addUser(userName.value)
        userName.value = '';
    }

    render() {
        const { usersList } = this.state;

        return (
            <section>
                <Form onSubmit={this.handleSubmit} />
                <List items={usersList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
