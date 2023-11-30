import { Button, Table, Spin } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { BasketContext } from "../../services/context/BasketContext";
import { getAllCategories } from "../../services/api/category";
import Swal from "sweetalert2";
import Link from "antd/es/typography/Link";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Categories = () => {
  let [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      setLoading(false);
    });
  }, []);

  const { addToBasket } = useContext(BasketContext);

  const handleAddToBasket = (record) => {
    addToBasket(record);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${record.name} added to basket`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Description",
      dataIndex: "description",
      filters: categories.map((category) => {
        return {
          text: category.description,
          value: category.description,
        };
      }),
      onFilter: (value, record) => record.description.indexOf(value) === 0,
    },
    {
      title: "Basket",
      render: (text, record) => (
        <Button onClick={() => handleAddToBasket(record)} type="primary">
          <Link
            to={{ pathname: "/basket", state: { selectedCategory: record } }}
          >
            Basket
          </Link>
        </Button>
      ),
    },
  ];
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Categories</h1>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <Table
          style={{ width: "75%", margin: "30px auto" }}
          rowKey={(record) => record.id}
          columns={columns}
          dataSource={categories}
        />
      )}
    </>
  );
};

export default Categories;
