import React from 'react';
import './modal.css';
const Modal = (props) =>{
    const {children,title,setModal} = props;
    const handleCloseModal =()=>{
        setModal(false)
    }
    return (
    <>  
        <div className="modal flex-center">
            <div className="form-modal">
                <div  onClick={handleCloseModal}className="form-close">
                    X
                </div>
                <div className="title-modal">
                    {title}
                </div>
                <div className="body-modal">
                    {children}
                </div>
            </div>
        </div>
    </>
    )
}
export default Modal;