import styled from "styled-components";

const height = 16;
const thumb = {
  height: 40,
  width: 40,
};

const StyledSlider = styled.input<SliderProps>`
  appearance: none;
  background-color: transparent;
  height: ${height}px;
  cursor: pointer;
  border-radius: ${height / 2}px;
  padding: calc(${thumb.height / 2 - height}px + 0.5em) 0;
  display: block;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    position: relative;
    height: ${height}px;
    background-color: var(--bg-color);
    background-image: linear-gradient(to right, #00000000 0%, #00000040 100%);
    border-radius: ${height / 2}px;
  }

  &::-moz-range-track {
    height: ${height}px;
    background-color: var(--bg-color);
    background-image: linear-gradient(to right, #00000000 0%, #00000040 100%);
    border-radius: ${height / 2}px;
  }

  &::-moz-range-progress {
    height: ${height}px;
    background-color: var(--bg-color);
    border-radius: ${height / 2}px;
  }
  &::-webkit-slider-thumb {
    top: 50%;
    translate: 0 -50%;

    box-sizing: border-box;
    appearance: none;
    position: relative;
    background-color: var(--thumb-color);
    border: 2px solid white;
    border-radius: ${thumb.height / 2}px;
    height: ${thumb.height}px;
    width: ${thumb.height}px;
  }
  &::-moz-range-thumb {
    box-sizing: border-box;
    appearance: none;
    position: relative;
    background-color: var(--thumb-color);
    border: 2px solid white;
    border-radius: ${thumb.height / 2}px;
    height: ${thumb.height}px;
    width: ${thumb.height}px;
    margin: 0;
  }
`;

type SliderProps = {
    thumbColor?: string;
    backgroundColor?: string;
  } & React.HTMLProps<HTMLInputElement>;

const Slider: React.FC<SliderProps> = ({thumbColor, backgroundColor, ...rest}) => {
  return <StyledSlider {...rest} style={{'--thumb-color': thumbColor, '--bg-color': backgroundColor} as React.CSSProperties} type="range" />
};

Slider.defaultProps = {
  thumbColor: "purple",
  backgroundColor: "green",
  title: "Color Slider",
};

export default Slider;