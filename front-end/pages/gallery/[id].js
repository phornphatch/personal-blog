import axios from 'axios'
import { Image } from 'antd'
import { Button, Layout } from 'antd'
import { Navbar } from '../../components/Navbar'

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

      <Navbar />
      
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
