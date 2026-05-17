import { Breadcrumb } from '../components/breadcrumb/Breadcrumb'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import { PostComponent } from '../components/post/Post'

export function Post(): React.ReactElement {
  const { postId } = useParams()

  return (
    <div>
      <Breadcrumb postNumber={` | Post ${postId}`}>
        <Link to="/">Home</Link>
      </Breadcrumb>
      <PostComponent />
    </div>
  )
}