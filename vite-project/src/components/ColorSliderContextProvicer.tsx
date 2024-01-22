import React from "react";

type colorType = { R: number, G: number, B: number }

type stateType = { 
    color: colorType
    changeColor: (color: colorType) => void,
    resetColor: () => void
}

const initialState: stateType = { 
    color: {R: 128, G: 128, B: 128 }, 
    changeColor: (color: colorType) => { console.log(color); },
    resetColor: () => {console.log(":)")}
}


export const ColorSlidersContext = React.createContext(initialState);


type ActionType = (
    {type: "SET_COLOR", value: colorType } |
    {type: "SET_COLOR_VALUE", value: number, colorValue: "R" | "G" | "B"} |
    {type: "RESET_COLOR"}
)

function reducer(state: colorType, action: ActionType) {
    switch (action.type) {
        case "SET_COLOR":
            state = action.value;
            return state;
        case "SET_COLOR_VALUE":
            if (action.colorValue == "R") { state.R = action.value}
            else if (action.colorValue == "B") { state.B = action.value}
            else state.B = action.value;
            return state;
        case "RESET_COLOR":
            state = initialState.color;
            return state;
        default:
            return state;
    }
}



export const ColorSliderContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [color, dispatch] = React.useReducer<React.Reducer<colorType, ActionType>>(reducer, initialState.color);

    const changeColor = (color: colorType) => {
        dispatch({type: "SET_COLOR", value: color});
    }
    const resetColor = () => {
        dispatch({type: "RESET_COLOR"});
    }

    return (
        <ColorSlidersContext.Provider value={{ color, changeColor, resetColor }}>
            {children}
        </ColorSlidersContext.Provider>
    )
}

export default ColorSliderContextProvider;
