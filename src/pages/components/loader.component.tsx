

import { Box, CircularProgress } from '@mui/material'

export const LoaderComponent = () => {
    return (
        <Box sx={
            {
                position: "fixed",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                zIndex: 9991,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }
        }>
            <CircularProgress />
        </Box>
    )
}
