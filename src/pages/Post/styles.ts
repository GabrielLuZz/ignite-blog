import { styled } from 'styled-components'

export const PostInfo = styled.section`
  padding: 2rem 2.5rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme.colors['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  h1 {
    font: ${(props) => props.theme.fonts.mainFont.titleL};
    color: ${(props) => props.theme.colors['base-title']};
    margin-bottom: 0.5rem;
  }

  .labels {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`

export const Content = styled.section`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  pre {
    padding: 1rem;
    border-radius: 0.125rem;
    background: ${(props) => props.theme.colors['base-post']};
  }
`
