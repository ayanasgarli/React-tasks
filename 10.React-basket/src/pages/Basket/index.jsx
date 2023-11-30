import React, { useContext } from "react";
import { BasketContext } from "../../services/context/BasketContext";
import { Table, Button } from "antd";

const Basket = () => {
  const { basketItems, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(BasketContext);

  const handleIncrease = (id) => {
    increaseQuantity(id);
  };

  const handleDecrease = (id) => {
    decreaseQuantity(id);
  };

  const handleRemove = (id) => {
    removeItem(id);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => (
        <>
          <Button onClick={() => handleDecrease(record.id)}>-</Button>
          <span style={{ margin: "0 8px" }}>{record.quantity}</span>
          <Button onClick={() => handleIncrease(record.id)}>+</Button>
        </>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Button
          type="danger"
          style={{ background: "red", color: "white" }}
          onClick={() => handleRemove(record.id)}
        >
          Remove
        </Button>
      ),
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Basket</h1>
      <Table
        style={{ width: "75%", margin: "30px auto" }}
        rowKey={(record) => record.id}
        dataSource={basketItems}
        columns={columns}
      />
    </>
  );
};

export default Basket;
