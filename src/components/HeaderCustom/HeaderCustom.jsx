import React from 'react'
import {NavLink} from "react-router-dom";
import logoImage from "../../assets/img/tree.gif";
import "./HeaderOverwrite.css";
import {Row, Col} from 'antd';
import {Menu} from 'antd';

let HeaderCustom = (props) => {
    return (
        <Row>
            <Col span={6}>
                <img src={logoImage} alt="logo" className="header__logo" width="60"/>
            </Col>

            <Col span={18}>
                <Menu mode="horizontal">
                    <Menu.Item key="contact">
                       <NavLink to='/contact'>Contact us</NavLink>
                    </Menu.Item>
                    <Menu.Item key="products">
                        <NavLink to='/'>Products</NavLink>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    )
}

export default HeaderCustom;
