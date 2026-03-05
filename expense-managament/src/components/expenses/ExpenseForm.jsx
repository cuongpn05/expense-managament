import React from 'react';
import { Card, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';

const ExpenseForm = () => {
    return (
        <Card className="shadow-sm border-0 rounded-4 mb-4">
            <Card.Body className="p-4">
                <Card.Title as="h2" className="h4 fw-bold mb-4 text-primary">Thêm Khoản Chi Mới</Card.Title>
                <Form>
                    <Row className="g-3">
                        <Col md={6}>
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
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
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
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group>
                                <Form.Label className="fw-semibold">Ngày chi</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text className="bg-light border-end-0">
                                        <i className="bi bi-calendar-event text-secondary"></i>
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="date"
                                        className="border-start-0 bg-light"
                                    />
                                </InputGroup>
                            </Form.Group>
                        </Col>

                        <Col md={6} className="d-flex align-items-end">
                            <Button variant="primary" type="submit" className="w-100 py-2 fw-bold">
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
