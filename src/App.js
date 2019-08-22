//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


function CreateScoreBox(props) {
  return (
    <div className={props.team}>
      <h2 className={props.team + "__name"}>{props.teamName}</h2>
      <div className={props.team + "__score"}>{props.teamScore}</div>
    </div>
  )
}


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <CreateScoreBox team="home" teamScore={homeScore} teamName="Lions"/>

          <div className="timer">00:03</div>

          <CreateScoreBox team="away" teamScore={awayScore} teamName="Tigers"/>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setAwayScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
