import "./App.css";
import { useState } from "react";

import checkmark from "./images/checkmark.svg";
import skip from "./images/skip.svg";

import bow from "./images/bow-and-arrow.svg";
import sword from "./images/sword.svg";
import handcuffs from "./images/handcuffs.svg";
import healer from "./images/healer.svg";
import easy from "./images/easy.svg";
import medium from "./images/medium.svg";
import hard from "./images/hard.svg";
import god from "./images/god.svg";
import fighting from "./images/fighting.svg";
import strategy from "./images/strategy.svg";
import timing from "./images/time.svg";
import teamwork from "./images/teamwork.svg";
import popular from "./images/popular.svg";
import uncommon from "./images/uncommon.svg";
import angel from "./images/angel.svg";
import zigzag from "./images/zigzag.svg";
import lawyer from "./images/lawyer.svg";
import similar from "./images/similar.svg";
import snowflake from "./images/snowflake.svg";
import monster from "./images/monster.svg";
import bunny from "./images/bunny.svg";
import muscle from "./images/muscle.svg";
import clown from "./images/clown.svg";
import person from "./images/person.svg";
import people from "./images/people.svg";
import reinforcement from "./images/reinforcement.svg";
import ranged from "./images/ranged.svg";
import meele from "./images/meele.svg";
import baby from "./images/baby.svg";
import grandpa from "./images/grandpa.svg";

function App() {
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      {page < 12 ? (
        <h1>
          Which League of Legends Champion Should You Play<br></br>Quiz
        </h1>
      ) : null}
      {page > 0 && page < 12 ? (
        <div className="Sidebar">
          <ol>
            <li>
              {answers[0] > 0 ? (
                <img
                  className="check"
                  src={checkmark}
                  alt="Green check mark"
                ></img>
              ) : null}
              <div className="LinkToQuestion" onClick={() => setPage(1)}>
                Q1
              </div>
            </li>
            <li>
              {answers[1] > 0 ? (
                <img
                  className="check"
                  src={checkmark}
                  alt="Green check mark"
                ></img>
              ) : null}
              <div className="LinkToQuestion" onClick={() => setPage(2)}>
                Q2
              </div>
            </li>
            <li>
              {answers[2] > 0 ? (
                <img
                  className="check"
                  src={checkmark}
                  alt="Green check mark"
                ></img>
              ) : null}
              <div className="LinkToQuestion" onClick={() => setPage(3)}>
                Q3
              </div>
            </li>
            <li>
              {answers[3] > 0 ? (
                <img
                  className="check"
                  src={checkmark}
                  alt="Green check mark"
                ></img>
              ) : null}
              <div className="LinkToQuestion" onClick={() => setPage(4)}>
                Q4
              </div>
            </li>
            <li>
              {answers[4] > 0 ? (
                <img
                  className="check"
                  src={checkmark}
                  alt="Green check mark"
                ></img>
              ) : null}
              <div className="LinkToQuestion" onClick={() => setPage(5)}>
                Q5
              </div>
            </li>
            <li>
              {answers[5] > 0 ? (
                <img
                  className="check"
                  src={checkmark}
                  alt="Green check mark"
                ></img>
              ) : null}
              <div className="LinkToQuestion" onClick={() => setPage(6)}>
                Q6
              </div>
            </li>
            <li>
              {answers[6] > 0 ? (
                <img
                  className="check"
                  src={checkmark}
                  alt="Green check mark"
                ></img>
              ) : null}
              <div className="LinkToQuestion" onClick={() => setPage(7)}>
                Q7
              </div>
            </li>
            <li>
              {answers[7] > 0 ? (
                <img
                  className="check"
                  src={checkmark}
                  alt="Green check mark"
                ></img>
              ) : null}
              <div className="LinkToQuestion" onClick={() => setPage(8)}>
                Q8
              </div>
            </li>
            <li>
              {answers[8] > 0 ? (
                <img
                  className="check"
                  src={checkmark}
                  alt="Green check mark"
                ></img>
              ) : null}
              <div className="LinkToQuestion" onClick={() => setPage(9)}>
                Q9
              </div>
            </li>
            <li>
              {answers[9] > 0 ? (
                <img
                  className="check"
                  src={checkmark}
                  alt="Green check mark"
                ></img>
              ) : null}
              <div className="LinkToQuestion" onClick={() => setPage(10)}>
                Q10
              </div>
            </li>
          </ol>
        </div>
      ) : null}
      <div className="Body">
        {page === 0 ? (
          <>
            <h2>
              Answer these questions and we'll suggest the perfect champion for
              you! For a faster recomendation, you can skip as many questions as
              you'd like. For a more accurate recommendation, answer all 10.
            </h2>
            <div className="Startbutton" onClick={() => setPage(1)}>
              <p>Begin Quiz</p>
            </div>
          </>
        ) : page === 1 ? (
          <>
            <h2>
              Question 1: How do you prefer to provide value to your team?
            </h2>
            <div className="FirstAnswer" onClick={() => logAnswer(1, 1)}>
              <img src={bow} alt="Bow and arrow"></img>
              <p>Dealing tons of damage</p>
            </div>
            <div className="SecondAnswer" onClick={() => logAnswer(1, 2)}>
              <img src={sword} alt="Two swords"></img>
              <p>Dueling enemies while narrowly evading death</p>
            </div>
            <div className="ThirdAnswer" onClick={() => logAnswer(1, 3)}>
              <img src={handcuffs} alt="Handcuffs"></img>
              <p>Providing crowd control to keep enemies locked down</p>
            </div>
            <div className="FourthAnswer" onClick={() => logAnswer(1, 4)}>
              <img src={healer} alt="Heart with wings"></img>
              <p>Making allies stronger and/or keeping them alive</p>
            </div>
            <div className="Skipbutton" onClick={() => logAnswer(1, 0)}>
              <img className="Skipimg" src={skip} alt="Right arrow"></img>
              <div>Skip Question</div>
            </div>
          </>
        ) : page === 2 ? (
          <>
            <h2>
              Question 2: How difficult of a champion are you looking for?
            </h2>
            <div className="FirstAnswer" onClick={() => logAnswer(2, 1)}>
              <img src={easy} alt="Baby stroller"></img>
              <p>An easier champion I can learn quickly</p>
            </div>
            <div className="SecondAnswer" onClick={() => logAnswer(2, 2)}>
              <img src={medium} alt="Half-filled star"></img>
              <p>Somewhere in the middle</p>
            </div>
            <div className="ThirdAnswer" onClick={() => logAnswer(2, 3)}>
              <img src={hard} alt="Fire"></img>
              <p>Give me a challenge</p>
            </div>
            <div className="FourthAnswer" onClick={() => logAnswer(2, 4)}>
              <img src={god} alt="Jesus"></img>
              <p>I'm a mechanical god, every champion is easy to me</p>
            </div>
            <div className="Skipbutton" onClick={() => logAnswer(2, 0)}>
              <img className="Skipimg" src={skip} alt="Right arrow"></img>
              <div>Skip Question</div>
            </div>
          </>
        ) : page === 3 ? (
          <>
            <h2>Question 3: What is the best path to victory?</h2>
            <div className="FirstAnswer" onClick={() => logAnswer(3, 1)}>
              <img src={fighting} alt="Explosion"></img>
              <p>Continually fighting and outplaying my opponents</p>
            </div>
            <div className="SecondAnswer" onClick={() => logAnswer(3, 2)}>
              <img src={strategy} alt="Pawn"></img>
              <p>Strategically disassembling the enemy team</p>
            </div>
            <div className="ThirdAnswer" onClick={() => logAnswer(3, 3)}>
              <img src={timing} alt="Stopwatch"></img>
              <p>Biding time to find the perfect moment to strike</p>
            </div>
            <div className="FourthAnswer" onClick={() => logAnswer(3, 4)}>
              <img src={teamwork} alt="High five"></img>
              <p>
                Working with your team to be greater than the sum of your parts
              </p>
            </div>
            <div className="Skipbutton" onClick={() => logAnswer(3, 0)}>
              <img className="Skipimg" src={skip} alt="Right arrow"></img>
              <div>Skip Question</div>
            </div>
          </>
        ) : page === 4 ? (
          <>
            <h2>Question 4: I'm looking for a champion that...</h2>
            <div className="FirstAnswer" onClick={() => logAnswer(4, 1)}>
              <img src={popular} alt="A crowd of people"></img>
              <p>
                Is very popular and there are lots of resources available for
              </p>
            </div>
            <div className="SecondAnswer" onClick={() => logAnswer(4, 2)}>
              <img src={uncommon} alt="A confused person"></img>
              <p>Is less common and my opponents may not know how to counter</p>
            </div>
            <div className="Skipbutton" onClick={() => logAnswer(4, 0)}>
              <img className="Skipimg" src={skip} alt="Right arrow"></img>
              <div>Skip Question</div>
            </div>
          </>
        ) : page === 5 ? (
          <>
            <h2>Question 5: I like characters with an alignment of...</h2>
            <div className="FirstAnswer" onClick={() => logAnswer(5, 1)}>
              <img src={angel} alt="Angel"></img>
              <p>Lawful good</p>
            </div>
            <div className="SecondAnswer" onClick={() => logAnswer(5, 2)}>
              <img src={zigzag} alt="A zig-zag line"></img>
              <p>Chaotic good</p>
            </div>
            <div className="ThirdAnswer" onClick={() => logAnswer(5, 3)}>
              <img src={lawyer} alt="Person holding scales of justice"></img>
              <p>Lawful evil</p>
            </div>
            <div className="FourthAnswer" onClick={() => logAnswer(5, 4)}>
              <img src={fighting} alt="Explosion"></img>
              <p>Chaotic evil</p>
            </div>
            <div className="Skipbutton" onClick={() => logAnswer(5, 0)}>
              <img className="Skipimg" src={skip} alt="Right arrow"></img>
              <div>Skip Question</div>
            </div>
          </>
        ) : page === 6 ? (
          <>
            <h2>Question 6: I want a champion with a playstyle that is...</h2>
            <div className="FirstAnswer" onClick={() => logAnswer(6, 1)}>
              <img src={similar} alt="Photoshop dropper tool"></img>
              <p>Similar to other champions in that role</p>
            </div>
            <div className="SecondAnswer" onClick={() => logAnswer(6, 2)}>
              <img src={snowflake} alt="Snowflake"></img>
              <p>Unique to that champion</p>
            </div>
            <div className="Skipbutton" onClick={() => logAnswer(6, 0)}>
              <img className="Skipimg" src={skip} alt="Right arrow"></img>
              <div>Skip Question</div>
            </div>
          </>
        ) : page === 7 ? (
          <>
            <h2>Question 7: I like characters that appear...</h2>
            <div className="FirstAnswer" onClick={() => logAnswer(7, 1)}>
              <img src={monster} alt="Monster"></img>
              <p>Intimidating</p>
            </div>
            <div className="SecondAnswer" onClick={() => logAnswer(7, 2)}>
              <img src={bunny} alt="Bunny"></img>
              <p>Cute</p>
            </div>
            <div className="ThirdAnswer" onClick={() => logAnswer(7, 3)}>
              <img src={muscle} alt="Flexed bicep"></img>
              <p>Powerful</p>
            </div>
            <div className="FourthAnswer" onClick={() => logAnswer(7, 4)}>
              <img src={clown} alt="Clown"></img>
              <p>Whimsical</p>
            </div>
            <div className="Skipbutton" onClick={() => logAnswer(7, 0)}>
              <img className="Skipimg" src={skip} alt="Right arrow"></img>
              <div>Skip Question</div>
            </div>
          </>
        ) : page === 8 ? (
          <>
            <h2>Question 8: I primarily like to...</h2>
            <div className="FirstAnswer" onClick={() => logAnswer(8, 1)}>
              <img src={person} alt="Person"></img>
              <p>Work alone</p>
            </div>
            <div className="SecondAnswer" onClick={() => logAnswer(8, 2)}>
              <img src={people} alt="2 people"></img>
              <p>Work with a partner</p>
            </div>
            <div className="ThirdAnswer" onClick={() => logAnswer(8, 3)}>
              <img src={reinforcement} alt="Person with a plus sign"></img>
              <p>Provide reinforcements to my teammates as needed</p>
            </div>
            <div className="Skipbutton" onClick={() => logAnswer(8, 0)}>
              <img className="Skipimg" src={skip} alt="Right arrow"></img>
              <div>Skip Question</div>
            </div>
          </>
        ) : page === 9 ? (
          <>
            <h2>Question 9: I prefer to fight...</h2>
            <div className="FirstAnswer" onClick={() => logAnswer(9, 1)}>
              <img src={ranged} alt="Arrow in a target"></img>
              <p>From a safe distance away</p>
            </div>
            <div className="SecondAnswer" onClick={() => logAnswer(9, 2)}>
              <img src={meele} alt="Armor and a sword"></img>
              <p>Up close and personal</p>
            </div>
            <div className="Skipbutton" onClick={() => logAnswer(9, 0)}>
              <img className="Skipimg" src={skip} alt="Right arrow"></img>
              <div>Skip Question</div>
            </div>
          </>
        ) : page === 10 ? (
          <>
            <h2>Question 10: I prefer champions that...</h2>
            <div className="FirstAnswer" onClick={() => logAnswer(10, 1)}>
              <img src={baby} alt="Baby"></img>
              <p>Have been released more recently</p>
            </div>
            <div className="SecondAnswer" onClick={() => logAnswer(10, 2)}>
              <img src={grandpa} alt="Old man"></img>
              <p>Have existed since the dawn of time (aka before 2014)</p>
            </div>
            <div className="Skipbutton" onClick={() => logAnswer(10, 0)}>
              <img className="Skipimg" src={skip} alt="Right arrow"></img>
              <div>Skip Question</div>
            </div>
          </>
        ) : page === 11 ? (
          <>
            <h2>
              Are you sure you're ready to submit and view your results?
              <br></br> Click the following button to submit or use the sidebar
              to review and revise your answers.
            </h2>
            <div className="Confirmbutton" onClick={() => setPage(12)}>
              <div>Confirm Submission</div>
            </div>
          </>
        ) : page === 12 ? (
          <>
            <h1>You should play...</h1>
            <h3>{getRecommendation()}</h3>
          </>
        ) : null}
        {page > 0 && page <= 10 ? (
          <div className="Submitbutton" onClick={() => setPage(11)}>
            <div>Submit answers</div>
          </div>
        ) : null}
      </div>
    </div>
  );

  function getRecommendation() {
    const champs = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ];
    if (answers[0] > 0) {
      if (answers[0] === 1) {
        champs[1] += 1;
        champs[2] += 1;
        champs[3] += 1;
        champs[6] += 1;
        champs[7] += 1;
        champs[8] += 1;
        champs[9] += 1;
        champs[10] += 1;
        champs[11] += 1;
        champs[15] += 1;
        champs[17] += 1;
        champs[19] += 1;
        champs[21] += 1;
        champs[23] += 1;
        champs[25] += 1;
        champs[26] += 1;
        champs[27] += 1;
        champs[28] += 1;
        champs[29] += 1;
      } else if (answers[0] === 2) {
        champs[0] += 1;
        champs[13] += 1;
        champs[18] += 1;
        champs[22] += 1;
        champs[24] += 1;
      } else if (answers[0] === 3) {
        champs[4] += 1;
        champs[5] += 1;
        champs[14] += 1;
        champs[16] += 1;
        champs[20] += 1;
      } else {
        champs[12] += 1;
      }
    }
    if (answers[1] > 0) {
      if (answers[1] === 1) {
        champs[1] += 1;
        champs[5] += 1;
        champs[6] += 1;
        champs[7] += 1;
        champs[9] += 1;
        champs[16] += 1;
        champs[20] += 1;
        champs[22] += 1;
        champs[24] += 1;
      } else if (answers[1] === 2) {
        champs[4] += 1;
        champs[10] += 1;
        champs[13] += 1;
        champs[14] += 1;
        champs[15] += 1;
        champs[17] += 1;
        champs[21] += 1;
        champs[23] += 1;
        champs[28] += 1;
        champs[29] += 1;
      } else if (answers[1] === 3) {
        champs[0] += 1;
        champs[3] += 1;
        champs[12] += 1;
        champs[18] += 1;
        champs[19] += 1;
        champs[26] += 1;
        champs[27] += 1;
      } else {
        champs[2] += 1;
        champs[8] += 1;
        champs[11] += 1;
        champs[25] += 1;
      }
    }
    if (answers[2] > 0) {
      if (answers[2] === 1) {
        champs[0] += 1;
        champs[2] += 1;
        champs[3] += 1;
        champs[13] += 1;
        champs[14] += 1;
        champs[15] += 1;
        champs[17] += 1;
        champs[22] += 1;
        champs[23] += 1;
        champs[25] += 1;
        champs[27] += 1;
      } else if (answers[2] === 2) {
        champs[1] += 1;
        champs[8] += 1;
        champs[12] += 1;
        champs[18] += 1;
        champs[29] += 1;
      } else if (answers[2] === 3) {
        champs[6] += 1;
        champs[7] += 1;
        champs[10] += 1;
        champs[11] += 1;
        champs[19] += 1;
        champs[20] += 1;
        champs[21] += 1;
        champs[24] += 1;
        champs[26] += 1;
        champs[28] += 1;
      } else {
        champs[4] += 1;
        champs[5] += 1;
        champs[9] += 1;
        champs[16] += 1;
      }
    }
    if (answers[3] > 0) {
      if (answers[3] === 1) {
        champs[0] += 1;
        champs[1] += 1;
        champs[2] += 1;
        champs[4] += 1;
        champs[5] += 1;
        champs[7] += 1;
        champs[9] += 1;
        champs[10] += 1;
        champs[14] += 1;
        champs[15] += 1;
        champs[16] += 1;
        champs[17] += 1;
        champs[20] += 1;
        champs[21] += 1;
        champs[22] += 1;
        champs[29] += 1;
      } else {
        champs[3] += 1;
        champs[6] += 1;
        champs[8] += 1;
        champs[11] += 1;
        champs[12] += 1;
        champs[13] += 1;
        champs[18] += 1;
        champs[19] += 1;
        champs[23] += 1;
        champs[24] += 1;
        champs[25] += 1;
        champs[26] += 1;
        champs[27] += 1;
        champs[28] += 1;
      }
    }
    if (answers[4] > 0) {
      if (answers[4] === 1) {
        champs[6] += 1;
        champs[8] += 1;
        champs[9] += 1;
        champs[10] += 1;
        champs[11] += 1;
        champs[16] += 1;
        champs[17] += 1;
        champs[21] += 1;
      } else if (answers[4] === 2) {
        champs[1] += 1;
        champs[3] += 1;
        champs[4] += 1;
        champs[5] += 1;
        champs[7] += 1;
        champs[12] += 1;
        champs[14] += 1;
        champs[23] += 1;
        champs[25] += 1;
        champs[26] += 1;
        champs[29] += 1;
      } else if (answers[4] === 3) {
        champs[18] += 1;
        champs[19] += 1;
        champs[22] += 1;
        champs[27] += 1;
        champs[28] += 1;
      } else {
        champs[0] += 1;
        champs[2] += 1;
        champs[13] += 1;
        champs[15] += 1;
        champs[20] += 1;
        champs[24] += 1;
      }
    }
    if (answers[5] > 0) {
      if (answers[5] === 1) {
        champs[0] += 1;
        champs[1] += 1;
        champs[7] += 1;
        champs[9] += 1;
        champs[10] += 1;
        champs[13] += 1;
        champs[14] += 1;
        champs[15] += 1;
        champs[17] += 1;
        champs[18] += 1;
        champs[20] += 1;
        champs[21] += 1;
        champs[22] += 1;
        champs[23] += 1;
        champs[24] += 1;
        champs[27] += 1;
      } else {
        champs[2] += 1;
        champs[3] += 1;
        champs[4] += 1;
        champs[5] += 1;
        champs[6] += 1;
        champs[8] += 1;
        champs[11] += 1;
        champs[12] += 1;
        champs[16] += 1;
        champs[19] += 1;
        champs[25] += 1;
        champs[26] += 1;
        champs[28] += 1;
        champs[29] += 1;
      }
    }
    if (answers[6] > 0) {
      if (answers[6] === 1) {
        champs[0] += 1;
        champs[8] += 1;
        champs[13] += 1;
        champs[15] += 1;
        champs[20] += 1;
        champs[24] += 1;
        champs[27] += 1;
        champs[28] += 1;
      } else if (answers[6] === 2) {
        champs[1] += 1;
        champs[5] += 1;
        champs[6] += 1;
        champs[7] += 1;
        champs[21] += 1;
        champs[26] += 1;
      } else if (answers[6] === 3) {
        champs[2] += 1;
        champs[3] += 1;
        champs[4] += 1;
        champs[9] += 1;
        champs[10] += 1;
        champs[11] += 1;
        champs[16] += 1;
        champs[17] += 1;
        champs[18] += 1;
        champs[19] += 1;
        champs[22] += 1;
        champs[23] += 1;
      } else {
        champs[12] += 1;
        champs[14] += 1;
        champs[25] += 1;
        champs[29] += 1;
      }
    }
    if (answers[7] > 0) {
      if (answers[7] === 1) {
        champs[0] += 1;
        champs[1] += 1;
        champs[2] += 1;
        champs[3] += 1;
        champs[6] += 1;
        champs[7] += 1;
        champs[10] += 1;
        champs[11] += 1;
        champs[18] += 1;
        champs[19] += 1;
        champs[20] += 1;
        champs[21] += 1;
        champs[22] += 1;
        champs[24] += 1;
        champs[26] += 1;
      } else if (answers[7] === 2) {
        champs[4] += 1;
        champs[8] += 1;
        champs[9] += 1;
        champs[12] += 1;
        champs[14] += 1;
        champs[15] += 1;
        champs[16] += 1;
        champs[17] += 1;
        champs[25] += 1;
        champs[29] += 1;
      } else {
        champs[5] += 1;
        champs[13] += 1;
        champs[23] += 1;
        champs[27] += 1;
        champs[28] += 1;
      }
    }
    if (answers[8] > 0) {
      if (answers[8] === 1) {
        champs[1] += 1;
        champs[3] += 1;
        champs[6] += 1;
        champs[7] += 1;
        champs[8] += 1;
        champs[9] += 1;
        champs[10] += 1;
        champs[11] += 1;
        champs[12] += 1;
        champs[15] += 1;
        champs[17] += 1;
        champs[19] += 1;
        champs[21] += 1;
        champs[25] += 1;
        champs[29] += 1;
      } else {
        champs[0] += 1;
        champs[2] += 1;
        champs[4] += 1;
        champs[5] += 1;
        champs[13] += 1;
        champs[14] += 1;
        champs[16] += 1;
        champs[18] += 1;
        champs[20] += 1;
        champs[22] += 1;
        champs[23] += 1;
        champs[24] += 1;
        champs[26] += 1;
        champs[27] += 1;
        champs[28] += 1;
      }
    }
    if (answers[9] > 0) {
      if (answers[9] === 1) {
        champs[3] += 1;
        champs[8] += 1;
        champs[10] += 1;
        champs[11] += 1;
        champs[12] += 1;
        champs[13] += 1;
        champs[16] += 1;
        champs[18] += 1;
        champs[26] += 1;
      } else {
        champs[0] += 1;
        champs[1] += 1;
        champs[2] += 1;
        champs[4] += 1;
        champs[5] += 1;
        champs[6] += 1;
        champs[7] += 1;
        champs[9] += 1;
        champs[14] += 1;
        champs[15] += 1;
        champs[17] += 1;
        champs[19] += 1;
        champs[20] += 1;
        champs[21] += 1;
        champs[22] += 1;
        champs[23] += 1;
        champs[24] += 1;
        champs[25] += 1;
        champs[27] += 1;
        champs[28] += 1;
        champs[29] += 1;
      }
    }

    let maxInd = 0;
    let maxVal = champs[0];
    for (let i = 1; i < 30; i++) {
      if (champs[i] > maxVal) {
        maxInd = i;
        maxVal = champs[i];
      }
    }
    switch (maxInd) {
      case 0:
        return "Aatrox";
      case 1:
        return "Ahri";
      case 2:
        return "Akali";
      case 3:
        return "Akshan";
      case 4:
        return "Alistar";
      case 5:
        return "Amumu";
      case 6:
        return "Anivia";
      case 7:
        return "Annie";
      case 8:
        return "Aphelios";
      case 9:
        return "Ashe";
      case 10:
        return "Aurelion Sol";
      case 11:
        return "Azir";
      case 12:
        return "Bard";
      case 13:
        return "Bel'Veth";
      case 14:
        return "Blitzcrank";
      case 15:
        return "Brand";
      case 16:
        return "Braum";
      case 17:
        return "Caitlyn";
      case 18:
        return "Camille";
      case 19:
        return "Cassiopeia";
      case 20:
        return "Cho'Gath";
      case 21:
        return "Corki";
      case 22:
        return "Darius";
      case 23:
        return "Diana";
      case 24:
        return "Dr. Mundo";
      case 25:
        return "Draven";
      case 26:
        return "Ekko";
      case 27:
        return "Elise";
      case 28:
        return "Evelynn";
      default:
        return "Ezreal";
    }
  }

  function logAnswer(question, answer) {
    const nextAnswers = answers.map((c, i) => {
      if (i === question - 1) {
        return answer;
      } else {
        return c;
      }
    });
    setAnswers(nextAnswers);
    setPage(page + 1);
  }
}

export default App;
