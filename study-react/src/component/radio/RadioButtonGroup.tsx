import React, {useState} from "react";
import withStyles, {WithStyles} from "react-jss";
import {ViewType} from "app/ViewType";
import {RadioButton} from "component/radio/RadioButton";
import {radioStyles} from "component/radio/styles";
import Utils from "util/Utils";
import Logger from "core/logger/Logger";

interface RadioButtonGroupProps extends WithStyles<any> {

    viewType: ViewType;
    onChange: (viewType: ViewType) => void;
}

const RadioButtonGroup: React.FunctionComponent<RadioButtonGroupProps> = (props: RadioButtonGroupProps): JSX.Element => {

    const logger: Logger = Logger.Of("RadioButtonGroup");
    const [viewType, setViewType] = useState<ViewType>(props.viewType);
    const {classes, onChange} = props;

    const title = (vT): string => {
        switch (vT) {
            case ViewType.Timer:
                return "Timer";
            case ViewType.TimerFunctional:
                return "Functional Timer";
            case ViewType.Orders:
                return "Check Orders";
        }
        return null;
    };

    const onChangeView = (vT: ViewType): void => {
        logger.info("Set view type: " + vT);
        setViewType(vT);
        if (Utils.isNotNull(onChange)) {
            onChange(vT);
        }
    };

    const createButton = (id: number, vT: ViewType): JSX.Element => {
        return <RadioButton id={"view-button-" + id}
                            viewType={vT}
                            checked={vT === viewType}
                            groupName={"views"}
                            title={title(vT)}
                            setViewType={onChangeView}
                            classes={classes}
        />;
    };

    return <div className={classes.root}>
        {createButton(1, ViewType.Timer)}
        {createButton(2, ViewType.TimerFunctional)}
        {createButton(3, ViewType.Orders)}
    </div>;
};

export default withStyles(radioStyles)(RadioButtonGroup);
