import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import Header from "@/pages/Basic/Header";
import MySider from "@/pages/Basic/Sider";
import Footer from "@/pages/Basic/Footer";

const { Content } = Layout;

// import './BasicLayout.scss';
interface Iprops {
  value?: number
  children?: any
}

const App: React.FC<Iprops> = ({children}) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <MySider />
        <Content>
          {children}
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default App;