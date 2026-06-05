import { StrictMode } from 'react'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import './styles/reset.css'
import './styles/variables.css'
import './styles/globals.css'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
