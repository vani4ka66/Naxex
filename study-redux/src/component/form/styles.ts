export const formStyles = (theme: any) => ({
    root: {
        width: "100%",
        height: "80px",
        display: "flex",
        flexDirection: "column",
    },
    section: {
        width: "100%",
        height: "120px",
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px"
    },
    title: {
        fontSize: "16px"
    },
    input: {
        width: "240px",
        height: "30px",
        paddingTop: "8px",
        boxSizing: "border-box",
        border: "1px solid " + theme.color_neutral,
        borderRadius: "2px",
    }
});
