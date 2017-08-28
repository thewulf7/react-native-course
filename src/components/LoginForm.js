import React, {Component} from 'react';
import {Input, Button, Card, CardSection} from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.cz"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}/>
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})}/>
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
