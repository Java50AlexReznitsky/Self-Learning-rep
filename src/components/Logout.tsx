import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice";
import { Input } from "./Input";

export const Logout: React.FC = () => {
    const dispatch = useDispatch();
    const submitFn = () => {
        dispatch(authActions.logout())
    }
    return <button onClick={submitFn}>Logout</button>
}