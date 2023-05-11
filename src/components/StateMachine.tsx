import React from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { CounterUpdater } from "./CounterUpdater";
import { CounterSquare } from "./CounterSquare";
import { CounterMultiply } from "./CounterMultiply";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice";
import { Alert } from "./Alert";

export const StateMachine: React.FC = () => {
    const authUser = useSelector<any, string>(state => state.auth.authUser)
    // const dispatch = useDispatch();
    return <>
        {/* {!authUser && <><Login /> <button onClick={()=>(dispatch(authActions.login('admin')))}>Login As Admin</button></>} */}
        {!authUser && <><Login /></>}
        {authUser && !authUser.includes('admin') && (<>Logged in as client<CounterUpdater operand={2} /><CounterSquare /><Logout /></>)}
        {authUser && authUser.includes('admin') && (<>Logged in as admin<CounterUpdater operand={2} />
            <CounterSquare /><CounterMultiply factor={2} /> <Logout /> </>)}
    </>
}