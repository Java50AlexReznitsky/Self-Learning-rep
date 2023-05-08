import React from "react";
import { Input } from "./Input";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice";
import { Alert } from "./Alert";

export const Login: React.FC = () => {
    const dispatch = useDispatch();

    const submitFn = (inputValue: string) => {
        let res: string = inputValue;
        dispatch(authActions.login(res))
        return res;
    }
    return <>
        <Input submitFn={submitFn} placeHolder={'Enter name'} buttonName="Login" />
    </>

}