import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
