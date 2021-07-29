import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import { Button, Row, Col, Layout, Menu, Popover, BackTop, Switch, Card} from 'antd'
import blackBg from '../public/black-bg.png'
import sakura from '../public/sakura.jpg'
import diyramen from '../public/diyramen.jpg'
import fatramen from '../public/fatramen.jpg'
import cycling from '../public/cycling.jpg'
import walking from '../public/walking.jpg'
import ais from '../public/ais.jpeg'
import brand from '../public/brand.jpeg'
import coke from '../public/coke.jpeg'
import oishi from '../public/oishi.jpeg'
import mk from '../public/mk.jpeg'
import paper from '../public/paper.png'
import { WechatOutlined, YoutubeOutlined, ExperimentOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
export default function Other(){
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
        <Image src={blackBg} preview={false} className="other-main-image" />
        <div className="otherpage-overlay">
          <div className="otherpage-banner">
            <span className="otherpage-title">Random Works</span>
            <div className="otherpage-description">
              fl;kdl;gkdlckjgkflgjklfdjgklrdjgkl;
            </div>
            <Row style={{margin:"auto"}}>
            <div className="button-container">
              <Button className="otherpage-button button-chatbot">
                <a href="#chatbot"><WechatOutlined /></a>
              </Button>
              <div className="button-description">Chatbot</div>
            </div>
            <div className="button-container">
              <Button className="otherpage-button button-science">
                <a href="#science"><ExperimentOutlined /></a>
              </Button>
              <div className="button-description">Chatbot</div>
            </div>
            <div className="button-container">
              <Button className="otherpage-button button-ads">
                <a href="#ads"><VideoCameraOutlined /></a>
              </Button>
              <div className="button-description">Chatbot</div>
            </div>
            <div className="button-container">
              <Button className="otherpage-button button-youtube">
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
        <div className="content-header">BioPBSbotnoi</div>
        <div className="content-subheader">Chatbot for my ex-company</div>
        <div className="content-description">Chatbot for my ex-cghghghghghghghghghghhghghompanf
        adsdsdsadasdsadasdvdslvsadssdassdaaaaaaaaaaaaghghghghghaaaaaghghghghghghghghghgaaaagh
        adsdasdasdasdasddddddddddddddddddsadasdasdksephghghghghghghghrfofjy</div>
      </div>
      <div className="contentbox2" id="science">
      <div className="content-number">02/04</div> 
       
        <Row>
          <Col span={12} style={{paddingLeft:"50px"}} >
          <div className="content-header">Scientific research</div>
          <div className="content-subheader">Chatbot for my ex-company</div>
          <div className="content-description">Chatbot for my ex-cghghghghghgh
          adsdsdsadasdsadasdvdslvsadssdassdaaaaaaaaaaaaghghghghg
          adsdasdasdasdasddddddddddddddddddsadasdasdks
          
            <li>Fabrication of a chitin/chitosan hydrocolloid wound dressing and evaluation of its bioactive properties</li>
            Master's degree project
            <li>Fabrication of a chitin/chitosan hydrocolloid wound dressing and evaluation of its bioactive properties</li>
            <Button className="download-button"><a href="https://www.researchgate.net/publication/323495785_Fabrication_of_a_chitinchitosan_hydrocolloid_wound_dressing_and_evaluation_of_its_bioactive_properties">DOWNLOAD</a></Button>
          </div>
          </Col>
          <Col span={12} style={{margin:"auto",textAlign:"center"}}>
            <Image src={paper} height={445} width={414} />
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
            <a href="https://www.youtube.com/watch?v=cszQdR4EqNc&list=LL&index=22" className="otherpage-card">
              <Image src={ais} />
              <h3>AIS</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=93H26ozIaaY&list=LL&index=20" className="otherpage-card">
              <Image src={mk} />
              <h3>MK Restaurants</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=1LaKmW4oH1w&list=LL&index=15" className="otherpage-card">
              <Image src={coke} />
              <h3>Coke</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=f3MEeIDqE24&list=LL&index=18" className="otherpage-card">
            <Image src={oishi} />
            <h3>Oishi</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=kMWpu3JP2aY" className="otherpage-card">
            <Image src={brand} />
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
            <a href="https://www.youtube.com/watch?v=G8Wg1kjqLnk&t=418s" className="otherpage-card">
              <Image src={sakura} />
              <h3>🌺 Japanese Park </h3>
            </a>
            <a href="https://www.youtube.com/watch?v=jymVmRejosg&t=1270s" className="otherpage-card">
              <Image src={walking} />
              <h3>🚶‍♀️ Walking in Helsinki </h3>
            </a>
            <a href="https://www.youtube.com/watch?v=SIJAXRfvZZs&t=133s" className="otherpage-card">
              <Image src={diyramen} />
              <h3>👩‍🍳 DIY Ramen</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=vOSJxd5KxyU&t=400s" className="otherpage-card">
              <Image src={cycling} />
              <h3>🚴‍♂️ Cycling tour</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=GaTraQXkq8c&t=7s" className="otherpage-card">
              <Image src={blackBg} />
              <h3>😄 ID card</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=nzR30huC6Z0" className="otherpage-card">
              <Image src={fatramen} />
              <h3>🍜 Fat Ramen</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=bYSDlENcrW4&t=5s" className="otherpage-card">
              <Image src={blackBg} />
              <h3>🍲 Hotpot Shabu</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=_oQCArFTtEc&t=4s" className="otherpage-card">
            <Image src={blackBg} />
            <h3>🥗 Finnish Market</h3>
          </a>
          </div>
      </div>
      <footer>
          Coded by ZUMO
      </footer>
    </div>
  )
}