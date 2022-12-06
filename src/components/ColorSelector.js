import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { pickColor } from "../stateSlice";

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "black",
    "white",
    "brown",
  ];


function ColorSelector() {
// the following line pulls our color out of the redux state
const { selectedColor } = useSelector((state) => state.stateValues);
//When invoked inside of a functional component, useDispatch will /
//return a function which we can pass our pickColor function.
const dispatch = useDispatch();

const handleColorChange = (evt) => {//take an event, 
    dispatch(pickColor(evt.target.value));//call the dispatch function and pass it pickColor..
//pass pickColor the event.target.value (the value of the currently selected option)
  }

  return (
  <select onChange={handleColorChange} value={selectedColor}>
    {colors.map((color) => (
      <option key={color} value={color}>
        {color}
      </option>
    ))}
  </select>
  )
}
//line 23:{/* selectedColor can now be passed to the selectedColor tag */}
export default ColorSelector