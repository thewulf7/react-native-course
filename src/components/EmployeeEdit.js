import _ from 'lodash';
import React from "react";
import { connect } from "react-redux";
import communications from 'react-native-communications';
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate, employeeSave } from '../actions';
import { Card, CardSection, Button } from "./common";

class EmployeeEdit extends Component {
    state = {};
    
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        })
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        communications.text(phone, `Your upcomming shift: ${shift}`);
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift} = state.employeeForm;

    return { name, phone, shift};
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
