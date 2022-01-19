import React from "react";
import style from './main.module.css'
import Heder from "./heder";


const {main} = style;

export default function Main() {
    return (
        <div className={main}>
        <Heder/>        
        </div>
    );
    }  
