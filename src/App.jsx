import {useState, useEffect} from 'react'
import './App.css'
import GameComponents from './components/GameComponents'

function App() {
    const [display, setDisplay] = useState(true)
    const [game, setGame] = useState(null)

    useEffect(() => {
        if (!display) {
            setGame(() => <GameComponents/>)
        }
    }, [display])

    return (
        <div className="App">
            <div className="startButton-holder">
                {
                display ? <button onClick={
                    () => {
                        setDisplay(false)
                    }
                }>Start!</button> : null
            } </div>
            <div>{game}</div>
        </div>
    )
}

export default App
