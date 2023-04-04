import React from 'react'

const Trash = () => {
    return (
        <>
            {/* <div className="main_block">
                <div className="main_block_inner">
                </div>
            </div> */}
            <div className="empty_block">
                <div className="image_block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                        <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z" />
                        <path d="M9 8h2v9H9zm4 0h2v9h-2z" />
                    </svg>
                </div>
                <h3> No notes in Trash</h3>
            </div>
        </>
    )
}

export default Trash