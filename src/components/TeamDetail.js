import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const TeamDetail = (props) => (
    <Card>
        <CardSection>
            <Text>{props.team.team_name}</Text>
        </CardSection>
        <CardSection>
            <Text>{props.team.team_name}</Text>
        </CardSection>
        <CardSection>
            <Text>{props.team.team_name}</Text>
        </CardSection>
    </Card>
);

export default TeamDetail;
