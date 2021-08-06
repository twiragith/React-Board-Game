import React from 'react';

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

function Board({Square,onClick}) {

    return (
      <div >
        <div style ={style2}>
        </div>
        <div style ={style3}><Square1 value={ Square}  onClick={() => onClick("dummy value")} /></div>
        <div style ={style3}><Square1 value="GO!" onClick={() => onClick("dummy value")} /></div>
        <div style ={style}>
        <Square1 value="X" onClick={() => onClick("dummy value")} />
        <Square1 value="2" onClick={() => onClick("dummy value")} />
        <Square1 value="3" onClick={() => onClick("dummy value")} />
        <Square1 value="6" onClick={() => onClick("dummy value")} />
        <Square1 value="5" onClick={() => onClick("dummy value")} />
        <Square1 value="4" onClick={() => onClick("dummy value")} />
        <Square1 value="7" onClick={() => onClick("dummy value")} />
        <Square1 value="8" onClick={() => onClick("dummy value")} />
        <Square1 value="9" onClick={() => onClick("dummy value")} />
        </div>
      </div>
    );
}

export default Board;