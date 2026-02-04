import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import {getCSRFToken} from './ts/utils'
import {Button} from '@mui/material'
import AddTransactionModal from './components/addTransactionModal/AddTransactionModal'


function App() {
const [AddTransactionModalOpen, setAddTransactionModalOpen] = useState(false);

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
      <AddTransactionModal
      open = {AddTransactionModalOpen}
      handleClose = {() => setAddTransactionModalOpen(false)}
      />
      <main className="main-content">
        <Button variant="contained" color='success' className='action-button' onClick={()=>setAddTransactionModalOpen(true)}>Add transaction</Button>
      </main>
    </div>
  )
}

export default App