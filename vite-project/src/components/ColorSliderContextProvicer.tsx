import React from "react";

type colorType = { R: number, G: number, B: number }

type stateType = { 
    color: colorType
    changeColor: (color: colorType) => void
}

const initialState: stateType = { 
    color: {R: 0, G: 0, B: 0 }, 
    changeColor: (color: colorType) => { console.log(color); }
}


export const ColorSlidersContext = React.createContext(initialState);


interface IColorSliderProvider {
    children: React.ReactNode;
}

type ActionType = (
    {type: "SET_COLOR", value: colorType } |
    {type: "SET_COLOR_VALUE", value: number, colorValue: "R" | "G" | "B"}

)

function reducer(state: colorType, action: ActionType) {
    switch (action.type) {
        case "SET_COLOR":
            state = action.value;
            return state;
        case "SET_COLOR_VALUE":
            if (action.colorValue == "R") { state.R = action.value}
            else if (action.colorValue == "B") { state.B = action.value}
            else state.B = action.value
            return state;
        default:
            return state;
    }
}



export const ColorSliderContextProvider: React.FC<IColorSliderProvider> = ({ children }) => {
    const [color, dispatch] = React.useReducer<React.Reducer<colorType, ActionType>>(reducer, {R: 0, G: 0, B: 0 });

    const changeColor = (color: colorType) => {
        dispatch({type: "SET_COLOR", value: color});
    }

    return (
        <ColorSlidersContext.Provider value={{ color, changeColor }}>
            {children}
        </ColorSlidersContext.Provider>
    )
}

export default ColorSliderContextProvider;
