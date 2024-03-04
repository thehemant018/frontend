// import React, { useEffect, useState } from 'react';

// const TransactionList = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const response = await fetch('http://localhost:1818/api/transaction/get-transactions');
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.error);
//         }

//         const data = await response.json();
//         setTransactions(data.transactions);
//       } catch (error) {
//         console.error(error.message);
//       }
//     };

//     fetchTransactions();
//   }, []);

//   return (
//     <div>
//       <h2>Transaction List</h2>
//       <ul>
//         {transactions.map((transaction) => (
//           <li key={transaction._id}>
//             {transaction.type === 'expense' ? '-' : '+'} ${transaction.amount} -{' '}
//             {transaction.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TransactionList;




// TransactionList.js

import React, { useEffect, useState } from 'react';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:1818/api/transaction/get-transactions', {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token'),
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error);
        }

        const data = await response.json();
        setTransactions(data.transactions);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.type === 'expense' ? '-' : '+'} ${transaction.amount} -{' '}
            {transaction.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
