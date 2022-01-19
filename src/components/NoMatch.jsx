import React from "react";
import style from './NoMatch.module.css'

const {styles} = style;

export default function NoMatch(){
    return(
        <div >
        <img  className={styles} src="https://avatars.mds.yandex.net/get-zen_doc/230574/pub_5ae8e0be1410c3259ffe99e0_5ae8e7244826773d1f54e06f/scale_1200" 
        alt="EROR 404"/>
        </div>
    )
}

