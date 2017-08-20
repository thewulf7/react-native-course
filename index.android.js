
// import library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import TeamList from './src/components/TeamList';

// create component
const App = () => {
  return (
    <View>
      <Header headerText="GametTime Box" />
      <TeamList />
    </View>
  );
};

// render to a device
AppRegistry.registerComponent('albums', () => App);
