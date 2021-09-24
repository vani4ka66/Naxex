export const toDoListStyles = (theme) => ({
    root: {
        // width: "340px",
        // height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
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
        marginTop: "25px"
    },
    title: {
        fontWeight: "700",
        fontSize: "25px"

    },
    inputStyle: {
        height: "25px"
    },
    item: {
        marginTop: "10px"
    },
    delete: {
        fontSize: "15px",
        color: "red"
    }
});
