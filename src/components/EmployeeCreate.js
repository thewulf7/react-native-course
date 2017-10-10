import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "./common";
import { employeeUpdate, employeeCreate } from "../actions";
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    state = {};

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || '1' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(null, { employeeUpdate, employeeCreate })(EmployeeCreate);
