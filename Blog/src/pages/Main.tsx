import { Title } from "../components/title/Title";
import { PostsListMain } from "../components/postsListMain/PostsListMain";

export function Main(): React.ReactElement {

  return (
    <>
      <Title>Posts</Title>
      <PostsListMain />
    </>
  )
}

