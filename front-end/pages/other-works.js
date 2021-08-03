import Head from 'next/head'
import axios from 'axios'
import { Button, Row, Col, Layout, Menu, Popover, BackTop, Switch, Card, Image, Dropdown} from 'antd'
import blackBg from '../public/black-bg.png'
import sakura from '../public/sakura.jpg'
import diyramen from '../public/diyramen.jpg'
import fatramen from '../public/fatramen.jpg'
import cycling from '../public/cycling.jpg'
import walking from '../public/walking.jpg'
import idcard from '../public/idcard.PNG'
import hotpot from '../public/hotpot.png'
import market from '../public/market.PNG'
import ais from '../public/ais.jpeg'
import brand from '../public/brand.jpeg'
import coke from '../public/coke.jpeg'
import oishi from '../public/oishi.jpeg'
import mk from '../public/mk.jpeg'
import paper from '../public/paper.png'
import acsposter from '../public/ACSposter.png'
import bot1 from '../public/bot1.png'
import bot2 from '../public/bot2.png'
import bot3 from '../public/bot3.png'
import bot4 from '../public/bot4.png'
import bot5 from '../public/bot5.png'
import bot6 from '../public/bot6.png'
import bot7 from '../public/bot7.png'
import bot8 from '../public/bot8.png'
import { WechatOutlined, YoutubeOutlined, ExperimentOutlined, VideoCameraOutlined } from '@ant-design/icons';
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
export default function Other(){
  return (
    <div className="other-page">


      {/* Naviagtion Bar */}
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
      
      <div className="otherpage-header">
        <Image src={blackBg.src} preview={false} className="other-main-image" />
        <div className="otherpage-overlay">
          <div className="otherpage-banner">
            <span className="otherpage-title">Random Works</span>
            <div className="otherpage-description">
              fl;kdl;gkdlckjgkflgjklfdjgklrdjgkl;
            </div>
            <Row style={{margin:"auto"}}>
            <div className="button-container">
              <Button className="otherpage-button button-green">
                <a href="#chatbot"><WechatOutlined /></a>
              </Button>
              <div className="button-description">Chatbot</div>
            </div>
            <div className="button-container">
              <Button className="otherpage-button button-orange">
                <a href="#science"><ExperimentOutlined /></a>
              </Button>
              <div className="button-description">Chatbot</div>
            </div>
            <div className="button-container">
              <Button className="otherpage-button button-yellow">
                <a href="#ads"><VideoCameraOutlined /></a>
              </Button>
              <div className="button-description">Chatbot</div>
            </div>
            <div className="button-container">
              <Button className="otherpage-button button-purple">
                <a href="#youtube"><YoutubeOutlined /></a>
              </Button>
              <div className="button-description">Chatbot</div>
            </div>
            </Row>
          </div>
        </div>
      </div>

      
      <div className="contentbox1" id="chatbot">
        <div className="content-number">01/04</div>
        <Row> 
          <Col span={12}>
          <div className="content-header">BioPBSbotnoi</div>
          <div className="content-subheader">Chatbot for my ex-company</div> 
          <Col><div className="content-description">Chatbot for my ex-cghghghg hghghghghghg  hhghghompanf
          adsd sdsa dasdsa dasdvdsl vsadssd assdaaa aaaaaaa aaghg hghghgh  aaaaaghg hghghghg hghghghgaaaagh
          adsdasda  sdasda sdddd dddd ddddddd dddsada sdasdkse hghg hghghgh ghg hrfofjy</div>
          </Col>
          </Col>
          <Col span={12}>
            <Image src={bot1.src} width={350} preview={false} />
          </Col>
        </Row>
          <Row>
          <div className="other-topic1" style={{marginLeft: "50px"}}>Example</div>
          </Row>
          <Image.PreviewGroup>
          <Row justify="center" align="top">
            <Col span={5} style={{padding:"5px"}}><Image src={bot2.src}  /></Col>
            <Col span={5} style={{padding:"5px"}}><Image src={bot3.src}  /></Col>
            <Col span={5} style={{padding:"5px"}}><Image src={bot4.src}  /></Col>
            <Col span={5} style={{padding:"5px"}}><Image src={bot5.src}  /></Col>
            <Col span={5} style={{padding:"5px"}}><Image src={bot6.src}  /></Col>
            <Col span={5} style={{padding:"5px"}}><Image src={bot7.src}  /></Col>
            <Col span={5} style={{padding:"5px"}}><Image src={bot8.src}  /></Col>
          </Row>
          </Image.PreviewGroup>
        
      </div>

      <div className="contentbox2" id="science">
      <div className="content-number">02/04</div> 
        <Row>
          <Col span={12} style={{paddingLeft:"50px"}} >
          <div className="content-header">Scientific research</div>
          <div className="content-subheader">Chatbot for my ex-company</div>
          <div className="content-description">Chatbot for my ex-cghghghg hghghghghghg  hhghghompanf
          adsd sdsa dasdsa dasdvdsl vsadssd assdaaa aaaaaaa aaghg hghghgh  aaaaaghg hghghghg hghghghgaaaagh
          adsdasda  sdasda sdddd dddd ddddddd dddsada sdasdkse hghg hghghgh ghg hrfofjy
            <Row>
            <div className="content-subheader">Bachelor's degree project</div>
            <li>Fabrication of a chitin/chitosan hydrocolloid wound dressing and evaluation of its bioactive properties</li>
            <Button className="download-button"><a href="https://www.researchgate.net/publication/323495785_Fabrication_of_a_chitinchitosan_hydrocolloid_wound_dressing_and_evaluation_of_its_bioactive_properties" target="_blank">DOWNLOAD PAPER</a></Button>
            </Row>
          </div>
          </Col>
          <Col span={12} style={{margin:"auto",textAlign:"center"}}>
            <Image src={paper.src} height={445} width={414} />
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{margin:"auto",textAlign:"center"}}>
            <Image src={acsposter.src} width={414} />
          </Col>
          <Col span={12} style={{paddingTop:"50px"}} >
          <div className="content-subheader">Master's degree project</div>
          <div className="content-description">
            <Row>
            <li>Synthesis and electrochemical properties of polybenzoxazine-derived nanoporous carbon electrode materials for supercapacitors</li>
            <Button className="download-button"><a href="/ACSposter.pdf" download>DOWNLOAD POSTER</a></Button>
            </Row>
          </div>
          </Col>
          
        </Row>
      </div>

      <div className="contentbox3" id="ads">
        <div className="content-number">03/04</div> 
          <div className="content-header">Ads</div>
          <div className="content-subheader">acting</div>
          <div className="content-description">Chatbot for my ex-cghghghghghghghghghghhghghompanf
          adsdsdsadasdsadasdvdslvsadssdassdaaaaaaaaaaaaghghghghghaaaaaghghghghghghghghghgaaaagh
          adsdasdasdasdasddddddddddddddddddsadasdasdksephghghghghghghghrfofjy</div>
          <div className="grid">
            <a href="https://www.youtube.com/watch?v=cszQdR4EqNc&list=LL&index=22" className="otherpage-card" target="_blank">
              <Image src={ais.src} />
              <h3>AIS</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=93H26ozIaaY&list=LL&index=20" className="otherpage-card" target="_blank">
              <Image src={mk.src} />
              <h3>MK Restaurants</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=1LaKmW4oH1w&list=LL&index=15" className="otherpage-card" target="_blank">
              <Image src={coke.src} />
              <h3>Coke</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=f3MEeIDqE24&list=LL&index=18" className="otherpage-card" target="_blank">
            <Image src={oishi.src} />
            <h3>Oishi</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=kMWpu3JP2aY" className="otherpage-card" target="_blank">
            <Image src={brand.src} />
            <h3>Brands World</h3>
            </a>
          </div>
      </div>
      
      <div className="contentbox4" id="youtube">
        <div className="content-number">04/04</div> 
            <div className="content-header">Youtube</div>
            <div className="content-subheader">youtuber- editor</div>
            <div className="content-description">Chatbot for my ex-cghghghghghghghghghghhghghompanf
            adsdsdsadasdsadasdvdslvsadssdassdaaaaaaaaaaaaghghghghghaaaaaghghghghghghghghghgaaaagh
            adsdasdasdasdasddddddddddddddddddsadasdasdksephghghghghghghghrfofjy</div>
        <div className="grid">
            <a href="https://www.youtube.com/watch?v=G8Wg1kjqLnk&t=418s" className="otherpage-card" target="_blank">
              <Image src={sakura.src} />
              <h3>🌺 Japanese Park </h3>
            </a>
            <a href="https://www.youtube.com/watch?v=jymVmRejosg&t=1270s" className="otherpage-card" target="_blank">
              <Image src={walking.src} />
              <h3>🚶‍♀️ Walking in Helsinki </h3>
            </a>
            <a href="https://www.youtube.com/watch?v=SIJAXRfvZZs&t=133s" className="otherpage-card" target="_blank">
              <Image src={diyramen.src} />
              <h3>👩‍🍳 DIY Ramen</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=vOSJxd5KxyU&t=400s" className="otherpage-card" target="_blank">
              <Image src={cycling.src} />
              <h3>🚴‍♂️ Cycling tour</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=GaTraQXkq8c&t=7s" className="otherpage-card" target="_blank">
              <Image src={idcard.src} />
              <h3>😄 ID card</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=nzR30huC6Z0" className="otherpage-card" target="_blank">
              <Image src={fatramen.src} />
              <h3>🍜 Fat Ramen</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=bYSDlENcrW4&t=5s" className="otherpage-card" target="_blank">
              <Image src={hotpot.src} />
              <h3>🍲 Hotpot Shabu</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=_oQCArFTtEc&t=4s" className="otherpage-card" target="_blank">
            <Image src={market.src} />
            <h3>🥗 Finnish Market</h3>
          </a>
          </div>
      </div>
      <footer style={{color:"black"}}>
        <a href="https://github.com/phornphatch" target="_blank">Coded by ZUMO 😃</a>
      </footer>
    </div>
  )
}