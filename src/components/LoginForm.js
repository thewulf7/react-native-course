import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Card, CardSection, Input, Button, Spinner } from "./common";

class LoginForm extends Component {
    state = {};

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password, error } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size='large'/>
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.cz"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        secureTextEntry
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <Text>{this.props.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;

    return {
        email,
        password,
        error,
        loading,
    };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser,
})(LoginForm);
