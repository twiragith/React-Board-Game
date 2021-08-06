import React, {useState} from 'react';
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

    const [currentCell, setCurrentCell] = useState(1);

function handleCount(){
    if(currentCell>9){
        setCurrentCell(1);
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
            <Board Cell={currentCell} />
        </div>
        <div style ={style2}>
        <button onClick={handleCount}>
            GO
        </button>
        </div>
        </>
    );
}



export default Game;
