/* eslint-disable no-unreachable */
import React from "react";
import { Button, Container, Menu, Image } from "semantic-ui-react";
import { useStore } from "../stores/store";
//import { MyFileBrowser } from './MyFileBrowser';

export default function NavBar() {
  const { activityStore } = useStore();
  const { openForm } = activityStore;

  return (
    <>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            {/* <img
              src="/assets/paie_logo.jpg"
              alt="logo"
              style={{ marginRight: "10px" }}
            /> */}
            <Image src="/assets/paie_logo.jpg" size="tiny" circular />
            PAIE Digital Management Solution
          </Menu.Item>
          {/* <Menu.Item name="DMS" /> */}
          <Menu.Item>
            <Button
              onClick={()=>openForm()}
              positive
              content="Create Work Order"
              style={{ marginRight: "150px" }}
            />
          </Menu.Item>
          <Menu.Item>
            <Button content="Forms" style={{ marginRight: "10px" }}></Button>
            <Button content="Employoe" style={{ marginRight: "10px" }}></Button>
            <Button content="Services" style={{ marginRight: "10px" }}></Button>
          </Menu.Item>
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
