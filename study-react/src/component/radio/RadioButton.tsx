import React from "react";
import {WithStyles} from "react-jss";
import {AppContextConsumer, AppContextValue} from "app/context/AppContext";
import {ViewType} from "app/ViewType";

interface RadioButtonProps extends WithStyles<any> {

    id: string;
    groupName: string;
    viewType: ViewType;
}

export const RadioButton: React.FunctionComponent<RadioButtonProps> = (props: RadioButtonProps): JSX.Element => {

    const {id, groupName, classes, viewType} = props;

    return (
        <AppContextConsumer>
            {(value: AppContextValue) =>
                <div>
                    <label className={"radio-container " + classes.label}>
                        {viewType}
                        <input type="radio"
                               id={id}
                               value={id}
                               name={groupName}
                               checked={value.viewType === viewType}
                               readOnly
                               onClick={() => {
                                   value.setViewType(viewType);
                               }} />
                        <span className="checkmark"></span>
                    </label>
                </div>
            }
        </AppContextConsumer>
    );
};
