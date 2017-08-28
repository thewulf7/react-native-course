import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC1bhr5feSETBGmjLf6qDQgWMusa0R77oQ',
            authDomain: 'test-auth-6902b.firebaseapp.com',
            databaseURL: 'https://test-auth-6902b.firebaseio.com',
            projectId: 'test-auth-6902b',
            storageBucket: 'test-auth-6902b.appspot.com',
            messagingSenderId: '978771896470'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}