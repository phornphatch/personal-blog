import Head from 'next/head'
import axios from 'axios'

// manipulate data from strapi
export async function getStaticProps(ctx) {
  const {data: projects} = await axios.get(
    "http://localhost:1337/projects"
  )

  return {
    props: {
      projects
    }
  }
}

// homepage
export default function Home({projects}) { // {projects} = destruct projects from props
  return (
    <div className="container">
      <Head>
        <title>Finding Zumo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">ZUMO's blog</a>
        </h1>

        <p className="description">
          Phornphatch Hiranpattanakul jubjub
        </p>

        <div className="grid"> 
          {projects.map((project)=> {
            return (
              <a href="https://nextjs.org/docs" className="card">
                <h3>{project.Title}</h3>
                <p>{project.Description}</p>
              </a>
            )
          })}
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
