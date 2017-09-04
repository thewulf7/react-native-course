import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

export default class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyC1bhr5feSETBGmjLf6qDQgWMusa0R77oQ",
            authDomain: "test-auth-6902b.firebaseapp.com",
            databaseURL: "https://test-auth-6902b.firebaseio.com",
            projectId: "test-auth-6902b",
            storageBucket: "test-auth-6902b.appspot.com",
            messagingSenderId: "978771896470",
        });

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button onPress={() => firebase.auth().signOut()}>Log out</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}
