import { useEffect, useState } from 'react'


// components
import PostDetails from '../components/PostDetails'


const Home = () => {
  // state is initially null
  const [posts, setPosts] = useState(null)


  // fire function when component is rendered
  useEffect(() => {
    // get posts from backend
    const fetchPosts = async () => {
      const response = await fetch('/api/posts') // proxy works here; don’t need to have http://localhost:4000/api/posts (**)
      const json = await response.json()  // passes json => array of post objects


      // if ok, update posts
      if (response.ok) {
        setPosts(json)
      }
    }


    fetchPosts()
  }, []) // only fire once when first rendered


  return (
    <div className="home">
      <div className="posts">
        {/* of post is updated, then go thru each */}
        {posts && posts.map((post) => (
          <PostDetails key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}


// export
export default Home