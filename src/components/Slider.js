import React, {
    memo,
    useState,
    useEffect,
  } from "react";
  

  
  const Slider = memo(
    ({ classes, label, onChange, value, goClick, ...sliderProps }) => {
      const [sliderVal, setSliderVal] = useState(0);
      const [mouseState, setMouseState] = useState(null);

      const [seconds, setSeconds] = useState(0);
      let isActive = true;

      const [score, setScore] = useState(0);
    
      useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 10);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);

      /*____________________*/

  
      useEffect(() => {
        setSliderVal(seconds);
        if(seconds>100){
            setSeconds(0);
        }
      }, [seconds]);

      useEffect(() => {
        if(goClick>9){
            alert("game over. Final Score is "+ score+".")
            console.log(goClick);
            setScore(0)
        }else{
            setScore(score + seconds);
        }
      }, [goClick]);
  
      const changeCallback = e => {
        setSliderVal(e.target.value);
      };
  
      useEffect(() => {
        if (mouseState === "up") {
          //onChange(sliderVal);
        }
      }, [mouseState]);
      return (
        <div>
            <div className="range-slider">
            <p>{label}</p>
            <h3>Total Score: {score}</h3>
            <input
                type="range"
                value={sliderVal}
                {...sliderProps}
                className={`slider ${classes}`}
                id="myRange"
                onChange={changeCallback}
                onMouseDown={() => setMouseState("down")}
                onMouseUp={() => setMouseState("up")}
            />
            </div>
            <div className="time">
                {seconds}
            </div>
        </div>
      );
    }
  );
  

export default Slider;