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
import journey from '../public/journey.png'
import randomwork from '../public/random-work.png'
import designproject from '../public/designproject.png'
import bot1 from '../public/bot1.png'
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
              These are my design works. They include web design, slide deck design and infographic.
              Actually, this site is also a custom made design by me 🖐
              <br/><br/>
              All my designs are produced with Figma and Procreate.
            </div>
            <Row style={{margin:"auto"}}>
            <div className="button-container">
              <Button className="otherpage-button button-green">
                <a href="#webpage"><LayoutOutlined /></a>
              </Button>
              <div className="button-description">Web design</div>
            </div>
            </Row>
          </div>
        </div>
      </div>
      <div className="contentbox1" id="webpage">
        <div className="content-number">01/02</div> 
        <div className="content-topic">GEEKLY BACON</div>
        <div className="content-subtopic">Web Design Project</div>
        <div className="content-description">
          My first project is a web application named "GEEKLY BACON". Actually, I also built it with Ruby on Rails.
          It is a work in progress so I only showcase the design here. 
          <br/><br/>
          GEEKLY BACON is a web application that my BF and I built for developers to share there Thai technical blogs.
          Because most interesting and insightful contents are mostly in English and they are not accessible by all Thais.
          We would like to digest and translate technical blogs, newsletters, and other interesting articles related to software development
          so they are more accessible to Thais.
          <br /><br/>
          The design for this website aims for simplicity and readability.
        </div>
        <Image.PreviewGroup>
        <Row justify="center" align="top" gutter={16}>
          <Col span={5} style={{textAlign:"center"}}><Image src={gb1.src} /></Col>
          <Col span={5} style={{textAlign:"center"}}><Image src={gb2.src} /></Col>
          <Col span={5} style={{textAlign:"center"}}><Image src={gb3.src} /></Col>
          <Col span={5} style={{textAlign:"center"}}>
          <Image src={gb4.src} />
          <Image src={gb5.src} style={{marginTop: "20px"}}/>
          </Col>
        </Row>
        </Image.PreviewGroup>
      </div>

      <div className="contentbox2" id="presentation">
        <div className="content-number">02/02</div> 
        <div className="content-header">MY PERSONAL SITE</div>
        <div className="content-subheader">Web Design Project</div>
        <div className="content-description">
          I designed this website to my liking. It is inspired by multiple references and mixed &amp; matched by me.
          It is mainly for me to hone mutiple skills such as graphic design, coding, and etc. 
          All components are designed or hand-drawn on Figma and Procreate.
          <br/><br/>
          🎨 Thank you Figma and Procreate! 👏
        </div>
        <Image.PreviewGroup>
        <Row justify="center" align="top">
          <Col span={10} style={{textAlign:"center"}}><Image src={journey.src} /></Col>
          <Col span={10} style={{textAlign:"center"}}><Image src={randomwork.src} /></Col>
          <Col span={10} style={{textAlign:"center"}}><Image src={bot1.src} height={350}/></Col>
          <Col span={10} style={{textAlign:"center"}}><Image src={designproject.src} height={350} /></Col>
        </Row>
        </Image.PreviewGroup>
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