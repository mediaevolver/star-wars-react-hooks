import React, { useState, useEffect } from 'react'
import useCustom from './../customHook';
import fetchEntities from "./../api/";

const Game = () => {

    let nrOfPlayers = 2;

    const [globalState, setGlobalState] = useCustom();
    const [globalHistory] = useCustom();
    const [shuffleId, setShuffleId] = useState();
    const [winnerId, setWinnerId] = useState();
    const shuffleArray = () => {
        let shId = Math.random();
        setShuffleId(shId);
    }

    let winnerIs = winnerId;
    useEffect(() => {
        if (shuffleId) {
            fetchEntities().then((data) => {
                let dataArry = data.results;
                let dataArryRandom = dataArry.sort(() => Math.random() - 0.5);
                let objectsInArry = dataArryRandom.slice(0, nrOfPlayers);
                let latestEntry = [objectsInArry[0].mass, objectsInArry[1].mass]

                winnerIs = objectsInArry[0].mass > objectsInArry[1].mass ? 1 : 2;
                setWinnerId(winnerIs);

                setGlobalState({ people: objectsInArry });
                setGlobalState({ history: [...globalHistory.history, latestEntry] });
            })
                .catch(console.log)
        }
    }, [shuffleId])

    return (
        <div>
            <center>
                <h1>Star Wars Game</h1>
                <button className="play-button" onClick={shuffleArray}>Play</button>
                {winnerId > 0 ? <h3>Player {winnerIs} Wins!</h3> : null}
            </center>
            <div className="card-container">
                {globalState.people.map((contact, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <h2>Player {index + 1}</h2>
                            <h5 className="card-title">{contact.name}</h5>
                            <h6 className="card-subtitle">{contact.email}</h6>
                            <p className="card-text">Mass: {contact.mass}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Game