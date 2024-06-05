// display post information: a post contains title, desc, createdAt
const PostDetails = ({ post }) => {
  return (
    <div className="post-details">
      <h4>{post.title}</h4>
      <p>{post.desc}</p>
      <p>{post.createdAt}</p>
    </div>
  )
}


// export the PostDetails component for use
export default PostDetails