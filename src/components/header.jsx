import React, { useState } from 'react'
import header_logo from '../images/logo.png'
import { Dropdown, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    const [searchInput, setSearchInput] = useState("");
    const [showclearBtn, setShowClearbtn] = useState(false);

    const [menuToggle, setMenuToggle] = useState(false);

    const ToggleMenus = () => {
        props.onAlltoggleMenu(!menuToggle)
        setMenuToggle(!menuToggle)
    }

    const clearBtnhandler = (e) => {
        setSearchInput(e.target.value)
        let inputVal = e.target.value;
        if (inputVal !== "") {
            setShowClearbtn(true);
        } else {
            setShowClearbtn(false);
        }
    }
    const ClearSearchbox = () => {
        setSearchInput('')
        setShowClearbtn(false);
    }

    const pageReloadHandler = () => {
        window.location.reload(true);
    }

    const Setting_menus = (
        <Menu
            items={[
                {
                    key: '0',
                    label: <a href="#0">Setting</a>,
                },
                {
                    key: '1',
                    label: <a href="#0">Disable dark mode</a>,
                },
                {
                    key: '3',
                    label: <a href="#0">Send feedback</a>,
                },
                {
                    key: '4',
                    label: <a href="#0">Help</a>,
                },
                {
                    key: '5',
                    label: <a href="#0">App downloads</a>,
                },
                {
                    key: '6',
                    label: <a href="#0">Keyboard shortcuts</a>,
                },
            ]}
        />
    );

    return (
        <div className='header_wrapper'>
            <div className="header_left_block">
                <div className="humberger_menu" onClick={ToggleMenus}>
                    <svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill='#fff'></path></svg>
                </div>
                <div className="header_logo_wrapper">
                    <div className="header_logo">
                        <NavLink to="/note">
                            <img src={header_logo} width="40px" height="40px" alt="" />
                            <span>Keep</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="searchbox_wrapper">
                <div className="searchbox_block">
                    <button className='search_icon_btn'>
                        <div className="search_icon">
                            <div className="hover_block">
                                <svg height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z" fill='#fff'></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>
                            </div>
                        </div>
                    </button>
                    <div className="search_input_box">
                        <input onChange={clearBtnhandler} value={searchInput} type="text" placeholder='Search' name="" id="searchinput" />
                    </div>
                    {
                        showclearBtn ? (
                            <button className='clear_btn' onClick={ClearSearchbox}>
                                <div className="clear_btn_icon">
                                    <div className="hover_block">
                                        <svg height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill='#fff'></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                                    </div>
                                </div>
                            </button>
                        ) : (null)
                    }
                </div>
            </div>
            <div className="header_right_block">
                <div className="tools_block">
                    <div className="refresh_btn">
                        <button type='button' onClick={pageReloadHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                                <path d="M13 9v2h7V4h-2v2.74C16.53 5.07 14.4 4 12 4c-2.21 0-4.21.9-5.66 2.34S4 9.79 4 12c0 4.42 3.58 8 8 8 2.21 0 4.21-.9 5.66-2.34l-1.42-1.42A5.98 5.98 0 0 1 12 18c-3.31 0-6-2.69-6-6 0-1.65.67-3.15 1.76-4.24A5.98 5.98 0 0 1 12 6a6.01 6.01 0 0 1 5.19 3H13z" />
                            </svg>
                        </button>
                    </div>
                    <div className="layout_btn">
                        <button type='button'>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="list_view_24px" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <polygon id="bounds" fillOpacity="0" fill="#FFFFFF" points="0 0 24 0 24 24 0 24"></polygon>
                                    <path d="M20,9 L4,9 L4,5 L20,5 L20,9 Z M20,19 L4,19 L4,15 L20,15 L20,19 Z M3,3 C2.45,3 2,3.45 2,4 L2,10 C2,10.55 2.45,11 3,11 L21,11 C21.55,11 22,10.55 22,10 L22,4 C22,3.45 21.55,3 21,3 L3,3 Z M3,13 C2.45,13 2,13.45 2,14 L2,20 C2,20.55 2.45,21 3,21 L21,21 C21.55,21 22,20.55 22,20 L22,14 C22,13.45 21.55,13 21,13 L3,13 Z" id="icon" fill="#ffffff" fillRule="nonzero"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <Dropdown overlay={Setting_menus} trigger={['click']}>
                        <a onClick={e => e.preventDefault()}>
                            <div className="setting_btn">
                                <button type='button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                                        <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z" />
                                        <circle cx="12" cy="12" r="3.5" />
                                    </svg>
                                </button>
                            </div>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Header