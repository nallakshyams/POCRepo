
/* eslint-disable no-unused-vars */
// import { useSelector,useDispatch } from 'react-redux'
import { useAppDispatch,useAppSelector } from '../../app/hooks'
import { cakeSliceActions } from './cakeSlice'
export const CakeView = () => {
  const noOfCakes = useAppSelector((state)=> state.cake.noOfCakes)
  const dispatch = useAppDispatch();
  return (
    <div>
        <h2>Number of cakes - {noOfCakes} </h2>
        <button onClick={()=>{dispatch(cakeSliceActions.ordered(1))}}>Order cake</button>
        <button onClick={()=>{dispatch(cakeSliceActions.restocked(5))}}>Restock cake</button>
    </div>
  )
}