import { PostsListSearchResults } from '../components/postsListSearchResults/PostsListSearchResults'
import { useParams } from 'react-router'

export function SearchResults(): React.ReactElement {
  const { searchQuery } = useParams()

  return (
    <div>
      Search results for '{searchQuery}'
      <PostsListSearchResults />
    </div>
  )
}