
/* eslint-disable no-unused-vars */
import  { useState } from 'react';
// import { useSelector,useDispatch } from 'react-redux'
import { useAppDispatch,useAppSelector } from '../../app/hooks';
import { iceCreamActions } from './icecreamSlice';
export const IcecreamView = () => {
  const [value,setValue] = useState(1);
  const noOfIceCreams = useAppSelector((state)=>state.icecream.noOfIceCreams);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of icecreams - {noOfIceCreams} </h2>
      <button onClick={()=>{dispatch(iceCreamActions.ordered(value))}}>Order icecream</button>
      <input type='number' value ={value} onChange={(e)=>setValue(parseInt(e.target.value))} placeholder='enter no of cakes'/>
      <button onClick={()=>{dispatch(iceCreamActions.restocked(value))}}>Restock icecreams</button>
    </div>
  );
};
