import React from "react";
import withStyles, {WithStyles} from "react-jss";
import {ViewType} from "app/ViewType";
import {RadioButton} from "component/radio/RadioButton";
import {radioStyles} from "component/radio/styles";

interface RadioButtonGroupProps extends WithStyles<any> {

}

const RadioButtonGroup: React.FunctionComponent<RadioButtonGroupProps> = (props: RadioButtonGroupProps): JSX.Element => {

    const {classes} = props;

    const createButton = (id: number, vT: ViewType): JSX.Element => {
        return <RadioButton id={"view-button-" + id}
                            viewType={vT}
                            groupName={"views"}
                            classes={classes}
        />;
    };

    return <div className={classes.root}>
        {createButton(1, ViewType.Clock)}
        {createButton(2, ViewType.TimerFunctional)}
        {createButton(3, ViewType.Orders)}
        {createButton(4, ViewType.Counter)}
    </div>;
};

export default withStyles(radioStyles)(RadioButtonGroup);
