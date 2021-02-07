import React from 'react';
import {connect, Provider} from 'react-redux';
import store from "./redux/store";
import './App.css';
import 'antd/dist/antd.css';

import { Layout, Menu, Breadcrumb } from 'antd';
import Products from './components/Products/Products';
import Checkout from './components/Checkout/Checkout';
import Contact from './components/Contact/Contact';
import {Switch, Route} from 'react-router-dom';
import HeaderCustom from "./components/HeaderCustom/HeaderCustom";

const { Header, Content, Footer } = Layout;

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Layout className="layout">
                    <Header>
                        <HeaderCustom/>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">
                            <Switch>
                                <Route path='/contact' render={Contact}/>
                                <Route path='/checkout' render={Checkout}/>
                                <Route path='/' render={Products}/>
                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Provider>
        </div>
    )
}

window.winStore = store.getState();

export default App;
