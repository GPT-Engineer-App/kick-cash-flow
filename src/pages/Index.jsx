import React, { useState } from 'react';
import { Container, Heading, VStack, useToast } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';

const Index = () => {
  const toast = useToast();
  const [transactions, setTransactions] = useState([
    { id: uuidv4(), date: '2023-10-01', amount: 100, type: 'income', category: 'Nike' },
    { id: uuidv4(), date: '2023-10-02', amount: 200, type: 'expense', category: 'Adidas' },
  ]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const addTransaction = (data) => {
    const newTransaction = { ...data, id: uuidv4() };
    setTransactions([...transactions, newTransaction]);
    toast({
      title: 'Transaction added.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const updateTransaction = (data) => {
    setTransactions(transactions.map((transaction) => (transaction.id === data.id ? data : transaction)));
    setEditingTransaction(null);
    toast({
      title: 'Transaction updated.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
    toast({
      title: 'Transaction deleted.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl">Sneaker Accounting</Heading>
        <TransactionForm
          onSubmit={editingTransaction ? updateTransaction : addTransaction}
          defaultValues={editingTransaction}
        />
        <TransactionList
          transactions={transactions}
          onEdit={handleEdit}
          onDelete={deleteTransaction}
        />
      </VStack>
    </Container>
  );
};

export default Index;