import React from 'react'
import { Routes, Route } from "react-router-dom";
import Note from './note'
import Remainder from './remainder'
import Archive from './archive'
import Trash from './trash'
import '../App.css';

const MyRoutes = () => {
    return (
        <div className="right_block_wrapper">
            <Routes>
                <Route path="/" element={<Note/>}></Route>
                <Route path="/note" element={<Note/>}></Route>
                <Route path="/remainder" element={<Remainder/>}></Route>
                <Route path="/archive" element={<Archive/>}></Route>
                <Route path="/trash" element={<Trash/>}></Route>
            </Routes>
        </div>
    )
}

export default MyRoutes