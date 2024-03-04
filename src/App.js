// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
// import TransactionForm from './components/TransactionForm';
// import TransactionList from './components/TransactionList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";


const App = () => {
  // const handleTransactionAdded = (newTransaction) => {
  //   // Update the transactions list or perform any other actions when a new transaction is added
  // };

  // useEffect(() => {
  //   getTranactions();
  // }, [])
  // const getTranactions = async ()=>{
  //   const transactions = await fetch("http://localhost:1818/api/transaction/get-transactions")
  //   console.log(transactions);
  // }


  // const handleTransactionAdded = (transaction) => {
  //   // Handle the added transaction, e.g., update state or perform other actions
  //   console.log('Transaction added:', transaction);
  // };

  const [transactions, setTransactions] = useState([]);

  const handleTransactionAdded = (transaction) => {
    // Update the state with the newly added transaction
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        {/*       
      <TransactionForm onTransactionAdded={handleTransactionAdded} />
      <TransactionList /> */}

        <BrowserRouter>
          {/* <Navbar /> */}
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              {/* <Route exact path="/addtask" element={<AddTask showAlert={showAlert} />}></Route>*/}
              <Route exact path="/signup" element={<Signup  />}></Route>
              <Route exact path="/login" element={<Login />}></Route> 
              <Route exact path="/transform" element={<TransactionForm onTransactionAdded={handleTransactionAdded}/>}></Route> 
              <Route exact path="/translist" element={<TransactionList transactions={transactions} />}></Route> 
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
