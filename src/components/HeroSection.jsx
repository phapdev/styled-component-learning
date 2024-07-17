import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const HeroSection = () => {
  return (
    <Wrapper >
      <div className='container grid grid-two-column' >
        <div className='section-hero-data'>
          <p className='hero'> THIS IS ME</p>
          <h1 className='hero-heading'>PHAP DEVELOPER</h1>
          <p className='hero-para'>I'm iasddf nasdf asdf asdjkf asdklf lasfas fas </p>
        </div>

        <Button className="btn hiremme-btn" >
          <NavLink to="/contact"> hire me </NavLink>
        </Button>
        <div className='section-hero-image'></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

`;

const Button = styled.button``
export default HeroSection
