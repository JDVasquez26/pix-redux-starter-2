import React from 'react'
import { useDispatch } from "react-redux";
import { colorize } from "../stateSlice";

function TableCell({ rowIdx, colIdx, color }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(colorize({ row: rowIdx, column: colIdx }));
  }
  return (
    <td onClick={handleClick} className={color}></td>
  )
}

export default TableCell