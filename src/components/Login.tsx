import React from "react";
import { Input } from "./Input";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice";

export const Login: React.FC = () => {
    const dispatch = useDispatch();

    return <>
        <Input submitFn={function (value: string): string {
            dispatch(authActions.login(value));
            return '';
        }} placeHolder={"username"} buttonName="Sign in" />
    </>

}