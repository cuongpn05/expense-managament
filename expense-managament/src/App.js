import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/common/Header';
import ExpenseForm from './components/expenses/ExpenseForm';
import ExpenseList from './components/expenses/ExpenseList';

function App() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Header />

          <main>
            <section id="form-area" className="mb-5">
              <ExpenseForm />
            </section>

            <section id="list-area">
              <ExpenseList />
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
