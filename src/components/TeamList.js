import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';
import TeamDetail from './TeamDetail';

class TeamList extends Component {
  state = { teams: [] };

  componentWillMount() {
    axios
      .get('http://data.nba.net')
      .then(response => this.setState({teams: response.data.sports_content.teams.team}));
  }

  renderTeams() {
    return this.state.teams.map(team => <TeamDetail key={team.team_id} team={team}/>);
  }

  render() {
    console.log(this.state)
    return (
      <View>
        {this.renderTeams()}
      </View>
    );
  }
}

export default TeamList;
