import React from 'react'
//useSelector hook allows us to pull our Redux state 
//values into our component
import { useSelector } from "react-redux";
import TableRow from './TableRow.js'
import { v4 as uuidv4 } from 'uuid';

function Table() {
 //We only care about the grid in this specific component,
//destructuring grid out of the result of the useSelector hook.
//The state variable in the callback represents the entire Redux state.
    const { grid } = useSelector((state) => state.stateValues);
    //we want to get off the state is just the particular reducer we need,
    // which in this case is the stateValues reducer.
  return (
    <table>
      <tbody>
      {grid.map((row, rowIdx) => (
          <TableRow key={uuidv4()} rowIdx={rowIdx} row={row}  />
        ))}
      </tbody>
    </table>
  )
}

export default Table

/*Remember the grid is an array so we can use the .map() method
and render a TableRow component for each row in our grid.
You can map over the grid inside of your <tbody>.
*/

/*We now need to pass some props to our TableRow component:
key - when mapping over items in JSX each parent element needs a key prop
row - this will be the single element from our .map() method, which in this case is an array of strings
rowIdx - this is the index of our row, which will help up figure out which row we have clicked on
*/

/*Important Note on Keys!
So far we are passing the rowIdx as the key of our 
TableRow component. However, the best practice in React is 
to use a unique, consistent identifier as the key for each element. 
React uses this key to keep track of the order of everything 
returned from a map. Using an array index can cause unexpected 
behavior at run time since the array index of an element can 
change if other elements are inserted into the array before it.
In this application, using the array index as the key is unlikely 
to cause a detectable issue. But to reinforce good habits, we 
will follow the best practice for cases where we don't have 
an obvious unique value to use as the key: we will generate 
UUIDs (Universally Unique Identifiers). 
*/