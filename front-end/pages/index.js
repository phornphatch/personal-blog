import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import { Button, Row, Col, Layout, Menu, Popover, BackTop, Switch, Dropdown } from 'antd'
import banner from '../public/banner.png'
import journey from '../public/journey.png'
import contact2 from '../public/contact2.png'
import Ellipse from '../public/Ellipse.png'
import Star from '../public/Star.png'
import Rectangle from '../public/Rectangle.png'
import Polygon from '../public/Polygon.png'
import dot1 from '../public/dot1.png'
import dot2 from '../public/dot2.png'
import randomwork from '../public/random-work.png'
import { InstagramOutlined, GithubOutlined, YoutubeOutlined, FacebookOutlined, LinkedinOutlined, SolutionOutlined, UpOutlined, SmileOutlined } from '@ant-design/icons';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import designproject from '../public/designproject.png'

const { Header, Footer, Sider, Content } = Layout
const menu = (
  <Menu>
    <Menu.Item>
      <a href="#coding">
        💻 Coding
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#design">
        🎨 Design
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#random-works">
        🍭 Random
      </a>
    </Menu.Item>
  </Menu>
);


// manipulate data from strapi
export async function getStaticProps(ctx) {
  const { data: projects } = await axios.get(
    "http://localhost:1337/projects"
  )
  const { data: galleries } = await axios.get(
    "http://localhost:1337/galleries"
  )
  const { data: abouts } = await axios.get(
    "http://localhost:1337/abouts"
  )
  return {
    props: {
      projects,
      galleries,
      abouts
    }
  }
}


// homepage
export default function Home({ projects, galleries, abouts }) { // {projects} = destruct projects from props
  return (
    <div className="container">
      <Head>
        <title>ZUMO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Naviagtion Bar */}
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
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

      <main>
        {/* Banner */}
        <div className="banner-background">
          <div className="banner">
            <Row>
              <Col span={12}>
                <div className="hello">
                  Hello, I am 
                </div>
                <div className="name">
                  ZUMO.
                </div>
                <div className="newbiedev">
                  A Newbie DEV
                </div>
                <p className="banner-description">
                  Start coding with all Polymer chemistry specialist skills and knowledge.
                </p>
                <Button type="primary" shape="round" size={'large'}>
                  <a href="#contact">Contact Me</a>
                </Button>
              </Col>
              <Col span={10}>
                <Image src={banner} alt="Picture of the author" className="banner-image" />
              </Col>
            </Row>
          </div>
        </div>

        {/* Marquee text */}
        <Row>
          <Col span={24}>
          <div className="marquee">
          <div className="text-box">
            <h1>   NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp; LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp;</h1>
            <h1>   NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp; LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp; NICE TO MEET YOU &nbsp; 😀 &nbsp;  LET'S CONVERT COFFEE INTO CODE &nbsp; ☕ &nbsp;</h1>
          </div>
          </div>
          </Col>
        </Row>
       

        <>{/* Abouts */}</>
        <div className="about-background" id="about">
          <div className="about">
            <Row>
              <Col span={12} className="image">
              <OverPack style={{display: 'flex'}}>
                  <QueueAnim key="queue" delay={200} interval={500} duration={1000} animConfig={[
                      { opacity: [1, 0], translateX: [0, -50] }
                    ]}>
                    <Image src={journey} alt="My Journey" key="a"/>
                  </QueueAnim>
                </OverPack>
              </Col>
              <Col span={12} className="about-detail">
              <OverPack style={{display: 'flex'}}>
              <QueueAnim key="queue" delay={200} interval={500} duration={500} >
                <div className="about-topic1" key="a"> This is not a resume ! </div>
                <div className="about-topic2" key="b"> It's just.. </div>
                <div className="about-topic" key="c"> My Life Story. 🚀 </div>
                <div className="about-description" key="d">
                  You might wonder how did I ended up building this website and switched from polymer science to software development 
                  when you look at my background or download my resume from a little 
                  <span style={{color:"#4BC19C", fontWeight:"bold"}}> green</span> button below.
                  <br/><br/>
                  Scroll down to learn more.~
                </div>
                <div key="e">
                  <Popover title="Download my resume here!">
                    <Button type="primary" shape="round" size={'large'} >
                      <a href="/Zumo's CV.pdf" download>
                        <SolutionOutlined />
                      </a>
                    </Button>
                  </Popover>
                </div>
              </QueueAnim>
              </OverPack>
              </Col>
            </Row>
          </div>
        </div>

        <>{/* Coding Projects */}</>
        <div className="projects-background" id="coding">
        <div className="dot1"><Image src={dot1} width={350} height={250} /></div>
        <div className="dot2"><Image src={dot2} width={380} height={270} /></div>
          <div className="projects">
            <Row style={{margin:"auto", marginTop:"50px"}}>
              <Col span={12} className="project-detail">
                <p className="popout project-topic">
                  <span>Coding </span> <br />
                  <span> Projects </span>	
                </p>
                <span className="project-description">
                  A showcase from my wed development learning.
                  <br/><br/>
                  I learned how to code from FreeCodeCamp. It has amazing learning resources.
                  These are some examples of coding projects from FreeCodeCamp.
                  <br/><br/>
                  I plan to build more stuffs in the future. Stay Tuned !! 👀
                </span>
                {/* <Button type="primary" shape="round" size={'large'} >
                      SEE MORE
                    </Button> */}
              </Col>
              <Col span={12} style={{margin:"auto"}}>
              <OverPack>
              <QueueAnim key="queue" delay={200} interval={500} duration={1000} >
                <div className="grid" key="a">
                  {projects.map((project) => {
                    return (
                      <a href={project.Link} className="card">
                        <Image src={`http://localhost:1337${project.Image.url}`} className="project-image" width={500} height={300} />
                        <h3>{project.Title}</h3>
                      </a>
                    )
                  })}
                </div>
                </QueueAnim>
                </OverPack>
              </Col>
            </Row>
        
          </div>
          
        </div>

        <>{/* Design Projects */}</>
        <div className="about-background" id="design">
          <div className="about">
            <Row>
              <Col span={12} className="image">
              <OverPack style={{display: 'flex'}}>
                  <QueueAnim key="queue" delay={200} interval={500} duration={1000} animConfig={[
                      { opacity: [1, 0], translateX: [0, -50] }
                    ]}>
                    <Image src={designproject} width={443} height={485} key="a" />
                  </QueueAnim>
                </OverPack>
              </Col>
              <Col span={12} className="about-detail">
              <OverPack style={{display: 'flex'}}>
              <QueueAnim key="queue" delay={200} interval={500} duration={500} >
                <div className="about-topic" key="a"> Design Projects </div>
                <div className="about-description" key="b">
                  You might wonder how did I ended up building this website and switched from polymer science to software development 
                  when you look at my background or download my resume from a little 
                  <span style={{color:"#4BC19C", fontWeight:"bold"}}> green</span> button below.
                  <br/><br/>
                  Scroll down to learn more.~
                </div>
                <div key="c">
                  <Popover title="See my design projects">
                    <Button type="primary" shape="round" size={'large'} >
                      <a href="/design-projects" >
                        <SmileOutlined />
                      </a>
                    </Button>
                  </Popover>
                </div>
              </QueueAnim>
              </OverPack>
              </Col>
            </Row>
          </div>
        </div>

        <>{/* Others */}</>
        <div className="other-background" id="random-works">
          <div className="other">
            <Row>
              <Col span={12} className="other-detail">
                <span className="other-topic1"> This section is <br/>random and complicated ! </span>
                <div className="other-topic effect-shine">Random Works</div>
                <span className="project-description">
                  This section includes my random works (just show my skills)
                  such as the chatbot, my scientific research and journal, my part-time job as advertising actor and my vdo cilp on youtube.
                  <br/><br/>
                  I plan to build more stuffs in the future. Stay Tuned !! 👀
                </span>
                {/* <Button type="primary" shape="round" size={'large'} >
                      SEE MORE
                    </Button> */}
              </Col>
              <Col span={12} style={{marginTop: "70px", textAlign:"center"}}>
                <OverPack>
                <QueueAnim key="queue" delay={100} interval={500} duration={1000} >
                <Image src={randomwork} key="a" />
                  <div key="b" style={{marginTop:"10px"}}>
                    <div className="other-switch">
                      <Switch onClick={() => window.location="/other-works"}></Switch>
                    </div>
                    <div className="other-topic1" >
                      Please turn on 
                      if you really want to know.
                    </div>
                  </div>
                </QueueAnim>
                </OverPack>
              </Col>
            </Row>
        
          </div>
          
        </div>

        <>{/* Galleries */}</>
        <div className="gallery-background" id="gallery">
          <div className="gallery">
            <Row style={{ width: "100%" }}>
              <Col span={24}>
                <div className="topic" style={{ textAlign: 'center' }}>📸</div>
                <div className="description" style={{ textAlign: 'center' }}>A return ticket to a moment otherwise gone </div>
                <OverPack style={{display: 'flex'}}>
                  <QueueAnim key="queue" delay={200} interval={500} duration={1000} className="gallery-grid"
                    animConfig={[
                      { opacity: [1, 0], translateY: [0, 50] }
                    ]}
                  >
                    {galleries.map((gallery, index) => {
                      return (
                        <div className="gallery-card" key={index}>
                          <a href={`/gallery/${gallery.id}`} >
                            <Image className="gallery-image" src={`http://localhost:1337${gallery.Main_image.formats.medium.url}`} width={315} height={236} />
                            <div className="gallery-card-title">{gallery.Title}</div>
                            <hr size=".5px" color="black"></hr>
                            <div className="gallery-card-description">{gallery.Description}</div>
                          </a>
                        </div>
                      )
                    })}
                  </QueueAnim>
                </OverPack>
              </Col>
            </Row>
          </div>
        </div>

        <>{/* Contact */}</>
        <div className="contact-background" id="contact">
          <div className="contact">
            <Row>
              <Col span={10} className="contact-image">
                <Image src={contact2} />
              </Col>
              <Col span={12} className="contact-information">
                <div className="contact-topic">Contact.</div>
                <div className="contact-description">BEWARE!! It's not me.</div>
                <div className="contact-description">It's my social media behavior.</div>
                <div className="icon"><a href="https://www.instagram.com/findingzumo/" target="_blank"><InstagramOutlined /></a></div>
                <div className="icon"><a href="https://github.com/phornphatch" target="_blank"><GithubOutlined /></a></div>
                <div className="icon"><a href="https://www.youtube.com/channel/UCkl4LSwnvDUwLhSEp5EhVOA" target="_blank" ><YoutubeOutlined /></a></div>
                <div className="icon"><a href="https://www.facebook.com/findingzumo/" target="_blank"><FacebookOutlined /></a></div>
                <div className="icon"><a href="https://www.linkedin.com/in/phornphatch/" target="_blank"><LinkedinOutlined /></a></div>
              </Col>
            </Row>
          </div>

          <div className="left-top"><Image src={Ellipse} width={260} height={200} /></div>
          <div className="left-bottom" ><Image src={Star} width={200} height={200} /></div>
          <div className="right-top"><Image src={Polygon} width={200} height={200} /></div>
          <div className="right-bottom"><Image src={Rectangle} width={200} height={200} /></div>
        </div>

        <BackTop>
          <div className="up"><UpOutlined /></div>
        </BackTop>

      </main>
      <footer>
        <a href="https://github.com/phornphatch" target="_blank">Coded by ZUMO 😃</a>
      </footer>
    </div>
  )
}
