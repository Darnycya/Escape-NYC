import React from 'react'

export default function Comments(props) {
  return (
    <div>
      <h3>Comments:</h3>
      {props.comments.map((comment) => (
        <div class="comments">
          
          <img class="user_image" src={comment.user_id.user_image}></img>
          <p>{comment.user_id.name}</p>
            <p>{comment.comment}</p>
        </div>
      ))
      }
      <input type="text"></input><button>Add A Comment </button>
    </div>
  )
}
