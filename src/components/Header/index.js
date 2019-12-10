/**
 * Component Header
 * 
 * Props accepts
 * 
 * brand (optional)
 * children (optional)
 * 
 */
import React from "react";
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
    return (
        <Navbar bg="dark" variant="dark" data-test='header-wrap' className="justify-content-between">
                <Navbar.Brand >
                   
                    <h4>{'WEIR'}</h4>
                </Navbar.Brand>
                <h5>
                     <Navbar.Text>
                     { props.children}
                     </Navbar.Text>
                 </h5>        
                
            </Navbar>
    )
}

export default Header;