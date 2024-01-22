import React from 'react';
import StyledSlider from './StyledSlider';
import  {ColorSlidersContext}  from './ColorSliderContextProvicer';
import { useContext } from 'react';
import styles  from "./ColorSliders.module.css";

interface useContextType {
    color: { R: number, G: number, B: number };
    changeColor: (color: { R: number, G: number, B: number }) => void;
}

export const ColorSliders:React.FC = () => {
    const { color, changeColor } = useContext<useContextType>(ColorSlidersContext);

    return (
      <div className={styles["container"]}>
            <StyledSlider
            min={0}
            max={255}
            value={color.R}
            onChange={(e) => changeColor({R: parseInt(e.currentTarget.value), G: color.G, B: color.B})}
            backgroundColor={
                `rgb(${color.R}, ${color.G}, ${color.B})`
            }
            thumbColor={
                `rgb(${color.R}, 0, 0)`
            }
            />

           <StyledSlider
            min={0}
            max={255}
            value={color.G}
            onChange={(e) => changeColor({R: color.R, G: parseInt(e.currentTarget.value), B: color.B})}
            backgroundColor={
                `rgb(${color.R}, ${color.G}, ${color.B})`
            }
            thumbColor={
                `rgb(0, ${color.G}, 0)`
            }
            />

            <StyledSlider
            min={0}
            max={255}
            value={color.B}
            onChange={(e) => changeColor({R: color.R, G: color.G, B: parseInt(e.currentTarget.value)})}
            backgroundColor={
                `rgb(${color.R}, ${color.G}, ${color.B})`
            }
            thumbColor={
                `rgb(0, 0, ${color.B})`
            }
            />
      </div>
    );
    
  }
  export default ColorSliders;