export const clockStyles = (theme: any) => ({
    root: {
        width: "100%",
        height: "80px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    timer: {
        "&.red": {
            color: "#FF0000"
        },
        "&.black": {
            color: "#000000"
        }
    }
});
