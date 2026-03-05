import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
        case 'food': return <i className="bi bi-cart text-primary"></i>;
        case 'entertainment': return <i className="bi bi-tv text-primary"></i>;
        case 'transport': return <i className="bi bi-car-front text-primary"></i>;
        case 'shopping': return <i className="bi bi-bag text-primary"></i>;
        case 'coffee': return <i className="bi bi-cup-hot text-primary"></i>;
        default: return <i className="bi bi-credit-card text-primary"></i>;
    }
};

const ExpenseItem = ({ expense }) => {
    const { title, amount, date, category } = expense;

    return (
        <ListGroup.Item action className="d-flex align-items-center justify-content-between py-3 border-0 px-0">
            <div className="d-flex align-items-center gap-3">
                <div className="bg-light p-3 rounded-3 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    {getCategoryIcon(category)}
                </div>
                <div>
                    <h6 className="fw-bold mb-0">{title}</h6>
                    <small className="text-secondary">
                        {new Date(date).toLocaleDateString('vi-VN', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </small>
                </div>
            </div>
            <div className="text-end">
                <p className="fw-bold text-dark mb-0">-{amount.toLocaleString('vi-VN')} đ</p>
                <Badge bg="light" text="primary" pill className="border border-primary-subtle fw-normal">
                    {category === 'Food' ? 'Ăn uống' :
                        category === 'Entertainment' ? 'Giải trí' :
                            category === 'Transport' ? 'Di chuyển' : category}
                </Badge>
            </div>
        </ListGroup.Item>
    );
};

export default ExpenseItem;
