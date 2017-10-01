import React, { Component } from 'react';


class Judging extends Component {
   render() {
     // check if object is empty, if its empty that means that player hasn't been entered
       var isPlayer1Ready = !!Object.keys(this.props.player1).length;
       var isPlayer2Ready = !!Object.keys(this.props.player2).length;
       var playersReady = isPlayer1Ready && isPlayer2Ready
          // console.log(playersReady)

       var result;
         if (this.props.player1.followers > this.props.player2.followers) {
             result = 'PLAYER 1 WINS!!!'
         } else if (this.props.player1.followers == this.props.player2.followers) {
            result = "IT'S A DRAW!!!"
         } else {
           result = 'PLAYER 2 WINS!!!'
         }

        return (
           <div>
             {playersReady ? <p>{result}</p> : null}
           </div>
        )
      }
  }

export default Judging

// Keys help React identify which items have changed, added or removed.
// Keys should be given to the elements inside the array to give the element
// a stable identity
