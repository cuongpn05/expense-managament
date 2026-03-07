import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

const getCategoryIcon = (category, type) => {
    const cat = category ? category.toLowerCase() : 'other';

    // Income icons
    if (type === 'income') {
        switch (cat) {
            case 'salary': return <i className="bi bi-wallet2 text-success"></i>;
            case 'bonus': return <i className="bi bi-gift text-success"></i>;
            case 'gift': return <i className="bi bi-heart text-success"></i>;
            case 'interest': return <i className="bi bi-graph-up-arrow text-success"></i>;
            default: return <i className="bi bi-cash-stack text-success"></i>;
        }
    }

    // Expense icons
    switch (cat) {
        case 'food': return <i className="bi bi-cart text-danger"></i>;
        case 'entertainment': return <i className="bi bi-tv text-danger"></i>;
        case 'transport': return <i className="bi bi-car-front text-danger"></i>;
        case 'shopping': return <i className="bi bi-bag text-danger"></i>;
        case 'coffee': return <i className="bi bi-cup-hot text-danger"></i>;
        default: return <i className="bi bi-credit-card text-danger"></i>;
    }
};

const getCategoryLabel = (category) => {
    const labels = {
        'Food': 'Ăn uống',
        'Entertainment': 'Giải trí',
        'Transport': 'Di chuyển',
        'Shopping': 'Mua sắm',
        'Coffee': 'Cà phê',
        'Salary': 'Lương',
        'Bonus': 'Thưởng',
        'Gift': 'Quà tặng',
        'Interest': 'Tiền lãi',
        'Other': 'Khác'
    };
    return labels[category] || category;
};

const ExpenseItem = ({ expense }) => {
    const { title, amount, date, category, type = 'expense' } = expense;
    const isIncome = type === 'income';

    return (
        <ListGroup.Item action className="d-flex align-items-center justify-content-between py-3 border-0 px-0">
            <div className="d-flex align-items-center gap-3">
                <div className={`bg-opacity-10 ${isIncome ? 'bg-success' : 'bg-danger'} p-3 rounded-3 d-flex align-items-center justify-content-center`} style={{ width: '50px', height: '50px' }}>
                    {getCategoryIcon(category, type)}
                </div>
                <div>
                    <h6 className="fw-bold mb-0">{title}</h6>
                    <small className="text-secondary">
                        <Badge bg="light" text="dark" className="me-2 fw-normal border">
                            {getCategoryLabel(category)}
                        </Badge>
                    </small>
                </div>
            </div>
            <div className="text-end">
                <p className={`fw-bold mb-0 ${isIncome ? 'text-success' : 'text-danger'}`}>
                    {isIncome ? '+' : '-'}{amount.toLocaleString('vi-VN')} đ
                </p>
                <small className="text-muted" style={{ fontSize: '0.75rem' }}>
                    {new Date(date).toLocaleDateString('vi-VN')}
                </small>
            </div>
        </ListGroup.Item>
    );
};

export default ExpenseItem;

