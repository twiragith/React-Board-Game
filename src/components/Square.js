import React from 'react';

const style = {
	background: "lightblue",
	border: "2px solid darkblue",
	fontSize: "30px",
	fontWeight: "80",
	cursor: "pointer",
	outline: "none",
};

function Square({value, onClick}) {
    return (
      <div>
        <button style ={style} onClick = {onClick}>
            {value}
        </button>
      </div>
    );
}

export default Square;