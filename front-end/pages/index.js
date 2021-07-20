import Head from 'next/head'
import axios from 'axios'
import Image from 'next/image'
import { Button, Row, Col, Layout, Menu} from 'antd'
import banner from '../public/banner.png'
import journey from '../public/journey.png'
import contact2 from '../public/contact2.png'
import { InstagramOutlined, GithubOutlined, YoutubeOutlined, SlackOutlined, FacebookOutlined, LinkedinOutlined} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout

// manipulate data from strapi
export async function getStaticProps(ctx) {
  const {data: projects} = await axios.get(
    "http://localhost:1337/projects"
  )
  const {data: galleries} = await axios.get(
    "http://localhost:1337/galleries"
  )  
  const {data: abouts} = await axios.get(
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
export default function Home({projects, galleries, abouts}) { // {projects} = destruct projects from props
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
        <Col span={12} className="image">
          <Image src={journey} alt="My Journey" />
        </Col>
        <Col span={12} className="about-detail">
          <div className="topic">About Me</div>
          <div className="container"> 
            {abouts.map((about)=> {
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
            {projects.map((project)=> {
              return (
                <a href={project.Link} className="card">
                  <Image src={`http://localhost:1337${project.Image.url}`} className="project-image" width={500} height={300}/>
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
        <Row>
          <Col>
            <div className="topic" style={{ textAlign: 'center' }}>Gallery</div>
            <div className="description" style={{ textAlign: 'center' }}>this is my Gallery eieieieiei</div>
            <div className="grid">
              {galleries.map((gallery)=> {
                return (
                  <div className="gallery-card">
                    <a href={`/gallery/${gallery.id}`} >
                      <Image className="gallery-image" src={`http://localhost:1337${gallery.Main_image.url}`}  width={315} height={236} />
                      <h3>{gallery.Title}</h3>
                      <p>{gallery.Description}</p>
                    </a>
                    </div>
                )
              })}
            </div>
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
              <div className="icon"><InstagramOutlined /></div>
              <div className="icon"><GithubOutlined /></div>
              <div className="icon"><YoutubeOutlined /></div>
              <div className="icon"><SlackOutlined /></div>
              <div className="icon"><FacebookOutlined /></div>
              <div className="icon"><LinkedinOutlined /></div>
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
