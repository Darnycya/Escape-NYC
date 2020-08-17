import React from 'react'
import TrailDetail from '../../components/TrailDetail/TrailDetail'
import Comments from '../../components/Comments/Comments'
import { withRouter } from 'react-router-dom'

function TrailDetailPage(props) {
  return (
    <div>
      <TrailDetail />
      <Comments />
      
    </div>
  )
}
export default withRouter(TrailDetailPage)