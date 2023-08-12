import {useState} from "react";

const GameComponents = () => {
    const [result, setResult] = useState(null);
    const [score, setScore] = useState(0)

    const weaponArray = ['rock', 'paper', 'scissors']

    const weaponHandler = (playerWeapon) => {
        const randomNum = Math.floor(Math.random() * 3);
        const botWeapon = weaponArray[randomNum];

        if (playerWeapon === botWeapon) {
            setResult("Draw!");
        } else if ((playerWeapon === 'rock' && botWeapon === 'scissors') || (playerWeapon === 'paper' && botWeapon === 'rock') || (playerWeapon === 'scissors' && botWeapon === 'paper')) {
            setResult("You Won!");
            setScore(score + 1)
        } else {
            setResult("You lose!");
            if (score <= 0) {
                return;
            } else {
                setScore(score - 1)
            }
        }

        console.log(`${playerWeapon} vs ${botWeapon}`);
    };

    return (
        <div className="game-holder">
            <div>
                <h1>Score:
                </h1>
                {score}</div>
            <div className="weapon-holder">
                <ul>
                    <li className="rock">
                        <button onClick={
                            () => {
                                weaponHandler('rock')
                            }
                        }>Rock</button>
                    </li>
                    <li className="paper">
                        <button onClick={
                            () => {
                                weaponHandler('paper')
                            }
                        }>Paper</button>
                    </li>
                    <li className="scissors">
                        <button onClick={
                            () => {
                                weaponHandler('scissors')
                            }
                        }>Scissors</button>
                    </li>
                </ul>
            </div>
            <div> {result} </div>
        </div>
    )
}

export default GameComponents;
