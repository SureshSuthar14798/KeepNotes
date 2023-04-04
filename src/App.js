import React, { useState } from "react";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./pages/myroutes";
import Sidebar from "./components/sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import './components/common.css';
import './App.css';

function App() {
    const [toggle, setToggle] = useState();
    const menutoggle = (data) => {
        setToggle(data);
    }
    return (
        <BrowserRouter >
            <div className={`main_wrapper ${toggle ? "close" : "open"}`}>
                <Header onAlltoggleMenu={menutoggle} />
                <div className="playground_block">
                    <Sidebar />
                    <MyRoutes />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
