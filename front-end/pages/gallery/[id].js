import axios from 'axios'
import { Image } from 'antd'



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
    return `http://localhost:1337${image.formats.small.url}`
  })

  return {
    props: {
      title: gallery.Title,
      description: gallery.Description,
      images
    }
  }
}

export default function Gallery({title, description, images}){
  return (
    <div>
      {title}
      {description}
      {images.map((url)=> {
        return (
          <Image.PreviewGroup>
            <Image src={url} width={200} />
          </Image.PreviewGroup>
        )
      })}
    </div>
  )
}
