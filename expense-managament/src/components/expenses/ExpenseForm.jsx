import React, { useState } from 'react';
import { Card, Form, Row, Col, Button, InputGroup, ButtonGroup, ToggleButton } from 'react-bootstrap';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('Other');
    const [transactionType, setTransactionType] = useState('expense');

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
            type: transactionType,
        };

        if (props.onSaveExpenseData) {
            props.onSaveExpenseData(expenseData);
        }

        console.log('Transaction added:', expenseData);

        // Reset form
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredCategory('Other');
        setTransactionType('expense');
    };

    return (
        <Card className="shadow-sm border-0 rounded-4 mb-4 overflow-hidden">
            <div className="bg-primary p-2"></div>
            <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <Card.Title as="h2" className="h4 fw-bold mb-0 text-primary">Thêm Giao Dịch Mới</Card.Title>
                    <ButtonGroup className="shadow-sm rounded-pill overflow-hidden border">
                        <ToggleButton
                            id="tgl-expense"
                            type="radio"
                            variant={transactionType === 'expense' ? 'danger' : 'outline-danger'}
                            name="type"
                            value="expense"
                            checked={transactionType === 'expense'}
                            onChange={(e) => setTransactionType(e.currentTarget.value)}
                            className="px-3 border-0 py-1"
                        >
                            Chi tiêu
                        </ToggleButton>
                        <ToggleButton
                            id="tgl-income"
                            type="radio"
                            variant={transactionType === 'income' ? 'success' : 'outline-success'}
                            name="type"
                            value="income"
                            checked={transactionType === 'income'}
                            onChange={(e) => setTransactionType(e.currentTarget.value)}
                            className="px-3 border-0 py-1"
                        >
                            Thu nhập
                        </ToggleButton>
                    </ButtonGroup>
                </div>

                <Form onSubmit={submitHandler}>
                    <Row className="g-3">
                        <Col md={12}>
                            <Form.Group>
                                <Form.Label className="fw-semibold small text-uppercase text-secondary">Nội dung {transactionType === 'expense' ? 'chi tiêu' : 'thu nhập'}</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text className="bg-light border-end-0">
                                        <i className={`bi ${transactionType === 'expense' ? 'bi-tag' : 'bi-plus-circle'} text-secondary`}></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        placeholder={transactionType === 'expense' ? "Bạn đã mua gì?" : "Nguồn tiền từ đâu?"}
                                        className="border-start-0 bg-light"
                                        value={enteredTitle}
                                        onChange={titleChangeHandler}
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className="fw-semibold small text-uppercase text-secondary">Số tiền (VND)</Form.Label>
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
                                <Form.Label className="fw-semibold small text-uppercase text-secondary">Ngày giao dịch</Form.Label>
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
                                <Form.Label className="fw-semibold small text-uppercase text-secondary">Danh mục</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text className="bg-light border-end-0">
                                        <i className="bi bi-list-ul text-secondary"></i>
                                    </InputGroup.Text>
                                    <Form.Select
                                        className="border-start-0 bg-light"
                                        value={enteredCategory}
                                        onChange={categoryChangeHandler}
                                    >
                                        {transactionType === 'expense' ? (
                                            <>
                                                <option value="Food">Ăn uống</option>
                                                <option value="Entertainment">Giải trí</option>
                                                <option value="Transport">Di chuyển</option>
                                                <option value="Shopping">Mua sắm</option>
                                                <option value="Coffee">Cà phê</option>
                                                <option value="Other">Khác</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="Salary">Lương</option>
                                                <option value="Bonus">Thưởng</option>
                                                <option value="Gift">Quà tặng</option>
                                                <option value="Interest">Tiền lãi</option>
                                                <option value="Other">Khác</option>
                                            </>
                                        )}
                                    </Form.Select>
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={12} className="text-end mt-4">
                            <Button
                                variant={transactionType === 'expense' ? 'primary' : 'success'}
                                type="submit"
                                className="px-5 py-2 fw-bold rounded-pill shadow-sm"
                            >
                                <i className="bi bi-check-circle me-2"></i>
                                {transactionType === 'expense' ? 'Ghi Chi Tiêu' : 'Ghi Thu Nhập'}
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default ExpenseForm;



