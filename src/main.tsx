
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AppThemeProvider } from './state/theme/theme.context';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <AppThemeProvider>
    <App />
  </AppThemeProvider>

)
