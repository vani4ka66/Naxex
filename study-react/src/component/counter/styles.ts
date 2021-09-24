export const counterStyles = (theme) => ({
    root: {
        width: "340px",
        height: "200px",
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
    }
});
