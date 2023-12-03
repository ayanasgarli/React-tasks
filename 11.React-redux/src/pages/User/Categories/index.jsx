import { Button, Table, Modal } from "antd";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/api/category";
import Swal from "sweetalert2";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const Categories = () => {
  let [categories, setCategories] = useState([]);
  let [modalVisible, setModalVisible] = useState(false);
  let [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  const showModal = (category) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
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
      title: "Actions",
      render: (text, record) => (
        <>
          <Button
            onClick={() => {
              Swal.fire({
                position: "bottom-end",
                icon: "success",
                title: `${record.name} added to basket`,
                showConfirmButton: false,
                timer: 1500,
              });
            }}
            type="primary"
            style={{ marginRight: "8px" }}
          >
            Basket
          </Button>
          <Button
            onClick={() => {
              showModal(record);
            }}
            type="primary"
          >
            Info
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>Categories</h2>
      <Table
        style={{ width: "70%", margin: "30px auto" }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={categories}
        onChange={onChange}
      />
      <Modal
        title="Category Details"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <p><strong>Name:</strong> {selectedCategory.name}</p>
        <p><strong>Description:</strong> {selectedCategory.description}</p>
      </Modal>
    </>
  );
};

export default Categories;
