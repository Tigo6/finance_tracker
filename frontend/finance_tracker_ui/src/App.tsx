import { useEffect } from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import {getCSRFToken} from './ts/utils'


function App() {

useEffect(() => {
  const transactionData = {
    type_id: 1,
    amount: 150,
    date: '2026-02-02',
    username: 'utilizador_teste'
  };

  fetch('http://localhost:8000/api/transactions/add/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': getCSRFToken() || ''
    } ,
    body: JSON.stringify(transactionData)
  })
    .then(response => response.json())
    .then(data => console.log('Inserted transaction status:', data))
    .catch(error => console.error('Erro na requisição:', error));
}, []);
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