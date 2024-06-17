import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';

const TransactionForm = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: defaultValues || {
      date: '',
      amount: '',
      type: 'income',
      category: 'Nike',
    },
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input type="date" {...register('date', { required: true })} />
        </FormControl>
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input type="number" step="0.01" {...register('amount', { required: true })} />
        </FormControl>
        <FormControl>
          <FormLabel>Type</FormLabel>
          <Select {...register('type', { required: true })}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select {...register('category', { required: true })}>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Puma">Puma</option>
            <option value="Reebok">Reebok</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="blue">Submit</Button>
      </VStack>
    </form>
  );
};

export default TransactionForm;