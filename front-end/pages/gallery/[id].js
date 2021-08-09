import axios from 'axios'
import { Image } from 'antd'
import { Button, Row, Col, Layout, Menu, Popover, BackTop } from 'antd'

const { Header, Footer, Sider, Content } = Layout

// list all id for using  in getStaticProps
export async function getStaticPaths() {
  const {data: galleries} = await axios.get(
    "http://localhost:1337/galleries"
  )
  const paths = galleries.map((gallery) => ({
    params: { id: gallery.id.toString() },
  }))
  return {
    paths, 
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const {data: gallery} = await axios.get(
    `http://localhost:1337/galleries/${params.id}`
  )
  const images = gallery.Image.map((image)=>{
    return `http://localhost:1337${image.formats.medium.url}`
  })
  const main_image = `http://localhost:1337${gallery.Main_image.formats.large.url}`
 
  return {
    props: {
      title: gallery.Title,
      description: gallery.Description,
      images,
      main_image
    }
  }
}

export default function Gallery({title, description, images, main_image}){
  return (
    <div className="gallery-page">


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
      
      <div className="gallerypage-header">
        <Image src={main_image} preview={false} className="gallery-main-image" />
        <div className="gallerypage-overlay">
          <div className="gallerypage-banner">
            <span className="gallerypage-title">{title}</span>
            <Button className="explore">
            <a href="#images">Explore</a>
          </Button>
          </div>
        </div>
      </div>

      <div className="blur-box">
      </div>

      <div className="gallerypage-description">
      <div className="gallerypage-description-sub">
        {description}
        </div>
      </div>

      <div className="gallerypage-images" id="images">
        
        
        {images.map((url)=> {
          return (
            <Image.PreviewGroup>
              <Image src={url} width={300} className="gallerypage-image" />
            </Image.PreviewGroup>
          )
        })}
       

      </div>
      <footer>
          Coded by ZUMO
      </footer>
    </div>
    
  )
}
