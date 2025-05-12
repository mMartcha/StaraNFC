export interface ITheme {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        border: string;
        borderIcons: string
    };
    fonts: {
        family: string;
        size: {
            small: string;
            medium: string;
            large: string;
        };
        weight: {
            regular: number;
            medium: number;
            bold: number;
        };
    };
    sizes: {
        borderRadius: {
            small: string;
            medium: string;
            large: string;
        };
        spacing: {
            small: string;
            medium: string;
            large: string;
        };
    };
}

const lightTheme: ITheme = {
    colors: {
        primary: "#E56425",
        secondary: "#FFFFFF",
        background: "#FFFFFF",
        text: "#000000",
        border: "#CCCCCC",
        borderIcons: "#CCCCCC"
    },
    fonts: {
        family: "'Montserrat', sans-serif",
        size: {
            small: "12px",
            medium: "16px",
            large: "24px",
        },
        weight: {
            regular: 400,
            medium: 500,
            bold: 700,
        },
    },
    sizes: {
        borderRadius: {
            small: "4px",
            medium: "8px",
            large: "16px",
        },
        spacing: {
            small: "8px",
            medium: "16px",
            large: "24px",
        },
    },
};

const darkTheme: ITheme = {
    colors: {
        primary: "#E56425",
        secondary: "#262626",
        background: "#181818",
        text: "#FFFFFF",
        border: "#262626",
        borderIcons: "#cccccc49"
    },
    fonts: {
        family: "'Montserrat', sans-serif",
        size: {
            small: "12px",
            medium: "16px",
            large: "24px",
        },
        weight: {
            regular: 400,
            medium: 500,
            bold: 700,
        },
    },
    sizes: {
        borderRadius: {
            small: "4px",
            medium: "8px",
            large: "16px",
        },
        spacing: {
            small: "8px",
            medium: "16px",
            large: "24px",
        },
    },
};

export { lightTheme, darkTheme };