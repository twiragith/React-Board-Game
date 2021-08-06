import React, {useEffect, useState} from 'react';

import Square1 from './Square';


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

const style3 = {

	borderRadius: "10px",
	width: "250px",
	height: "50px",
	margin: "",
};

function Board({Cell,Squares,onClick}) {

    const [tempSquares, setTempSquares] = useState(Array().fill(null))
    //console.log(Cell)
    useEffect(() => {
        setTempSquares(prevArray  => [...prevArray , Cell]);
        console.log();
        if(Cell>9){
        setTempSquares(Array().fill(null));
        }
      }, [Cell]);

    return (
      <div >
        <div style ={style2}>
        </div>
        <div style ={style3}><Square1 value={ Cell-1}  onClick={() => onClick("dummy value")} /></div>
        <div style ={style3}><Square1 value="GO!" onClick={() => onClick("dummy value")} /></div>
        <div style ={style}>
        {tempSquares.map((tempSquares, i) => (
			<Square1 key={i} value={i} onClick={() => onClick(i)} />
		))}
        </div>
      </div>
    );
}

export default Board;