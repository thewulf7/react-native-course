import React, { Component } from 'react';
import { Text, View } from 'react-native';

const CardSection = (props) => (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
);

const styles = {
  containerStyle: {
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export default CardSection;
