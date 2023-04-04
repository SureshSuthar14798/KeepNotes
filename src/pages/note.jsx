import React from 'react'

const Note = () => {
  return (
    <div className="main_block">
      <div className="main_block_inner">
        <div className="take_input_box">
          <input type="text" placeholder='Take a note...' />
          <div className="take_inputbox_btn">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                <path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M18.64 4.75L20 6.11l-7.79 7.79-1.36-1.36 7.79-7.79m0-2c-.51 0-1.02.2-1.41.59l-7.79 7.79c-.78.78-.78 2.05 0 2.83l1.36 1.36c.39.39.9.59 1.41.59.51 0 1.02-.2 1.41-.59l7.79-7.79c.78-.78.78-2.05 0-2.83l-1.35-1.35c-.39-.4-.9-.6-1.42-.6zM7 14.25c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note