import React, { useState } from 'react';
import { Button } from 'reactstrap';

const Display = () => {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className='container'>
      <section className='scoreboard'>
        <div className='player-container'>
          <h2 className='player'></h2>
          <p>{homeScore}</p>
        </div>
      </section>
      <section>
        <div className='button-container'>
          <div className="strike">
            <Button 
              color="danger" 
              className="strike-ball"
              // onClick={() => }
            >
              Strike
            </Button>
          </div>
          <div className="ball">
            <Button color="secondary" className="ball">Ball</Button>
          </div>
          <div className="foul">
            <Button color="warning" className="foul-ball">Foul</Button>
          </div>
          <div className="hit">
            <Button color="success" className="hit-ball">Hit</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Display;