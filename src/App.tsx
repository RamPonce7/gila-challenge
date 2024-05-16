import { Box, ThemeProvider } from "@mui/material"
import { useAppThemeContext } from "./state/theme/theme.context"
import { HeaderComponent } from "./components/header.component"
import CssBaseline from '@mui/material/CssBaseline';
import { PostsProvider } from "./state/post/post.context";
import { HomePage } from "./pages/home/home.page";

function App() {
  const { theme } = useAppThemeContext()
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderComponent />
        <Box sx={{
          mt: { xs: 6, sm: 8 },
          p: 2,
        }}>

          <PostsProvider>
            <HomePage />
          </PostsProvider>
        </Box>

      </ThemeProvider>
    </>
  )
}

export default App
