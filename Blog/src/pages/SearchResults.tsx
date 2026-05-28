import { Title } from '../components/title/Title'
import { PostsListSearchResults } from '../components/postsListSearchResults/PostsListSearchResults'
import { useParams } from 'react-router'

export function SearchResults(): React.ReactElement {
  const { searchQuery } = useParams()

  return (
    <div>
      <Title>Search results for '{searchQuery}'</Title>
      <PostsListSearchResults />
    </div>
  )
}