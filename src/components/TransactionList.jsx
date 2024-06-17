import React from 'react';
import { Table, Tbody, Td, Th, Thead, Tr, IconButton } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TransactionList = ({ transactions, onEdit, onDelete }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Type</Th>
          <Th>Category</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {transactions.map((transaction) => (
          <Tr key={transaction.id}>
            <Td>{transaction.date}</Td>
            <Td>{transaction.amount}</Td>
            <Td>{transaction.type}</Td>
            <Td>{transaction.category}</Td>
            <Td>
              <IconButton
                aria-label="Edit"
                icon={<FaEdit />}
                onClick={() => onEdit(transaction)}
                mr={2}
              />
              <IconButton
                aria-label="Delete"
                icon={<FaTrash />}
                onClick={() => onDelete(transaction.id)}
              />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TransactionList;