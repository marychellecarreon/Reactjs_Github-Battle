import React, { Component } from 'react';
import './App.css';
import PlayerProfile from './PlayerProfile';
import Judging from './Judging';
import { Row, Col, Button } from 'react-materialize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
         player1: {},
         player2: {}
    }
  }


lookupPlayer(player_number) {
  console.log(player_number)

  var username;

     if (player_number == 1) {
       username = this.player1Input.value
     } else {
       username = this.player2Input.value
     }

       fetch(`https://api.github.com/users/${username}`)
       .then(function(response) {
           // console.log(response)
             return response.json()
         })
         .then((response) => {
            if (player_number == 1) {
              this.setState({ player1: response })
            } else {
            this.setState({ player2: response })
          }
         })
         .catch(function(error) {
           console.log(error)
         })
       }

  render() {
    return (
      <div>
         <center><h1>Github Battle</h1></center>

         <Judging
            player1 = {this.state.player1}
            player2 = {this.state.player2}
          />
         <Row>
           <Col s={12} m={6}>

              <input placeholder="USERNAME"
                  ref={(input) => { this.player1Input = input; }}
                />
              <Button waves='light' onClick={() => this.lookupPlayer(1)}>Lookup</Button>
              <PlayerProfile player_data={this.state.player1} />
            </Col>

              <Col s={12} m={6}>

               <input placeholder="USERNAME"
                  ref={(input) => { this.player2Input = input; }}
                />
               <Button waves='light' onClick={() => this.lookupPlayer(2)}>Lookup</Button>

                <PlayerProfile player_data={this.state.player2} />
            </Col>
        </Row>
      </div>
    );
  }
}

export default App;


// Genetic Make up : constructor
//  In the Womb : ComponentWillMount
// Born : ComponentDidMount
// Adult : ComponentDidUpdate
// Deathly Sick : ComponentWillUnmount


//super props : helps to access the component class

// <Input placeholder="Placeholder" s={6} label="First Name" />
