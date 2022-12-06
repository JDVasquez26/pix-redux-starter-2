//import createSlice from @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";

const NUM_COLUMNS = 20;  //let's start with a single row of 20 blank pixels in our grid

export const stateSlice = createSlice({ // call this function
    name: "state", // this will represent the name of the slice
    initialState: { //whatever our data may be (an object, string, or array etc...)
      grid: [Array(NUM_COLUMNS).fill("")],  //Our initial state will hold our grid,.. 
      selectedColor: "red",  //...and a selected color.
    },
    reducers: {//an object with methods which manipulate our state

// function needs to create a new row (of empty strings) and push
//The state value that is passed into this function represents the state of our slice. 
//When we call any of these reducer functions, we never need to pass this in ourselves. 
        addRow(state) {
            const newRow = Array(NUM_COLUMNS).fill("");
            state.grid.push(newRow);
          },
//This function needs to be passed a value (which will come off of our event obj), 
//which will become the new selectedColor in our state
          pickColor(state, action) { //variable action, which is passed to pickColor, has a property of payload.  
            state.selectedColor = action.payload;//This payload property represents whatever you pass into this function when you call it. In this case, a string representing the new selectedColor.
          },
//We need to pass this method two things, the row and column. 
//The row and column will be used to reference the indexes of our grid array, 
//which will point us to the cell in question.
//We can then set that specific cell's value to our state.selectedColor property, 
          colorize(state, { payload }) {
            state.grid[payload.row][payload.column] = state.selectedColor;
          }
    }, 
  });
  
// we also need to export these methods for use in our components. 
//These will be exported as an object and can be destructed when we need them. 

export const { addRow, pickColor, colorize} = stateSlice.actions;

// The below export default is the primary export from this file:
  //export the reducer property from our slice as the default export, 
  //and import it into our store.js file.
  export default stateSlice.reducer 
  