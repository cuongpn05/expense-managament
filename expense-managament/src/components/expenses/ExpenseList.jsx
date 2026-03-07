import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    const expenses = props.items || [];

    // Calculate totals
    const totalIncome = expenses
        .filter(exp => exp.type === 'income')
        .reduce((acc, curr) => acc + curr.amount, 0);

    const totalExpense = expenses
        .filter(exp => exp.type !== 'income')
        .reduce((acc, curr) => acc + curr.amount, 0);

    const balance = totalIncome - totalExpense;

    // Group expenses by date first
    const groupedByDate = expenses.reduce((groups, expense) => {
        const date = expense.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(expense);
        return groups;
    }, {});

    // Sort dates in descending order
    const sortedDates = Object.keys(groupedByDate).sort((a, b) => new Date(b) - new Date(a));

    return (
        <Card className="shadow-sm border-0 rounded-4">
            <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <Card.Title as="h2" className="h4 fw-bold mb-0 text-primary">Lịch Sử Giao Dịch</Card.Title>
                    <div className="d-flex align-items-center gap-3">
                        <div className="text-end">
                            <p className="small text-secondary mb-0">Số dư hiện tại</p>
                            <p className={`h4 fw-bold mb-0 ${balance >= 0 ? 'text-success' : 'text-danger'}`}>
                                {balance.toLocaleString('vi-VN')} đ
                            </p>
                        </div>
                        {expenses.length > 0 && (
                            <Button
                                variant="outline-danger"
                                size="sm"
                                className="rounded-pill px-3 fw-bold"
                                onClick={props.onClearData}
                            >
                                <i className="bi bi-trash3 me-1"></i> Xóa Tất Cả
                            </Button>
                        )}
                    </div>
                </div>

                <div className="d-flex gap-3 mb-4">
                    <div className="flex-grow-1 p-2 bg-success bg-opacity-10 rounded-3 border border-success border-opacity-25">
                        <small className="text-success fw-bold d-block">Thu nhập</small>
                        <span className="fw-bold">+{totalIncome.toLocaleString('vi-VN')} đ</span>
                    </div>
                    <div className="flex-grow-1 p-2 bg-danger bg-opacity-10 rounded-3 border border-danger border-opacity-25">
                        <small className="text-danger fw-bold d-block">Chi tiêu</small>
                        <span className="fw-bold">-{totalExpense.toLocaleString('vi-VN')} đ</span>
                    </div>
                </div>

                {sortedDates.length > 0 ? (
                    sortedDates.map(date => {
                        const dateExpenses = groupedByDate[date];

                        // Further group by category within the date
                        const groupedByCategory = dateExpenses.reduce((catGroups, expense) => {
                            const cat = expense.category;
                            if (!catGroups[cat]) catGroups[cat] = [];
                            catGroups[cat].push(expense);
                            return catGroups;
                        }, {});

                        const dateTotalExpense = dateExpenses
                            .filter(e => e.type !== 'income')
                            .reduce((acc, curr) => acc + curr.amount, 0);
                        const dateTotalIncome = dateExpenses
                            .filter(e => e.type === 'income')
                            .reduce((acc, curr) => acc + curr.amount, 0);

                        return (
                            <div key={date} className="mb-4">
                                <div className="d-flex justify-content-between align-items-end mb-2 border-bottom pb-2">
                                    <h6 className="fw-bold mb-0 text-dark">
                                        {new Date(date).toLocaleDateString('vi-VN', {
                                            weekday: 'short',
                                            day: 'numeric',
                                            month: 'short'
                                        })}
                                    </h6>
                                    <div className="text-end">
                                        {dateTotalIncome > 0 && (
                                            <span className="small text-success fw-bold me-2">+{dateTotalIncome.toLocaleString('vi-VN')}</span>
                                        )}
                                        {dateTotalExpense > 0 && (
                                            <span className="small text-danger fw-bold">-{dateTotalExpense.toLocaleString('vi-VN')}</span>
                                        )}
                                    </div>
                                </div>

                                {Object.keys(groupedByCategory).map(category => (
                                    <div key={category} className="ps-2 border-start border-2 border-light mb-3">
                                        <ListGroup variant="flush">
                                            {groupedByCategory[category].map(expense => (
                                                <ExpenseItem key={expense.id} expense={expense} />
                                            ))}
                                        </ListGroup>
                                    </div>
                                ))}
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-5">
                        <i className="bi bi-patch-question fs-1 text-secondary opacity-50 mb-3"></i>
                        <p className="text-secondary">Chưa có giao dịch nào. Hãy thêm mới!</p>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default ExpenseList;



