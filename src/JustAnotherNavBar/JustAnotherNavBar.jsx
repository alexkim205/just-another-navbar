import React from 'react';
import styled from 'styled-components';

import { media } from '../_helpers';
import { Menu, Close } from 'grommet-icons';
import { theme } from '../_styles';

import '../_styles/base.css';
import '../_styles/font.css';

const NavBarWrapper = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 1.1em;
  width: 100%;
  background-color: ${theme.global.colors.brand};
  display: flex;
  flex-direction: row;
  padding: 0;
  // height: 70px;
  
  ${media.tablet`
    flex-wrap: wrap;
  `}
`;

const NavBarGrow = styled.div`
  flex: 1;
`;

const NavBarItem = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  
  a {
    display: block;
    text-decoration: none;
    color: white;
  }
  
  &.title {
    text-align: left;
    align-items: flex-start;
    padding: 1.2em 1.5em;
    // position: absolute;
    >.large-title {
      display: block;
      ${media.tablet`
        display: none;
      `}
    }
    
    >.small-title {
      display: none;
      ${media.tablet`
        display: block;
      `}
    }
  }

  &.item {
    padding: 1.2em 1em;
    ${media.tablet`
      display: none;
    `}
  }
`;

const IconItem = styled.div`
  text-align: left;
  justify-content: center;
  cursor: pointer;
`;

const NavBarIconItem = styled(IconItem)`
  display: none;
  margin: auto 1em;
  ${media.tablet`
    display: block;
  `}
`;

const SideBarIconItem = styled(IconItem)`
  margin: 0.15em 0 0.8em 0;
`;

const SideBar = styled.div`
  padding: 1.5em 1.5em;
  text-align: center;
  // align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${theme.global.colors.darkAccent};
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 50vw;
  height: 100vh;
  transition: transform .3s cubic-bezier(0, .52, 0, 1);

  ${media.mablet`
    width: 65vw;
  `}
  
  ${media.lMobile`
    width: 100vw;
  `}
  
  // default
  &.hide {
    transform: translate3d(110vw, 0, 0);
  }
  &.show {
    transform: translate3d(50vw, 0, 0);
    ${media.mablet`
      transform: translate3d(35vw, 0, 0);
    `}
    ${media.lMobile`
      transform: translate3d(0vw, 0, 0);
    `}
  }
`;

const SideBarItem = styled.div`
  background-color: ${theme.global.colors.accent};
  padding: 0.7em 2em;
  margin: 0.35em 0;
  
  a {
    color: ${theme.global.colors.text.dark};
    text-decoration: none;
  }
`;

class JustAnotherNavBar extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      sideBarOpen: false,
    };

    this.handleNavBar = this.handleNavBar.bind(this);
  }

  handleNavBar (e) {
    this.setState({sideBarOpen: !this.state.sideBarOpen});
    console.log(this.state.sideBarOpen);

    e.stopPropagation();
  }

  render () {
    const {sideBarOpen} = this.state;

    return (
      <NavBarWrapper>
        {/* Horizontal Navbar Menu */}
        <NavBarItem className='title'>
          <a href="#" className='large-title'>Just Another NavBar</a>
          <a href="#" className='small-title'>J.A.N.B.</a>
        </NavBarItem>
        <NavBarGrow/>
        <NavBarItem className='item'><a href="#">NavBar Item 1</a></NavBarItem>
        <NavBarItem className='item'><a href="#">NavBar Item 2</a></NavBarItem>
        <NavBarItem className='item'><a href="#">NavBar Item 3</a></NavBarItem>
        <NavBarIconItem onClick={this.handleNavBar}>
          <Menu color='white' size='medium'/>
        </NavBarIconItem>
        <SideBar className={sideBarOpen ? 'show' : 'hide'}>
          <SideBarIconItem>
            <Close color='white' size='medium' onClick={this.handleNavBar}/>
          </SideBarIconItem>
          <SideBarItem><a href="#">Sidebar Item 1</a></SideBarItem>
          <SideBarItem><a href="#">Sidebar Item 2</a></SideBarItem>
          <SideBarItem><a href="#">Sidebar Item 3</a></SideBarItem>
        </SideBar>
      </NavBarWrapper>
    );
  }

}

export { JustAnotherNavBar };