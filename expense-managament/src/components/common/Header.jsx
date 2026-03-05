import React from 'react';
import { Card } from 'react-bootstrap';

const Header = () => {
  return (
    <Card className="text-center bg-primary text-white rounded-4 shadow border-0 mb-4 overflow-hidden">
      <Card.Body className="py-5">
        <div className="d-flex align-items-center justify-content-center gap-3">
          <div className="bg-white p-3 rounded-circle shadow-sm">
            <i className="bi bi-wallet2 text-primary fs-1"></i>
          </div>
          <div>
            <h1 className="display-4 fw-bold mb-0">Quản Lý Chi Tiêu</h1>
            <p className="lead mb-0 opacity-75">Theo dõi chi tiêu hàng ngày của bạn một cách dễ dàng</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Header;
