import React, {
    Component,
    memo,
    useCallback,
    useState,
    useEffect,
    useMemo
  } from "react";
  

  
  const Slider = memo(
    ({ classes, label, onChange, value, goClick, ...sliderProps }) => {
      const [sliderVal, setSliderVal] = useState(0);
      const [mouseState, setMouseState] = useState(null);

      const [seconds, setSeconds] = useState(0);
      const [isActive, setIsActive] = useState(false);

      const [score, setScore] = useState(0);

      function toggle() {
        setIsActive(!isActive);
      }
    
      function reset() {
        setSeconds(0);
        setIsActive(false);
      }
    
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
        setScore(score + seconds);
      }, [goClick]);
  
      const changeCallback = e => {
        setSliderVal(e.target.value);
      };
  
      useEffect(() => {
        if (mouseState === "up") {
          //onChange(sliderVal);
        }
      }, [mouseState]);
      console.log("RENDER");
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
                {seconds}s
            </div>
            <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={reset}>
                Stop
                </button>
            </div>
        </div>
      );
    }
  );
  
  // export default Slider;
  
     /*  const App = () => {
        const [parentVal, setParentVal] = useState(10);
  
        const sliderValueChanged = useCallback(val => {
          console.log("NEW VALUE", val);
          setParentVal(val);
        });
  
        const sliderProps = useMemo(
          () => ({
            min: 0,
            max: 100,
            value: parentVal,
            step: 2,
            label: "This is a reusable slider",
            //onChange: e => sliderValueChanged(e)
          }),
          [parentVal]
        );
  
        return (
          <div>
            <h1>PARENT VALUE: {parentVal}</h1>
            <Slider {...sliderProps} classes="additional-css-classes" />
          </div>
        );
      };
 */


export default Slider;