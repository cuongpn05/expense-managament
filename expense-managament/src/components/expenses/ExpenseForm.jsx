import React, { useState } from 'react';
import { Card, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('Other');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!enteredTitle || !enteredAmount || !enteredDate) {
            alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: enteredDate,
            category: enteredCategory,
        };

        if (props.onSaveExpenseData) {
            props.onSaveExpenseData(expenseData);
        }

        console.log('Expense added:', expenseData);

        // Reset form
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredCategory('Other');
    };

    return (
        <Card className="shadow-sm border-0 rounded-4 mb-4">
            <Card.Body className="p-4">
                <Card.Title as="h2" className="h4 fw-bold mb-4 text-primary">Thêm Khoản Chi Mới</Card.Title>
                <Form onSubmit={submitHandler}>
                    <Row className="g-3">
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label className="fw-semibold">Nội dung chi tiêu</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text className="bg-light border-end-0">
                                        <i className="bi bi-tag text-secondary"></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder="Bạn đã mua gì?"
                                        className="border-start-0 bg-light"
                                        value={enteredTitle}
                                        onChange={titleChangeHandler}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className="fw-semibold">Số tiền (VND)</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text className="bg-light border-end-0">
                                        <i className="bi bi-currency-dollar text-secondary"></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        placeholder="0"
                                        className="border-start-0 bg-light"
                                        value={enteredAmount}
                                        onChange={amountChangeHandler}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className="fw-semibold">Ngày chi</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text className="bg-light border-end-0">
                                        <i className="bi bi-calendar-event text-secondary"></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="date"
                                        className="border-start-0 bg-light"
                                        value={enteredDate}
                                        onChange={dateChangeHandler}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className="fw-semibold">Danh mục</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text className="bg-light border-end-0">
                                        <i className="bi bi-list-ul text-secondary"></i>
                                    </InputGroup.Text>
                                    <Form.Select
                                        className="border-start-0 bg-light"
                                        value={enteredCategory}
                                        onChange={categoryChangeHandler}
                                    >
                                        <option value="Food">Ăn uống</option>
                                        <option value="Entertainment">Giải trí</option>
                                        <option value="Transport">Di chuyển</option>
                                        <option value="Shopping">Mua sắm</option>
                                        <option value="Coffee">Cà phê</option>
                                        <option value="Other">Khác</option>
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={12} className="text-end mt-4">
                            <Button variant="primary" type="submit" className="px-5 py-2 fw-bold rounded-pill">
                                <i className="bi bi-plus-circle me-2"></i>
                                Thêm Chi Tiêu
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default ExpenseForm;


