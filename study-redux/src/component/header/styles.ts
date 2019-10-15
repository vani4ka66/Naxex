export const headerStyles = (theme: any) => ({
    root: {
        width: "100%",
        height: "80px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: `1px solid ${theme.color_neutral}`,
    },
    logo: {
        width: "150px",
        height: "50px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: 'url("/resources/svg/logo.svg")'
    }
});
