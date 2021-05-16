import React from 'react';
import './main.css';
import {Card ,Button} from "react-bootstrap"
import currency from "../assets/currency.jpg";
import leaderboard from "../assets/leaderboard.jpg";
import trophy from "../assets/trophy.png"

const main = () => {
    return (
        <div className="main">
            <h1>Feeling Lucky today?</h1>
            <h3>Test your luck against the roll of a dice and win big today</h3>
           
            <div className="main-images"> 
            <Card style={{ width: '18rem',border:"none" }}>
  <Card.Img variant="top" src={trophy} />
  <Card.Body>
    <Card.Title>Place Bets</Card.Title>
    <Card.Text>
     Correctly guess the dice's roll.



    </Card.Text>
    <Button variant="light">Sign Up</Button>
  </Card.Body>
</Card>

 <Card style={{ width: '18rem',border:"none" }}>
  <Card.Img variant="top" src={currency} />
  <Card.Body>
    <Card.Title>Win Currency</Card.Title>
    <Card.Text>
     Gain coins if your guess is correct.
    </Card.Text>
    <Button variant="light">Sign Up</Button>
  </Card.Body>
</Card>
 <Card style={{ width: '18rem',border:"none" }}>
  <Card.Img variant="top" src={leaderboard} />
  <Card.Body>
    <Card.Title>LeaderBoard</Card.Title>
    <Card.Text>
     Compare your results to others.
    </Card.Text>
    <Button variant="light">SignUp</Button>
  </Card.Body>
</Card>
  </div>               
 </div>
    );
};

export default main;