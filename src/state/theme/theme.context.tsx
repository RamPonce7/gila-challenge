import { createTheme } from "@mui/material";
import { createContext, ReactNode, useContext, useMemo, useState } from "react"


const useAppTheme = () => {

    const [mode, setMode] = useState<'light' | 'dark'>('light')

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }


    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    primary: { main: "#e65100" },
                    mode
                }
            }),
        [mode],
    );

    return {
        theme,
        toggleMode,
        mode
    }
}

const AppThemeContext = createContext<ReturnType<typeof useAppTheme>>({} as ReturnType<typeof useAppTheme>)

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    const theme = useAppTheme()
    return <AppThemeContext.Provider value={theme}>{children}</AppThemeContext.Provider>
}

export const useAppThemeContext = () => useContext(AppThemeContext)