

import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

import { useAppThemeContext } from '../state/theme/theme.context'

export const HeaderComponent = () => {
    const { toggleMode, mode } = useAppThemeContext()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'

                }}>
                    {
                        mode === 'light' ? (
                            <IconButton onClick={toggleMode} color="inherit">

                                <Brightness4Icon />
                            </IconButton>

                        ) : (
                            <IconButton onClick={toggleMode} color="inherit">

                                <BrightnessHighIcon />
                            </IconButton>
                        )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}
