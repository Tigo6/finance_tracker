import './App.css'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div id="main-container">
      <Sidebar />
      
      <main className="main-content">
        <h1>Dashboard Financeiro</h1>
        <p>O conteúdo principal aparece aqui.</p>
      </main>
    </div>
  )
}

export default App