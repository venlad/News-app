// importing dependencies and other files and components

import React from "react";
import { Layout} from "antd";
import Appbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import AppFooter from "./components/Footer";
import './styles.css'

const { Content } = Layout;

//App Component Begins

export default function App() {

  return (
    <Layout className="layout">

      {/* Navbar */}
      <Appbar />

      {/* Main */}
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          Content
          <CardContainer />
        </div>
      </Content>

      {/* Footer */}
      <AppFooter />
    </Layout>
  );
}
