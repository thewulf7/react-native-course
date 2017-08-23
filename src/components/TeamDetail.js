import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const TeamDetail = ({ team }) => {
    const { team_name } = team;
    const { thumbnailStyle, headerContentStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image style={thumbnailStyle} source={{ uri: 'http://www.bitcoingambling.net/wp-content/uploads/2015/05/Y9cG2XlxsaTUP1wGMHiOGjpDSGmcczHS3EABEN8s_ORvUk4n57Z_XQwuC0GAYX-O91Aw300.png'}} />
                </View>
                <View style={headerContentStyle}>
                    <Text>{team_name}</Text>
                    <Text>{team_name}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
};

export default TeamDetail;
