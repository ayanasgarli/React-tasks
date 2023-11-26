import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Divider } from "antd";
import axios from "axios";
import "./index.scss";

const BeerTable = () => {
  const [beers, setBeers] = useState([]);
  const [sortedInfo, setSortedInfo] = useState({});
  const [filteredInfo, setFilteredInfo] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBeer, setSelectedBeer] = useState(null);

  useEffect(() => {
    fetchBeerData();
  }, []);

  const fetchBeerData = async () => {
    try {
      const response = await axios.get("https://api.punkapi.com/v2/beers");
      setBeers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "ABV",
      dataIndex: "abv",
      key: "abv",
      sorter: (a, b) => a.abv - b.abv,
      sortOrder: sortedInfo.columnKey === "abv" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Info",
      dataIndex: "info",
      key: "info",
      render: (_, record) => (
        <Button className="infoButton" onClick={() => handleModalOpen(record)}>
          Info
        </Button>
      ),
    },
  ];

  const handleModalOpen = (record) => {
    setSelectedBeer(record);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedBeer(null);
  };

  return (
    <>
      <Divider style={{ fontSize: "36px" }}>Beer Data Table</Divider>
      <Table
        dataSource={beers}
        columns={columns}
        onChange={handleChange}
        pagination={{ pageSize: 10 }}
      />
      <Modal
        title="Beer Details"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {selectedBeer && (
          <div>
            <img
              src={selectedBeer.image_url}
              alt={selectedBeer.name}
              style={{ maxWidth: "20%" }}
            />
            <p>
              <strong>Name:</strong> {selectedBeer.name}
            </p>
            <p>
              <strong>ABV:</strong> {selectedBeer.abv}
            </p>
            <p>
              <strong>Ingredients:</strong>{" "}
              {selectedBeer.ingredients &&
                selectedBeer.ingredients.malt
                  .map((item) => item.name)
                  .join(", ")}
            </p>
            <p>
              <strong>Food Pairing:</strong>{" "}
              {selectedBeer.food_pairing &&
                selectedBeer.food_pairing.join(", ")}
            </p>
            <p>
              <strong>Description:</strong> {selectedBeer.description}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default BeerTable;
