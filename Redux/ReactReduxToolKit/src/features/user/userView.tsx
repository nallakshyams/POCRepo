
/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch,useAppSelector } from '../../app/hooks';
import fetchUsers from './userSlice';
export const UserView = () => {
  const dispatch = useAppDispatch();
  useEffect(()=>{dispatch(fetchUsers())},[]);
  const response = useAppSelector((state)=>state.user);
  return (
    <div>
    <h2>List of users -</h2>
    {response.loading && <div>loading...</div>}
    {!response.loading && response.error && <div>Error: {response.error}</div>}
    {!response.loading && response.data.length?<ul>{response.data.map(user=>{return(<li key={user.id}>{user.name}</li>)})}</ul>:null}
    </div>
  )
}