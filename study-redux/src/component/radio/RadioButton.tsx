import React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {WithStyles} from "react-jss";
import {ViewType} from "app/ViewType";
import {ReduxState} from "app/redux/ReduxState";
import {SetViewType} from "app/redux/ReduxActions";

interface RadioButtonProps extends WithStyles<any> {

    id: string;
    groupName: string;
    viewType: ViewType;
    appViewType?: ViewType;
    dispatch?: Dispatch<ReduxState>;
}

const RadioButton: React.FunctionComponent<RadioButtonProps> = (props: RadioButtonProps): JSX.Element => {

    const {id, groupName, classes, viewType, appViewType, dispatch} = props;

    return (
        <div>
            <label className={"radio-container " + classes.label}>
                {viewType}
                <input type="radio"
                       id={id}
                       value={id}
                       name={groupName}
                       checked={appViewType === viewType}
                       readOnly
                       onClick={() => {
                           dispatch(new SetViewType(viewType));
                       }}/>
                <span className="checkmark"></span>
            </label>
        </div>
    );
};

export default connect((state: ReduxState, ownProps: any) => {
    return Object.assign({}, ownProps, {
            appViewType: state.app.viewType
        });
    },
    (dispatch: Dispatch<ReduxState>, ownProps: RadioButtonProps) => {
        return Object.assign({}, ownProps, {
            dispatch
        });
})(RadioButton);
