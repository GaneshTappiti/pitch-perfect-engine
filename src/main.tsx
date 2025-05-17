
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeDarkMode } from './lib/darkmode.ts'

// Initialize dark mode
initializeDarkMode();

createRoot(document.getElementById("root")!).render(<App />);

