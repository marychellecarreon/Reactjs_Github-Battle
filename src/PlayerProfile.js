import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';

class PlayerProfile extends Component {
  render() {
    return (
				<CardPanel className="teal lighten-9 white-text">
           <p>Profile Name: {this.props.player_data.name}</p>
           <p>Repositories: {this.props.player_data.public_repos}</p>
           <p>Followers: {this.props.player_data.followers}</p>
           <center><img src={this.props.player_data.avatar_url} width='60%' className='img-circle' /></center>
				 </CardPanel>
    )
  }
}

export default PlayerProfile;
