import './App.css'
import { ThemeProvider } from './common/ThemeContext'
import Hero from './sections/Hero/Hero'

function App() {
  return (
   <ThemeProvider>
     <Hero />
  </ThemeProvider>
 
  )
}

export default App
