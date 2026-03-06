import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    const expenses = props.items || [];
    const totalAmount = expenses.reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <Card className="shadow-sm border-0 rounded-4">
            <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <Card.Title as="h2" className="h4 fw-bold mb-0 text-primary">Giao Dịch Gần Đây</Card.Title>
                    <div className="text-end">
                        <p className="small text-secondary mb-0">Tổng chi tiêu</p>
                        <p className="h4 fw-bold text-danger mb-0">
                            {totalAmount.toLocaleString('vi-VN')} VND
                        </p>
                    </div>
                </div>

                <ListGroup variant="flush">
                    {expenses.length > 0 ? (
                        expenses.map(expense => (
                            <ExpenseItem key={expense.id} expense={expense} />
                        ))
                    ) : (
                        <div className="text-center py-5">
                            <i className="bi bi-patch-question fs-1 text-secondary opacity-50 mb-3"></i>
                            <p className="text-secondary">Chưa có giao dịch nào. Hãy thêm mới!</p>
                        </div>
                    )}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default ExpenseList;

