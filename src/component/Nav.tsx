import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const Nav = () => {

    const logout = async () => {
        await fetch('http://localhost:4003/component/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
console.log('inside logout function');

        //  props.setName('')
        //  console.log(props.setName.name);
         
    }

    let menu;

//     if (props.name === '') {
//         menu = (
//             <ul className="navbar-nav me-auto mb-2 mb-md-0">
//                 <li className="nav-item active">
//                     <Link to="/login" className="nav-link">Login</Link>
//                 </li>
//                 <li className="nav-item active">
//                     <Link to="/register" className="nav-link">Register</Link>
//                 </li>
//             </ul>
//         )
//     } else {
//         menu = (
//             <ul className="navbar-nav me-auto mb-2 mb-md-0">


//                 {/* <li className="nav-item active">
//                     <Link to="/admin" className="nav-link" >Add Client</Link>
//                 </li> */}
//                 <NavDropdown
//                         id="nav-dropdown-dark-example"
//                         title="Client"
//                         // menuVariant="dark"
//                     >
//                         <NavDropdown.Item >    <Link to="/admin" className="nav-link" >Add Client</Link></NavDropdown.Item>
//                         <NavDropdown.Item ><Link to="/updateclient" className="nav-link" >Update Client</Link></NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
//                     </NavDropdown>
//                 <li>
//                     <NavDropdown
//                         id="nav-dropdown-dark-example"
//                         title="Role"
//                         // menuVariant="dark"
//                     >
//                         <NavDropdown.Item >    <Link to="/addclient" className="nav-link" >Add Roles</Link></NavDropdown.Item>
//                         <NavDropdown.Item ><Link to="/viewrole" className="nav-link" >Update Roles</Link></NavDropdown.Item>
//                         <NavDropdown.Divider />
//                         {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
//                     </NavDropdown>

//                 </li>

//                 <li>
//                     <NavDropdown
//                         id="nav-dropdown-dark-example"
//                         title="App"
//                         // menuVariant="dark"
//                     >
//                         <NavDropdown.Item >    <Link to="/addapp" className="nav-link" >Add App</Link></NavDropdown.Item>
//                         <NavDropdown.Item ><Link to="/updateapp" className="nav-link" >Update Apps</Link></NavDropdown.Item>
                       
//                         <NavDropdown.Divider />
//                         <NavDropdown.Item ><Link to="/addfeature" className="nav-link" >Add App feature</Link></NavDropdown.Item>
//                         <NavDropdown.Item ><Link to="/updatefeature" className="nav-link" >Update App feature</Link></NavDropdown.Item>
//                     </NavDropdown>

//                 </li>


                
// {/* 
//                 <li className="nav-item active">
//                     <Link to="/admin/upload" className="nav-link" >Upload</Link>
//                 </li> */}
// {/* 
//                 <li className="nav-item active">
//                     <Link to="/addapp" className="nav-link" >Add App</Link>
                  
//                 </li> */}
// {/* 
//                 <li className="nav-item active">
//                     <Link to="/addfeature" className="nav-link" >Add Feature</Link>
                   
//                 </li> */}



//                 <li style={{ backgroundColor: 'firebrick' }} className="nav-item active">
//                     <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
//                 </li>

                
//             </ul>
//         )
//     }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                
                <Link to="/" className="navbar-brand">Home</Link>

                <div>
                    {menu}
                </div>
            </div>
        </nav>
    );
};
