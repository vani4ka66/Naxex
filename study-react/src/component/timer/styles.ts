export const timerStyles = (theme) => ({
    root: {
        width: "340px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    timer: {
        border: "1px solid " + theme.color_neutral,
        borderRadius: "8px",
        width: "160px",
        height: "50px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    actions: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    actionButton: {
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "52px",
        width: "162px",
        padding: "2px",
        fontSize: "16px",
        userSelect: "none",
        cursor: "pointer",
        background: theme.color_primary,
        color: "#ffffff",
    },
    inputWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        width: "100px",
        height: "30px",
        paddingLeft: "5px",
        marginRight: "8px",
        boxSizing: "border-box",
        border: "1px solid " + theme.color_neutral,
        borderRadius: "3px",
    }
});
