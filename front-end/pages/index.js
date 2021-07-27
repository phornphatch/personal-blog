import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import { Button, Row, Col, Layout, Menu, Popover, BackTop } from 'antd'
import banner from '../public/banner.png'
import journey from '../public/journey.png'
import contact2 from '../public/contact2.png'
import Ellipse from '../public/Ellipse.png'
import Star from '../public/Star.png'
import Rectangle from '../public/Rectangle.png'
import Polygon from '../public/Polygon.png'
import dot1 from '../public/dot1.png'
import dot2 from '../public/dot2.png'
import { InstagramOutlined, GithubOutlined, YoutubeOutlined, SlackOutlined, FacebookOutlined, LinkedinOutlined, SolutionOutlined, UpOutlined } from '@ant-design/icons';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';


const { Header, Footer, Sider, Content } = Layout

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
          <div className="logo">ZUMO</div>
          <Menu mode="horizontal" defaultSelectedKeys={['0']}>
            <Menu.Item key="1"><a href="#about">About Me</a></Menu.Item>
            <Menu.Item key="2"><a href="#project">Projects</a></Menu.Item>
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
                  jkmfkvjmfldk'gjvbp'osdfgvjbgfdckbvmcf
                  bvnmpfdigjbfkldbjfgkjbgdfjbzkbvjndroigkofigotidopihgopkblvcm
                  x,ml;lfkg;flk;lk;ldoirgtopem.,cxvdklgjlisfd;gujfoidlhjfg
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

        <>{/* Projects */}</>
        <div className="projects-background" id="project">
        <div className="dot1"><Image src={dot1} width={350} height={250} /></div>
        <div className="dot2"><Image src={dot2} width={380} height={270} /></div>
          <div className="projects">
            <Row>
              <Col span={12} className="project-detail">
                <p className="popout project-topic">
                  <span>Coding </span> <br />
                  <span> Projects </span>	
                </p>
                <div className="project-description">The exmple of coding project from free code camp</div>
                <Button type="primary" shape="round" size={'large'} >
                      SEE MORE
                    </Button>
              </Col>
              <Col span={12}>
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
                <div className="icon"><a href="https://www.instagram.com/findingzumo/" ><InstagramOutlined /></a></div>
                <div className="icon"><a href="https://github.com/phornphatch" ><GithubOutlined /></a></div>
                <div className="icon"><a href="https://www.youtube.com/channel/UCkl4LSwnvDUwLhSEp5EhVOA" ><YoutubeOutlined /></a></div>
                {/* <div className="icon"><a href="https://www.instagram.com/findingzumo/" ><SlackOutlined /></a></div> */}
                <div className="icon"><a href="https://www.facebook.com/findingzumo/" ><FacebookOutlined /></a></div>
                <div className="icon"><a href="https://www.linkedin.com/in/phornphatch/" ><LinkedinOutlined /></a></div>
              </Col>
            </Row>
          </div>

          <div className="ellipse"><Image src={Ellipse} width={260} height={200} /></div>
          <div className="star" ><Image src={Star} width={200} height={200} /></div>
          <div className="polygon"><Image src={Polygon} width={200} height={200} /></div>
          <div className="rectangle"><Image src={Rectangle} width={200} height={200} /></div>
        </div>

        <BackTop>
          <div className="up"><UpOutlined /></div>
        </BackTop>

      </main>
      <footer>
          Coded by ZUMO
      </footer>
    </div>
  )
}
