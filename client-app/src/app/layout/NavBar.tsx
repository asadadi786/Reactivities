/* eslint-disable no-unreachable */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Menu, Image } from "semantic-ui-react";
//import { MyFileBrowser } from './MyFileBrowser';

export default function NavBar() {
  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header exact as={NavLink} to="/">
            {/* <img
              src="/assets/paie_logo.jpg"
              alt="logo"
              style={{ marginRight: "10px" }}
            /> */}
            <Image src="/assets/logo.png" size="mini" circular />
            Reactivities
          </Menu.Item>
          <Menu.Item header as={NavLink} to="/activities" name="Activities">
            <Menu.Item
              header
              as={NavLink}
              to="/errors"
              name="Errors"
            ></Menu.Item>
          </Menu.Item>
          <Menu.Item>
            <Button
              as={Link}
              to="/createActivity"
              positive
              content="Create Activity"
              style={{ marginRight: "150px" }}
            />
          </Menu.Item>
          {/* <Menu.Item>
            <Button content="Forms" style={{ marginRight: "10px" }}></Button>
            <Button content="Employoe" style={{ marginRight: "10px" }}></Button>
            <Button content="Services" style={{ marginRight: "10px" }}></Button>
          </Menu.Item> */}
          <Menu.Item header>
            <Image
              src="/assets/user.png"
              size="mini"
              circular
              style={{ marginLeft: "50px" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
}
