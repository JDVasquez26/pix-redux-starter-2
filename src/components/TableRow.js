import React from "react";
import { v4 as uuidv4 } from 'uuid';
import TableCell from "../components/TableCell"

//we passed in the rowIdx, and row to this component in Table.js.
// To have access to these properties, we will first destructure
//props to access them directly in the parameters of our TableRow component.
function TableRow({ row, rowIdx }) {
  return (
    <tr>
      {row.map((color, colIdx) => (
       <TableCell key={uuidv4()} rowIdx={rowIdx} colIdx={colIdx} color={color}/>
      ))}
    </tr>
  );
}

export default TableRow;

/*inside of the <tr> lets map over the row we 
passed in, and render a single TableCell, for each color string of 
our row array, per the following code
*/

/*We again need to pass the TableCell some properties
 in order to get our functionality working.
We will be passing:
rowIdx - gives us the coordinate for which row we are on
colIdx - gives use the coordinate for which column we are on
color - will let our cell component know what color it needs to be
These properties will be used in our click handlers which we will define in the TableCell component,
*/