import React from 'react'




export default function Comments(props) {

  return (
    <div class="comment-header">
      <p>Comments:</p>
      {props.comments.map((comment) => (
        <>
          <img class="user_image" src={comment.user_id.user_image}></img>
          <p>{comment.user_id.name}</p>
            <p>{comment.comment}</p>
        </>
      ))
      }
      <input type="text"></input><button>Add A Comment </button>
      </div>
  )
}
