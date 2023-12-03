import React from 'react';
import { Menu, Button } from 'antd';
import { HomeOutlined, ShopOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Item } = Menu;

const Navbar = () => {

  return (
    <Menu mode="horizontal" style={{ backgroundColor: '#001529', borderBottom: 'none', minHeight: '10vh', alignItems: 'center' }}>
      <Item key="userSide" style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#fff', marginRight: '100vh' }}>
        User Side
      </Item>
      <Item key="home">
        <Link to="/">
          <Button icon={<HomeOutlined />} type="text" style={{ color: '#ffffff' }}>
            Home
          </Button>
        </Link>
      </Item>
      <Item key="categories">
        <Link to="/categories">
          <Button icon={<ShopOutlined />} type="text" style={{ color: '#ffffff' }}>
            Categories
          </Button>
        </Link>
      </Item>
      <Item key="login">
        <Link to="/login">
          <Button icon={<LoginOutlined />} type="text" style={{ color: '#ffffff' }}>
            Login
          </Button>
        </Link>
      </Item>
      <Item key="register">
        <Link to="/register">
          <Button icon={<UserAddOutlined />} type="text" style={{ color: '#ffffff' }}>
            Register
          </Button>
        </Link>
      </Item>
    </Menu>
  );
};

export default Navbar;
