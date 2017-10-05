import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { ListView } from "react-native";
import ListItem from './ListItem';
import { employeeFetch } from "../actions";
 
class EmployeeList extends Component {
    state = {};

    componentWillMount() {
        this.props.employeeFetch();

        this.createDataSource();
    }

    componentWillReceiveProps(nextProps) {}

    createDataSource() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.dataSource = ds.cloneWithRows(this.props.employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }
 
    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
