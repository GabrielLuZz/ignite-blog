import { addEllipses } from '../../../../utils/addEllipses'
import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <h3>JavaScript data types and data structures</h3>
      <p>
        {addEllipses(
          `Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.`,
          197,
        )}
      </p>
      <span>Há 1 dia</span>
    </PostContainer>
  )
}
