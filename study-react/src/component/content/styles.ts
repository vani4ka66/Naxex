export const contentStyles = (theme) => ({
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    contentWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    content: {
        width: "40%",
        minWidth: "30%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    contentHeader: {
        width: "100%",
        height: "50px",
        color:  `${theme.color_primary}`,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    contentPageWrapper: {
        width: "100%",
        height: "100%",
        borderLeft: `1px solid ${theme.color_neutral}`,
        borderRight: `1px solid ${theme.color_neutral}`,
        paddingLeft: "20px",
        paddingRight: "20px"
    }
});
