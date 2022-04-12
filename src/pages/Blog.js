import { useEffect, useState } from "react"
import { Layout } from "../components/layout"
import bg from '../static/muhammad-amer-TXJEdxs5Hh4-unsplash.webp'

export const Blog = () => {
  const [ posts, setPosts ] = useState([{"title": "asdf"}])

  useEffect(() => {
    async function loadPosts() {
      const _posts = (await (await fetch("http://admin.goodjoblahore.com/wp-json/wp/v2/posts")).json())
      setPosts(_posts)
    }

    loadPosts()
  }, [])

  const postsRendered = posts.map((post) => {
    return (
      <div className="m-5" key={post.id}>
        <h2>{post.title.rendered}</h2>
        <p></p>
      </div>
    )
  })

  return (
    <Layout>
      <section style={{backgroundImage: `url(${bg})`}} className="bg-cover h-[40vh] bg-fixed">
        <div className="h-full bg-[#000000aa] flex flex-col text-white text-5xl justify-center items-center">
          <h1 className="font-display">BLOG</h1>
          <p className="mt-10 font-serif"><em>News and updates</em></p>
        </div>
      </section>
      <section>
        {postsRendered}
      </section>
    </Layout>
  )
}