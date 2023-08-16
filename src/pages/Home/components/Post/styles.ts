import { styled } from 'styled-components'

export const PostContainer = styled.article`
  width: 100%;
  min-height: 16.25rem;
  padding: 2rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme.colors['base-post']};
  position: relative;

  h3 {
    font: ${(props) => props.theme.fonts.mainFont.titleM};
    color: ${(props) => props.theme.colors['base-title']};
    margin-bottom: 1.25rem;
    max-width: 80%;
  }

  p {
    font: ${(props) => props.theme.fonts.mainFont.textM};
    color: ${(props) => props.theme.colors['base-text']};
  }

  span {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`
