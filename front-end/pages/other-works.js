import { Button, Row, Col, Layout, Menu, Card, Image, Dropdown } from 'antd'
import blackBg from '../public/black-bg.png'
import circlePurple from '../public/circle-purple.png'
import triangleBlue from '../public/triangle-blue.png'
import starGreen from '../public/star-green.png'
import roundPink from '../public/round-pink.png'
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
import { WechatOutlined, YoutubeOutlined, ExperimentOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Navbar } from '../components/Navbar'

const { Header } = Layout

export default function Other () {
  return (
    <div className="other-page">

      <Navbar />

      <div className="otherpage-header">
        <Image src={blackBg.src} preview={false} className="other-main-image" />
          <div className="left-top"><Image src={starGreen.src} preview={false} width={200} height={200} /></div>
          <div className="left-bottom" ><Image src={triangleBlue.src} preview={false} width={350} height={300} /></div>
          <div className="right-top"><Image src={circlePurple.src} preview={false} width={300} height={300} /></div>
          <div className="right-bottom"><Image src={roundPink.src} preview={false} width={300} height={300} /></div>
        <div className="otherpage-overlay">
          <div className="otherpage-banner">
            <span className="otherpage-title">Random Works</span>
            <div className="otherpage-description">
              All my other works are put here to display my broad set of skills.
              Scientific researches, acting, video editing, designing and other type of coding skills than web development.
              I have gained various type of experiences from these works
              and I will continue doing them to keep develop new skillsets.
            </div>
            <Row style={{ margin: 'auto' }}>
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
              <div className="button-description">Science</div>
            </div>
            <div className="button-container">
              <Button className="otherpage-button button-yellow">
                <a href="#ads"><VideoCameraOutlined /></a>
              </Button>
              <div className="button-description">Acting</div>
            </div>
            <div className="button-container">
              <Button className="otherpage-button button-purple">
                <a href="#youtube"><YoutubeOutlined /></a>
              </Button>
              <div className="button-description">Editing</div>
            </div>
            </Row>
          </div>
        </div>
      </div>

      <div className="contentbox1" id="chatbot">
        <div className="content-number">01/04</div>
        <Row>
          <Col span={15}>
          <div className="content-topic">BioPBSbotnoi</div>
          <div className="content-subtopic">Decrease Company Cost Up to 1,749,380 Baht/Year</div>
          <Col>
            <div className="content-description">
              During my time as a technical service engineer at PTTMCC,
              I was responsible for answering technical questions and providing related information such as spec-sheet.
              I noticed that in multiple occasions, our team members are bombarded with requests and questions from our clients.
              All of our information is on our laptops but it is not easy to find and sometimes the laptop is not even accessible.
              In addition, sometimes our sale team is on site with the client in a different timezone and their requests can not be handled immediately
              resulted in an opportunity loss. So I decided to build a chatbot to answer the frequently asked questions
              and to provide necessary documents for downloading and instantly getting back to the clients.
              <br></br><br></br>
              Our staffs just only type the keyword of information they need
              in Line application. BioPBSbotnoi will provide them the required information immediately
              that can reduce the waiting time, reduce opportunity loss,
              increase work efficiency and also handle with customer's questions professionally.
            <br></br> <br></br>
            This project use dialogflow as the main service to provide Natural Language Processing (NLP) capability
            which enable the user to input their queries in a more flexible manner.
            </div>
          </Col>
          </Col>
          <Col span={9} style={{ marginTop: '100px', paddingRight: '50px' }}>
            <Image src={bot1.src} />
          </Col>
        </Row>
          <Row>
          <div className="highlight-text" style={{ marginLeft: '50px' }}>Example</div>
          </Row>
          <Image.PreviewGroup>
          <Row justify="center" align="top">
            <Col span={5} style={{ padding: '5px' }}><Image src={bot2.src} /></Col>
            <Col span={5} style={{ padding: '5px' }}><Image src={bot3.src} /></Col>
            <Col span={5} style={{ padding: '5px' }}><Image src={bot4.src} /></Col>
            <Col span={5} style={{ padding: '5px' }}><Image src={bot5.src} /></Col>
            <Col span={5} style={{ padding: '5px' }}><Image src={bot6.src} /></Col>
            <Col span={5} style={{ padding: '5px' }}><Image src={bot7.src} /></Col>
            <Col span={5} style={{ padding: '5px' }}><Image src={bot8.src} /></Col>
          </Row>
          </Image.PreviewGroup>

      </div>

      <div className="contentbox2" id="science">
      <div className="content-number">02/04</div>
        <Row>
          <Col span={12} style={{ paddingLeft: '50px' }} >
          <div className="content-topic">Scientific Researches</div>
          <div className="content-subtopic">My Bachelor's and Master's Research Projects</div>
          <div className="content-description">
            I had worked on a couple interesting projects during my bachelor's and master's degree.
            <Row>
            <div className="content-subtopic">
              <br/>Bachelor's degree project
            </div>
            <div>
            <br/>
              I chose a project related to biopolymer whose goal is to synthesize a wound dressing which will degrade on the wound, does not required peeling off and has wound healing capability.
              Because most of conventional wound dressings would stick to the wound causing more pain while peeling off.
              This wound dressing has also high water absorption, enzymatic degradation and antibacterial activity which is perfect for burning wound.
              <br/><br/>
              This project is published as a scientific paper which can be downloaded here.
            </div>
            <li>Fabrication of a chitin/chitosan hydrocolloid wound dressing and evaluation of its bioactive properties</li>
            <Button className="download-button"><a href="https://www.researchgate.net/publication/323495785_Fabrication_of_a_chitinchitosan_hydrocolloid_wound_dressing_and_evaluation_of_its_bioactive_properties" target="_blank" rel="noreferrer">DOWNLOAD PAPER</a></Button>
            </Row>
          </div>
          </Col>
          <Col span={12} style={{ margin: 'auto', textAlign: 'center' }}>
            <Image src={paper.src} height={445} width={414} />
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ margin: 'auto', textAlign: 'center' }}>
            <Image src={acsposter.src} width={414} />
          </Col>
          <Col span={12} style={{ paddingTop: '50px' }} >
          <div className="content-subtopic">Master's degree project</div>
            <div className="content-description">
              I chose a different type of project for my master's degree. I worked more in the field of physics.
              I have learn about a new and interesting kind of polymer named "Polybenzoxazine".
              It is literally a rocket science (It is used in a tip of a rocket). I have developed it to be porous to make it store more ions.
              This material will be used as a component of a supercapacitor and
              it will help the capacitor to have high specific power, quick charging time, long life cycle and wide working temperature range.
              <br/><br/>
              This project was exhibited in 255th American Chemical Society (ACS) National Meeting 2018 at New Orleans, LA.
              <li>Synthesis and electrochemical properties of polybenzoxazine-derived nanoporous carbon electrode materials for supercapacitors</li>
              <Button className="download-button"><a href="/ACSposter.pdf" download>DOWNLOAD POSTER</a></Button>
            </div>
          </Col>
        </Row>
      </div>

      <div className="contentbox3" id="ads">
        <div className="content-number">03/04</div>
          <div className="content-topic">Acting</div>
          <div className="content-subtopic">Advertisement</div>
          <div className="content-description">
            During my college years, I gained experiences in acting by being part of advertisements both still images and videos.
            These are some of my works that you can watch right now.
          </div>
          <div className="grid">
            <a href="https://www.youtube.com/watch?v=cszQdR4EqNc&list=LL&index=22" className="otherpage-card" target="_blank" rel="noreferrer">
              <Image src={ais.src} />
              <h3>AIS</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=93H26ozIaaY&list=LL&index=20" className="otherpage-card" target="_blank" rel="noreferrer">
              <Image src={mk.src} />
              <h3>MK Restaurants</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=1LaKmW4oH1w&list=LL&index=15" className="otherpage-card" target="_blank" rel="noreferrer">
              <Image src={coke.src} />
              <h3>Coke</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=f3MEeIDqE24&list=LL&index=18" className="otherpage-card" target="_blank" rel="noreferrer">
            <Image src={oishi.src} />
            <h3>Oishi</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=kMWpu3JP2aY" className="otherpage-card" target="_blank" rel="noreferrer">
            <Image src={brand.src} />
            <h3>Brands World</h3>
            </a>
          </div>
      </div>

      <div className="contentbox4" id="youtube">
        <div className="content-number">04/04</div>
            <div className="content-topic">Video Editing</div>
            <div className="content-subtopic">Youtube</div>
            <div className="content-description">
              Since I moved to Finland, I created a Facebook page and a Youtube channel to share and review interesting things and places in the country.
              I have worked a lot on my editing skill and all of my videos are edited on a single iPad.
            </div>
        <div className="grid">
            <a href="https://www.youtube.com/watch?v=G8Wg1kjqLnk&t=418s" className="otherpage-card" target="_blank" rel="noreferrer">
              <Image src={sakura.src} />
              <h3>🌺 Japanese Park </h3>
            </a>
            <a href="https://www.youtube.com/watch?v=jymVmRejosg&t=1270s" className="otherpage-card" target="_blank" rel="noreferrer">
              <Image src={walking.src} />
              <h3>🚶‍♀️ Walking in Helsinki </h3>
            </a>
            <a href="https://www.youtube.com/watch?v=SIJAXRfvZZs&t=133s" className="otherpage-card" target="_blank" rel="noreferrer">
              <Image src={diyramen.src} />
              <h3>👩‍🍳 DIY Ramen</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=vOSJxd5KxyU&t=400s" className="otherpage-card" target="_blank" rel="noreferrer">
              <Image src={cycling.src} />
              <h3>🚴‍♂️ Cycling tour</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=GaTraQXkq8c&t=7s" className="otherpage-card" target="_blank" rel="noreferrer">
              <Image src={idcard.src} />
              <h3>😄 ID card</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=nzR30huC6Z0" className="otherpage-card" target="_blank" rel="noreferrer">
              <Image src={fatramen.src} />
              <h3>🍜 Fat Ramen</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=bYSDlENcrW4&t=5s" className="otherpage-card" target="_blank" rel="noreferrer">
              <Image src={hotpot.src} />
              <h3>🍲 Hotpot Shabu</h3>
            </a>
            <a href="https://www.youtube.com/watch?v=_oQCArFTtEc&t=4s" className="otherpage-card" target="_blank" rel="noreferrer">
            <Image src={market.src} />
            <h3>🥗 Finnish Market</h3>
          </a>
          </div>
      </div>
      <footer style={{ color: 'black' }}>
        <a href="https://github.com/phornphatch" target="_blank" rel="noreferrer">Coded by ZUMO 😃</a>
      </footer>
    </div>
  )
}
