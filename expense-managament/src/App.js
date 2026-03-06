import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/common/Header';
import ExpenseForm from './components/expenses/ExpenseForm';
import ExpenseList from './components/expenses/ExpenseList';

const INITIAL_EXPENSES = [
  { id: '1', title: 'Đi siêu thị', amount: 500000, date: '2026-03-05', category: 'Food' },
  { id: '2', title: 'Đăng ký Netflix', amount: 180000, date: '2026-03-01', category: 'Entertainment' },
  { id: '3', title: 'Đổ xăng', amount: 50000, date: '2026-02-28', category: 'Transport' },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      // Create new expense with a unique id
      const newExpense = {
        ...expense,
        id: Math.random().toString()
      };
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Header />

          <main>
            <section id="form-area" className="mb-5">
              <ExpenseForm onSaveExpenseData={addExpenseHandler} />
            </section>

            <section id="list-area">
              <ExpenseList items={expenses} />
            </section>
          </main>

          <footer className="mt-5 text-center text-muted">
            <p className="small">© 2026 Quản Lý Chi Tiêu. Xây dựng bằng React & React-Bootstrap.</p>
          </footer>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

