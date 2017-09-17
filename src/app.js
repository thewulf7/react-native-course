import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyC1bhr5feSETBGmjLf6qDQgWMusa0R77oQ",
            authDomain: "test-auth-6902b.firebaseapp.com",
            databaseURL: "https://test-auth-6902b.firebaseio.com",
            projectId: "test-auth-6902b",
            storageBucket: "test-auth-6902b.appspot.com",
            messagingSenderId: "978771896470",
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;
