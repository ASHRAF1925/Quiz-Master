import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className='d-flex flex-column ' >
            
            <img src="images/404-error-page-templates.png" alt=""
            
            
            />

            <Link to={`/`}><button className='position-absolute top-100  btn btn-primary'>Back to Home Page  <small className='ms-2'><FontAwesomeIcon icon={faHome} ></FontAwesomeIcon></small> </button></Link>
            
            
        </div>
    );
};

export default NotFoundPage;