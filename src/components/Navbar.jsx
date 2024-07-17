import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {

  const Nav = styled.nav`
  .navbar-list{
    display: flex;
    gap: 4.8rem;
    
  li {
    list-style: none;
    
    .navlink {
&:link,
&:visited {
  display; inline-block;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.black};
  transition: color 0.3s linear;
}
      
&:hover,
&:active {
  color: ${({ theme }) => theme.colors.helper};
}
    
  }}
}
`
  return (
    <Nav>
      <div className='menuIcon'>
        <div className='navbar-list'>
          <li>
            <NavLink className="navlink" to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className="navlink" to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink className="navlink" to={"/service"}>Service</NavLink>
          </li>
          <li>
            <NavLink className="navlink" to={"/contact"}>Contact</NavLink>
          </li>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar
