import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux/authSlice";

export const Logout: React.FC = () => {
    const dispatch = useDispatch();
    const authUser = useSelector<any, string>(state => state.auth.authUser)

    return <button onClick={() => dispatch(authActions.logout())}>Logout {authUser}</button>
}