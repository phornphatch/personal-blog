import { Layout, Menu, Dropdown } from 'antd'

const { Header } = Layout

export function Navbar(){
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/#coding">
          💻 Coding
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/design-projects">
          🎨 Design
        </a>
      </Menu.Item>
      <Menu.Item>
        <a href="/other-works">
          🍭 Random
        </a>
      </Menu.Item>
    </Menu>
  );
  
  return (
    <Layout>
    <Header style={{ zIndex: 20, width: '100%' }}>
      <div className="logo"><a href="/">ZUMO</a></div>
      <Menu mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item key="1"><a href="/#about">About Me</a></Menu.Item>
        <Dropdown overlay={menu} placement="bottomCenter">
        <Menu.Item key="2"><a>My Works</a></Menu.Item>
        </Dropdown>
        <Menu.Item key="3"><a href="/#gallery">Gallery</a></Menu.Item>
        <Menu.Item key="4"><a href="/#contact">Contact Me</a></Menu.Item>
      </Menu>
    </Header>
  </Layout>
  )
}
