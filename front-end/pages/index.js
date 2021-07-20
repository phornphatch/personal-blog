import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import { Button, Row, Col, Layout, Menu } from 'antd'
import banner from '../public/banner.png'
import journey from '../public/journey.png'
import contact2 from '../public/contact2.png'
import { InstagramOutlined, GithubOutlined, YoutubeOutlined, SlackOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';
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
          <Menu mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">About Me</Menu.Item>
            <Menu.Item key="2">Projects</Menu.Item>
            <Menu.Item key="3">Gallery</Menu.Item>
            <Menu.Item key="4">Contact Me</Menu.Item>
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
                  Hello
                </div>
                <div className="iam">
                  I am
                </div>
                <div className="name">
                  ZUMO.
                </div>
                <p className="description">
                  Phornphatch Hiranpattanakul jubjub
                </p>
                <Button type="primary" shape="round" size={'large'}>
                  Contact Me
                </Button>
              </Col>
              <Col span={10}>
                <Image src={banner} alt="Picture of the author" />
              </Col>
            </Row>

          </div>
        </div>

        <>{/* Abouts */}</>
        <div className="about-background">
          <div className="about">
            <Row>
              <Col span={12} className="image slide-from-left">
                <Image src={journey} alt="My Journey" />
              </Col>
              <Col span={12} className="about-detail">
                <div className="topic">About Me</div>
                <div className="container">
                  {abouts.map((about) => {
                    return (
                      <a>
                        <h3>{about.Title}</h3>
                        <p>{about.Detail}</p>
                      </a>
                    )
                  })}
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <>{/* Projects */}</>
        <div className="projects-background">
          <div className="projects">
            <Row>
              <Col span={12} className="project-detail">
                <div className="topic">Coding Projects</div>
                <div className="detail">the exmple of coding project from free code camp</div>
              </Col>
              <Col span={12}>
                <div className="grid">
                  {projects.map((project) => {
                    return (
                      <a href={project.Link} className="card">
                        <Image src={`http://localhost:1337${project.Image.url}`} className="project-image" width={500} height={300} />
                        <h3>{project.Title}</h3>
                      </a>
                    )
                  })}
                </div>
              </Col>
            </Row>
          </div>
        </div>


        <>{/* Galleries */}</>
        <div className="gallery-background">
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
        <div className="contact-background">
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
        </div>

      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coded by ZUMO
        </a>
      </footer>
    </div>
  )
}
