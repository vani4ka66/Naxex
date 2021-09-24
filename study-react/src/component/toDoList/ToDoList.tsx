import React, {useRef, useEffect, useState, Fragment} from "react";
import withStyles, {WithStyles} from "react-jss";
import {toDoListStyles} from "component/toDoList/styles";
import DateTime from "core/format/DateTime";
import Logger from "core/logger/Logger";
import Utils from "util/Utils";

interface ToDoListProps extends WithStyles<any> {

}

const ToDoList: React.FunctionComponent<ToDoListProps>  = (props: ToDoListProps): JSX.Element => {

    const logger1 = Logger.Of("ToDoList");
    const [inputValue, setInputValue] = useState<string>("");
    const [todoArr, setToDoArr] = useState<string[]>(["go shopping", "go to the hairdresser", "make a cake"]);
    const {classes} = props;

    const add = (): void => {
        if (inputValue !== "") {
            setToDoArr([...todoArr, inputValue ]);
        }
        setInputValue("");
    };

    function deleteItem(i) {
        const newArr = todoArr.filter((item) => item !== i);
        setToDoArr(newArr);
    }

    const handleInput = ((event) => {
        setInputValue(event.target.value);
    });

    return (<div className={classes.root}>

        <div></div>
        <div className={classes.title}>ToDo List</div>
        <br />
        <ul>
            {todoArr.map((i, index) => {
                return (<li key={index} className={classes.item}>{i}   <span className={classes.delete} onClick={() => deleteItem(i)}>   x</span></li>);
            })}
        </ul>
        <br />

        <input className={classes.inputStyle} type="text" placeholder="Add text here" value={inputValue} onChange={handleInput}/>
        <button className={classes.actionButton} onClick={add}>Add</button>

    </div>
    );
};

export default  withStyles(toDoListStyles) (ToDoList);
