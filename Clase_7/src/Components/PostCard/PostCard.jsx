import React from 'react'
import { Link } from 'react-router'


/* Renderizar 1 posteo */
const PostCard = ({title, body, id, userId}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <Link to={`/posts/${id}`}>Ver mas</Link>
        <hr />
    </div>
  )
}

export default PostCard