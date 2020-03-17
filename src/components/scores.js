import React from 'react'
import useCustom from './../customHook';

const Scores = () => {
    const [globalState] = useCustom();
    return (
        <div>
            <center>
                <h1>Score History</h1>
                {globalState.history.map((entry, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">Player 1 {entry[0]} | Player 2 {entry[1]}</div>
                    </div>
                ))}
            </center>
        </div>
    )
};

export default Scores