import Head from 'next/head'
import axios from 'axios'
import { Image } from 'antd'
import { Button, Row, Col, Layout, Menu, Popover, BackTop, Switch, Card, Dropdown} from 'antd'
import blackBg from '../public/black-bg.png'
import gb1 from '../public/gb1.png'
import gb2 from '../public/gb2.png'
import gb3 from '../public/gb3.png'
import gb4 from '../public/gb4.png'
import gb5 from '../public/gb5.png'
import circlePurple from '../public/circle-purple.png'
import triangleBlue from '../public/triangle-blue.png'
import starGreen from '../public/star-green.png'
import roundPink from '../public/round-pink.png'
import { LayoutOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
const menu = (
  <Menu>
    <Menu.Item>
      <a href="/#coding">
        💻 Coding
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/#design">
        🎨 Design
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="/#random-works">
        🍭 Random
      </a>
    </Menu.Item>
  </Menu>
);
export default function Design(){
  return (
    <div className="other-page">
      {/* Naviagtion Bar */}
      <Layout>
        <Header style={{ zIndex: 20, width: '100%' }}>
          <div className="logo"><a href="/">ZUMO</a></div>
          <Menu mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key="1"><a href="#about">About Me</a></Menu.Item>
            <Dropdown overlay={menu} placement="bottomCenter">
            <Menu.Item key="2"><a>My Works</a></Menu.Item>
            </Dropdown>
            <Menu.Item key="3"><a href="#gallery">Gallery</a></Menu.Item>
            <Menu.Item key="4"><a href="#contact">Contact Me</a></Menu.Item>
          </Menu>
        </Header>
      </Layout>
      
      <div className="otherpage-header">
        <Image src={blackBg.src} preview={false} className="other-main-image" />
          <div className="left-top"><Image src={starGreen.src} preview={false} width={200} height={200} /></div>
          <div className="left-bottom" ><Image src={triangleBlue.src} preview={false} width={350} height={300} /></div>
          <div className="right-top"><Image src={circlePurple.src} preview={false} width={300} height={300} /></div>
          <div className="right-bottom"><Image src={roundPink.src} preview={false} width={300} height={300} /></div>
        <div className="otherpage-overlay">
          <div className="otherpage-banner">
            <span className="otherpage-title">Design Projects</span>
            <div className="otherpage-description">
              fl;kdl;gkdlckjgkflgjklfdjgklrdjgkl;
            </div>
            <Row style={{margin:"auto"}}>
            <div className="button-container">
              <Button className="otherpage-button button-green">
                <a href="#webpage"><LayoutOutlined /></a>
              </Button>
              <div className="button-description">Web design</div>
            </div>
            {/* <div className="button-container">
              <Button className="otherpage-button button-yellow">
                <a href="#presentation"><FundProjectionScreenOutlined /></a>
              </Button>
              <div className="button-description">Presentation</div>
            </div> */}
            </Row>
          </div>
        </div>
      </div>
      <div className="contentbox1" id="webpage">
        <div className="content-number">01/02</div> 
        <div className="content-header">GEEKLY BACON</div>
        <div className="content-subheader">design project</div>
        <div className="content-description">webwebwebwebweb for devedevdvevdevdve
        fgjflkhpytfohioginkl;vsptfid[pghfklvbkh
        dfgokdtfpohgifghoglfknlbvm,cl.nmvb.,mcx
        splkfrl;skerfl;krl;kl;k;lkrf;ldkf;lrkdf;lskf;l</div>
        <Image.PreviewGroup>
        <Row justify="center" align="top">
          <Col span={6} style={{textAlign:"center"}}><Image src={gb1.src} width={240} height={416} /></Col>
          <Col span={6} style={{textAlign:"center"}}><Image src={gb2.src} width={240} height={353} /></Col>
          <Col span={6} style={{textAlign:"center"}}><Image src={gb3.src} width={240} height={500} /></Col>
          <Col span={6} style={{textAlign:"center"}}>
          <Image src={gb4.src} width={240} height={184} />
          <Image src={gb5.src} width={240} height={184} style={{marginTop: "20px"}}/>
          </Col>
        </Row>
        </Image.PreviewGroup>
      </div>

      <div className="contentbox2" id="presentation">
        <div className="content-number">02/02</div> 
        <div className="content-header">This web</div>
        <div className="content-subheader">design project</div>
        <div className="content-description">webwebwebwebweb for devedevdvevdevdve
        fgjflkhpytfohioginkl;vsptfid[pghfklvbkh
        dfgokdtfpohgifghoglfknlbvm,cl.nmvb.,mcx
        splkfrl;skerfl;krl;kl;k;lkrf;ldkf;lrkdf;lskf;l</div>
      </div>
      
      {/* <div className="contentbox2" id="presentation">
        <div className="content-number">02/02</div> 
        <div className="content-header">Presentations</div>
        <div className="content-subheader">design project</div>
        <div className="content-description">webwebwebwebweb for devedevdvevdevdve
        fgjflkhpytfohioginkl;vsptfid[pghfklvbkh
        dfgokdtfpohgifghoglfknlbvm,cl.nmvb.,mcx
        splkfrl;skerfl;krl;kl;k;lkrf;ldkf;lrkdf;lskf;l</div>
        <Row>
        <Image.PreviewGroup>
          <Image src={gb4.src} width={240} height={184} className="geekly-bacon"/>
          <Image src={gb5.src} width={240} height={184} className="geekly-bacon"/>
          </Image.PreviewGroup>
        </Row>
      </div> */}

      <footer>
        <a href="https://github.com/phornphatch" target="_blank">Coded by ZUMO 😃</a>
      </footer>
    </div>
  )
}