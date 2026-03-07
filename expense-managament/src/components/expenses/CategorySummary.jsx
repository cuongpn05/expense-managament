import React from 'react';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';

const CategorySummary = ({ items }) => {
    const expenses = items.filter(item => item.type !== 'income');
    const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);

    // Group by category
    const categoryTotals = expenses.reduce((groups, item) => {
        const cat = item.category;
        if (!groups[cat]) {
            groups[cat] = 0;
        }
        groups[cat] += item.amount;
        return groups;
    }, {});

    const getCategoryDetails = (category) => {
        const details = {
            'Food': { label: 'Ăn uống', icon: 'bi-cart', color: 'primary' },
            'Entertainment': { label: 'Giải trí', icon: 'bi-tv', color: 'info' },
            'Transport': { label: 'Di chuyển', icon: 'bi-car-front', color: 'warning' },
            'Shopping': { label: 'Mua sắm', icon: 'bi-bag', color: 'danger' },
            'Coffee': { label: 'Cà phê', icon: 'bi-cup-hot', color: 'success' },
            'Other': { label: 'Khác', icon: 'bi-credit-card', color: 'secondary' }
        };
        return details[category] || { label: category, icon: 'bi-tag', color: 'dark' };
    };

    const categories = Object.keys(categoryTotals).sort((a, b) => categoryTotals[b] - categoryTotals[a]);

    return (
        <Card className="shadow-sm border-0 rounded-4 mb-4">
            <Card.Body className="p-4">
                <Card.Title as="h2" className="h5 fw-bold mb-4 text-primary">
                    <i className="bi bi-pie-chart-fill me-2"></i>
                    Tổng Hợp Theo Danh Mục
                </Card.Title>

                {categories.length > 0 ? (
                    <Row className="g-3">
                        {categories.map(cat => {
                            const { label, icon, color } = getCategoryDetails(cat);
                            const amount = categoryTotals[cat];
                            const percentage = totalExpense > 0 ? (amount / totalExpense) * 100 : 0;

                            return (
                                <Col key={cat} xs={12} md={6}>
                                    <div className="p-3 border rounded-3 bg-light bg-opacity-50">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div className="d-flex align-items-center gap-2">
                                                <i className={`bi ${icon} text-${color} fs-5`}></i>
                                                <span className="fw-bold">{label}</span>
                                            </div>
                                            <span className="fw-bold text-dark">{amount.toLocaleString('vi-VN')} đ</span>
                                        </div>
                                        <ProgressBar
                                            now={percentage}
                                            variant={color}
                                            style={{ height: '8px' }}
                                            className="rounded-pill"
                                        />
                                        <div className="text-end mt-1">
                                            <small className="text-secondary" style={{ fontSize: '0.7rem' }}>
                                                {percentage.toFixed(1)}% trên tổng chi
                                            </small>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                ) : (
                    <p className="text-center text-secondary py-3">Chưa có dữ liệu chi tiêu để tổng hợp.</p>
                )}
            </Card.Body>
        </Card>
    );
};

export default CategorySummary;
