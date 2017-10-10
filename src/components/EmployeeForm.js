import React, { Component } from "react";
import { View, Picker, Text } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    state = {};
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="name"
                        placeholder=""
                        value={this.props.name}
                        onChangeText={value =>
                            this.props.employeeUpdate({ prop: "name", value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="phone"
                        placeholder=""
                        value={this.props.phone}
                        onChangeText={value =>
                            this.props.employeeUpdate({ prop: "phone", value })}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: "column" }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={day =>
                            this.props.employeeUpdate({
                                prop: "shift",
                                value: day,
                            })}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
    },
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
