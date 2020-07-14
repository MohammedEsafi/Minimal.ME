import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { Button, Header as StyledHeader } from '../styles';


const Avatar = styled(Image)`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const OrderedList = styled.ol`
  display: flex;
  margin: 0px;
  padding: 0px;
  list-style: outside none none;
`

const Item = styled.li`
  margin: 0px 10px;
  position: relative;
  font-size: 13px;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const Header = ({ imageData, siteTitle }) => (
  <Header>
    <Flex>
      <Link>
        <p>Logo</p>
      </Link>
      <Nav>
        <OrderedList>
          <Item>kk</Item>
          <Item>kk</Item>
          <Item>kk</Item>
        </OrderedList>
        <Link href="#">
          <Button>
            Resume
          </Button>
        </Link>
      </Nav>
    </Flex>
  </Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
