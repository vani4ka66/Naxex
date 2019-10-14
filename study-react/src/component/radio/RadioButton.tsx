import React from "react";
import {ViewType} from "app/ViewType";
import {WithStyles} from "react-jss";

interface RadioButtonProps extends WithStyles<any> {

    id: string;
    groupName: string;
    title: string;
    viewType: ViewType;
    checked: boolean;
    setViewType: (viewType: ViewType) => void;
}

export const RadioButton: React.FunctionComponent<RadioButtonProps> = (props: RadioButtonProps): JSX.Element => {

    const {id, groupName, title, checked, classes, viewType, setViewType} = props;

    const onClick = () => {
        setViewType(viewType);
    };

    return <div>
        <label className={"radio-container " + classes.label} onClick={onClick}>
            {title}
            <input type="radio" id={id} value={id} name={groupName} checked={checked} readOnly />
            <span className="checkmark"></span>
        </label>
    </div>;
};
