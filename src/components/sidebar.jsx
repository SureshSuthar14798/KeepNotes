import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const Sidebar = () => {
    // Modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [inputLabelList, setInputList] = useState([]);
    const [addBtn, setAddBtn] = useState(false);
    const [infocus, setFocus] = useState(null)
    const [getValue,setValue] = useState()
    const ref = useRef(infocus);

    const setActive = event => {
        [...event.currentTarget.parentElement.children].forEach(sib => sib.classList.remove('active'))
        event.currentTarget.classList.add("active");
    }

    const handleBtnAddClick = () => {
        setAddBtn(!addBtn)
        setFocus(!infocus)
        if (infocus) {
            ref.current.blur()
            let enterdValue = ref.current.value
            setValue(enterdValue)
        } else {
            ref.current.focus()
        }
    }

    const AppendElement = () => {
        return (
            <div className="edit_block mt-2">
                <button className='donebtn'>
                    <svg height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#ffffff">
                        <path d="m0 0h48v48h-48z" fill="none" />
                        <path d="m35.27 11.69c-0.73-1.02-1.92-1.69-3.27-1.69l-22 0.02c-2.21 0-4 1.77-4 3.98v20c0 2.21 1.79 3.98 4 3.98l22 0.02c1.35 0 2.54-0.67 3.27-1.69l8.73-12.31-8.73-12.31z" />
                    </svg>
                </button>
                <input placeholder='Create new label' value={getValue} />
                <button className='donebtn'>
                    <svg height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#ffffff">
                        <path d="m6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c0.78-0.78 0.78-2.05 0-2.83l-4.67-4.67c-0.78-0.78-2.05-0.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" />
                        <path d="m0 0h48v48h-48z" fill="none" />
                    </svg>
                </button>
            </div>
        )
    };
    const addLabelhandler = () => {
        setInputList(inputLabelList.concat(<AppendElement key={inputLabelList.length} />));
    }

    return (
        <div className="slidebar_block">
            <div className="slidebar_inner">
                <div className="">
                    <ul>
                        <li className='active' onClick={setActive}>
                            <NavLink to="/note">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" fill="#fff"></path></svg>
                                <span> Notes </span>
                            </NavLink>
                        </li>
                        <li onClick={setActive}>
                            <NavLink to="/remainder">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" fill="#fff"></path></svg>
                                <span> Remainders </span>
                            </NavLink>
                        </li>
                        <li onClick={setActive}>
                            <a href="#0" onClick={handleShow}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z" fill="#fff"></path></svg>
                                <span> Edit lables </span>
                            </a>
                        </li>
                        <li onClick={setActive}>
                            <NavLink to="/archive">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z" fill="#fff"></path></svg>
                                <span> Archive </span>
                            </NavLink>
                        </li>
                        <li onClick={setActive}>
                            <NavLink to="/trash">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z" fill="#fff"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z" fill="#fff"></path></svg>
                                <span> Trush </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Modal */}
            <Modal className='edit_label_modal' show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit labels
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="edit_label_inner">
                        <div className="edit_block">
                            <button className='donebtn' onClick={handleBtnAddClick}>
                                {
                                    addBtn ?
                                        (
                                            <svg height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="#ffffff">
                                                <path d="m0 0h18v18h-18zh18v18h-18z" fill="none" />
                                                <path d="m14.53 4.53l-1.06-1.06-4.47 4.47-4.47-4.47-1.06 1.06 4.47 4.47-4.47 4.47 1.06 1.06 4.47-4.47 4.47 4.47 1.06-1.06-4.47-4.47z" />
                                            </svg>
                                        )
                                        :
                                        (
                                            <svg height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#ffffff">
                                                <path d="m38 26h-12v12h-4v-12h-12v-4h12v-12h4v12h12v4z" />
                                                <path d="m0 0h48v48h-48z" fill="none" />
                                            </svg>
                                        )
                                }
                            </button>
                            <input ref={ref} type="text" onFocus={handleBtnAddClick} placeholder='Create new label' />
                            {
                                addBtn ?
                                    (
                                        <button className='donebtn' onClick={addLabelhandler}>
                                            <svg height="18px" width="18px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="#ffffff">
                                                <path d="m0 0h18v18h-18z" fill="none" />
                                                <path d="m6.61 11.89l-3.11-3.11-1.06 1.06 4.17 4.16 8.95-8.95-1.06-1.05z" />
                                            </svg>
                                        </button>
                                    )
                                    :
                                    (null)
                            }
                        </div>
                        <div className="">
                            {inputLabelList}
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='donebtn' onClick={handleClose}>Done</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Sidebar

