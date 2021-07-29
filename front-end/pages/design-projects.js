import Head from 'next/head'
import axios from 'axios'
import { Image } from 'antd'
import { Button, Row, Col, Layout, Menu, Popover, BackTop, Switch, Card} from 'antd'
import blackBg from '../public/black-bg.png'
import gb1 from '../public/gb1.png'
import gb2 from '../public/gb2.png'
import gb3 from '../public/gb3.png'
import gb4 from '../public/gb4.png'
import gb5 from '../public/gb5.png'
import { LayoutOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
export default function Design(){
  return (
    <div className="other-page">
      {/* Naviagtion Bar */}
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "rgba(0, 0, 0, 0)" }}>
          <div className="logo" style={{color: 'white'}}><a href={`/`}>ZUMO</a></div>
          <Menu mode="horizontal" defaultSelectedKeys={['0']} style={{backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <Menu.Item key="1"><a href={"/#about"} style={{color: 'white'}}>About Me</a></Menu.Item>
            <Menu.Item key="2"><a href={"/#project"} style={{color: 'white'}}>Projects</a></Menu.Item>
            <Menu.Item key="3"><a href={"/gallery"} style={{color: 'white'}}>Gallery</a></Menu.Item>
          <Menu.Item key="4"><a href={"/#contact"} style={{color: 'white'}}>Contact Me</a></Menu.Item>
          </Menu>
        </Header>
      </Layout>
      
      <div className="otherpage-header">
        <Image src={blackBg.src} preview={false} className="other-main-image" />
        <div className="otherpage-overlay">
          <div className="otherpage-banner">
            <span className="otherpage-title">Design Projects</span>
            <div className="otherpage-description">
              fl;kdl;gkdlckjgkflgjklfdjgklrdjgkl;
            </div>
            <Row style={{margin:"auto"}}>
            <div className="button-container">
              <Button className="otherpage-button button-chatbot">
                <a href="#webpage"><LayoutOutlined /></a>
              </Button>
              <div className="button-description">Web design</div>
            </div>
            <div className="button-container">
              <Button className="otherpage-button button-science">
                <a href="#presentation"><FundProjectionScreenOutlined /></a>
              </Button>
              <div className="button-description">Presentation</div>
            </div>
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
        <Row>
        <Image.PreviewGroup>
          <Image src={gb1.src} width={240} height={416} className="geekly-bacon"/>
          <Image src={gb2.src} width={240} height={353} className="geekly-bacon"/>
          <Image src={gb3.src} width={240} height={500} className="geekly-bacon"/>
          <Image src={gb4.src} width={240} height={184} className="geekly-bacon"/>
          <Image src={gb5.src} width={240} height={184} className="geekly-bacon"/>
          </Image.PreviewGroup>
        </Row>
      </div>
      <div className="contentbox2" id="presentation">
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
      </div>

      <footer>
          Coded by ZUMO
      </footer>
    </div>
  )
}