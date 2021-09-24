import React, {useRef, useEffect, useState, useReducer} from "react";
import withStyles, {WithStyles} from "react-jss";
import {toDoListStyles} from "component/toDoList/styles";
import DateTime from "core/format/DateTime";
import Logger from "core/logger/Logger";
import Utils from "util/Utils";

interface ToDoListProps extends WithStyles<any> {

}

const logger1 = Logger.Of("ToDoList");

const ToDoList: React.FunctionComponent<ToDoListProps>  = (props: ToDoListProps): JSX.Element => {

    const {classes} = props;

    const initialState = {
        inputValue: "",
        toDoArr: ["go shopping", "go to the hairdresser", "make a cake"]
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                // state.value = "";
                return {
                    ...state,  toDoArr: [...state.toDoArr, state.value]
                };
            case "DELETE" :
               state.toDoArr = state.toDoArr.filter((item) => item !== action.item);
               return {
                    ...state,
                };
            case "GET_INPUT_VALUE" :
                const value = action.payload.inputValue;
                return {
                    ...state, value
                };
            default:
                return state;
        }
    };

    const handleInput = ((event) => {
        dispatch({
            type: "GET_INPUT_VALUE",
            payload: {
                inputValue: event.target.value
            }
        });
    });

    const add = () => {
        dispatch({
            type: "ADD",
        });
    };

    const deleteItem = (item) => {
        dispatch({type: "DELETE", item});
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (<div className={classes.root}>
        <div></div>
        <div className={classes.title}>ToDo List</div>
        <br />
        <ul>
            {state.toDoArr.map((i, index) => {
                return (<li key={index} className={classes.item}>{i}   <span className={classes.delete} onClick={() => deleteItem(i)}>   x</span></li>);
            })}
        </ul>
        <br />
        <input className={classes.inputStyle} type="text" placeholder="Add text here" onChange={handleInput} />
        <button className={classes.actionButton} onClick={add} >Add</button>

    </div>
    );
};

export default  withStyles(toDoListStyles) (ToDoList);
