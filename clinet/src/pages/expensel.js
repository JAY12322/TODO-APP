import React from "react";
import { connect as cc } from "react-redux";
import upda from './selectors/sortt';


const Func = (props) => (
    <div>
        <h1>hello in another file .....??</h1>
        <u>{props.filters.text}</u><br/>
        <u>{props.filters.sort}</u>
        <ul>
            {props.expp.map((ele,keys) => (
                <li key={keys}>
                    <span>Description : {ele.desc}</span>{" <!!!!>"}
                    <span>Amout : {ele.amt}</span>{"        <!!!!!!!!>"}
                    <span>This is ID : {ele.id}</span>
                 </li>
            ))}
        </ul>
    </div>
);

const cc_exp = cc((st) => {
    return {
        expp: upda(st.exp,st.filter),
        filters: st.filter
    };
})(Func);

export default cc_exp;