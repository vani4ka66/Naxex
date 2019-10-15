export const contentStyles = (theme) => ({
    root: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    content: {
        width: "60%",
        minWidth: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    sideBar: {
        width: "300px"
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
        height: "100%",
        borderLeft: `1px solid ${theme.color_neutral}`,
        borderRight: `1px solid ${theme.color_neutral}`,
        paddingLeft: "20px",
        paddingRight: "20px"
    }
});
