import React, { useContext } from "react";
import { Menu, Affix } from "antd";
import { HomeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { BasketContext } from "../../services/context/BasketContext";

const Navbar = () => {
  const { basketItems } = useContext(BasketContext);

  return (
    <Affix>
      <Menu theme="dark" mode="horizontal" style={{ fontSize: "18px" }}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">
            Categories <sup></sup>
          </Link>
        </Menu.Item>
        <Menu.Item key="basket" icon={<ShoppingOutlined />}>
          <Link to="/basket">
            Basket <sup>{basketItems ? basketItems.length : 0}</sup>
          </Link>
        </Menu.Item>
      </Menu>
    </Affix>
  );
};

export default Navbar;
