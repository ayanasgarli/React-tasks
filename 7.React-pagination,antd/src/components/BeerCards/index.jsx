import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Slider,
  Button,
  Pagination,
  Select,
  Row,
  Col,
  Modal,
  Divider,
} from "antd";
import axios from "axios";

const { Option } = Select;

const BeerCards = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [abvRange, setAbvRange] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedBeer, setSelectedBeer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    fetchBeerData();
  }, [currentPage, pageSize]);

  const fetchBeerData = async () => {
    try {
      const response = await axios.get("https://api.punkapi.com/v2/beers", {
        params: {
          page: currentPage,
          per_page: 25,
        },
      });

      if (currentPage === 1) {
        setBeers(response.data);
      } else {
        setBeers([...beers, ...response.data]);
      }

      const totalCount = response.headers["total-count"];
      setTotalItems(totalCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    setCurrentPage(1);
  };

  const filterBeers = () => {
    let filteredData = beers.filter((beer) => {
      const abv = Number(beer.abv);
      return (
        beer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        abv >= abvRange[0] &&
        abv <= abvRange[1]
      );
    });

    return filteredData.slice(0, 25);
  };

  const handleModalOpen = (record) => {
    setSelectedBeer(record);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedBeer(null);
  };

  const filteredBeers = filterBeers();

  const paginatedData = filteredBeers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePaginatedData = (data) => {
    return data.map((beer) => (
      <Col key={beer.id} xs={24} sm={12} md={8} lg={12} xl={6}>
        <Card>
          <p>
            <strong>{`Name:`}</strong> {beer.name}{" "}
          </p>
          <p>{`ABV: ${beer.abv}%`}</p>
          <Button onClick={() => handleModalOpen(beer)}>Info</Button>
        </Card>
      </Col>
    ));
  };

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  const filteredPaginatedData = handlePaginatedData(paginatedData);

  return (
    <>
      <Divider style={{ fontSize: "36px" }}>Beer Cards</Divider>
      <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Input
            placeholder="Search beer.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Slider
            range
            defaultValue={[0, 100]}
            min={0}
            max={100}
            onChange={(value) => setAbvRange(value)}
          />
          <Button
            style={{ marginRight: "10px" }}
            type="primary"
            onClick={filterBeers}
          >
            Submit
          </Button>

          <Select defaultValue="10" onChange={handlePageSizeChange}>
            <Option value="10">10</Option>
            <Option value="15">15</Option>
            <Option value="20">20</Option>
            <Option value="25">25</Option>
          </Select>
        </div>
        <Row gutter={[16, 16]}>{filteredPaginatedData}</Row>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredBeers.length}
          onChange={handlePaginationChange}
          style={{ marginTop: "20px", textAlign: "center" }}
        />
        <Modal
          title="Beer Details"
          visible={modalVisible}
          onCancel={handleModalClose}
          footer={null}
        >
          {selectedBeer && (
            <div>
              <p>
                <strong>Name:</strong> {selectedBeer.name}
              </p>
              <p>
                <strong>ABV:</strong> {selectedBeer.abv}%
              </p>
              <p>
                <strong>Description:</strong> {selectedBeer.description}
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
            </div>
          )}
        </Modal>
      </div>
    </>
  );
};

export default BeerCards;
