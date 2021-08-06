import React, {useState, useEffect} from 'react';
import Board from './Board';
import Slider from './Slider';


const style = {
	border: "4px solid darkblue",
	borderRadius: "10px",
	width: "150px",
	height: "150px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};


const style2 = {

	borderRadius: "10px",
	width: "250px",
	height: "100px",
	margin: "auto",
};

function Game() {

    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [currentCell, setCurrentCell] = useState(1);
    const [gameOver, setGameOver] = useState(false);
    const [time, setTime] = useState(new Date().getMilliseconds());


function handleClick(){

}

function clock(){
    setInterval(()=>setTime(new Date().getMilliseconds()),100);
}

function counter(){
    setInterval(()=>setCount(count+1),100);
    console.log("trigger");
}


function handleCount(){

    if(currentCell>8){
        setCurrentCell(1);
        setGameOver(true);
    }else{
        setCurrentCell(currentCell + 1);
    }

}

    return (
        <>
        <div style ={style2}>
        <Slider label ={"Board game"} goClick= {currentCell}  />
        </div>
        <div>
            <Board Square={currentCell} onClick={handleClick} />
        </div>
        <div style ={style2}>
        <p>You clicked {count} times</p>
        <button onClick={handleCount}>
            GO
        </button>
        </div>
        </>
    );
}



export default Game;
