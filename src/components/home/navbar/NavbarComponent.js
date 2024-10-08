// ==================================================================================

//        Copyright (c) 2022 Samsung Electronics Co., Ltd. All Rights Reserved.

//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at

//           http://www.apache.org/licenses/LICENSE-2.0

//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

// ==================================================================================

import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './NavbarComponent.css';

function NavbarComponent() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme === 'true';
  });

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Navbar className='nav-bar custom-navbar' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>AI/ML Management Dashboard</Navbar.Brand>
        <Nav>
          <NavDropdown title="Menu" className="nav-drop-down">
            <NavDropdown.Item href="/TrainingJob/TrainingJobsStatus">Training Job</NavDropdown.Item>
            <NavDropdown.Item href="/TrainingJob/Pipeline">Training Function</NavDropdown.Item>
            <NavDropdown.Item href="/TrainingJob/ListFeatureGroups">Feature Group</NavDropdown.Item>
          </NavDropdown>
          <Button onClick={toggleDarkMode} variant={isDarkMode ? 'dark' : 'primary'}>
            {isDarkMode ? <i className='bi bi-sun-fill'></i> : <i className='bi bi-moon-stars-fill'></i>}
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
