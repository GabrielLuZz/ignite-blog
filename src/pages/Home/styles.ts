import { styled } from 'styled-components'

export const Profile = styled.article`
  position: relative;
  padding: 2rem 2.5rem;
  border-radius: 0.625rem;
  background: ${(props) => props.theme.colors['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: start;
  gap: 2rem;
  margin-bottom: 4.5rem;

  .image {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .info {
    display: flex;
    flex-direction: column;

    h1 {
      font: ${(props) => props.theme.fonts.mainFont.titleL};
      color: ${(props) => props.theme.colors['base-title']};
      margin-bottom: 0.5rem;
    }

    p {
      font: ${(props) => props.theme.fonts.mainFont.textM};
      color: ${(props) => props.theme.colors['base-text']};
      margin-bottom: 1.5rem;
    }

    .labels {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
  }
  .githubLink {
    position: absolute;
    top: 2rem;
    right: 2.5rem;
  }
`

export const Search = styled.form`
  margin-bottom: 3rem;
  header {
    margin-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font: ${(props) => props.theme.fonts.mainFont.titleS};
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    span {
      font: ${(props) => props.theme.fonts.mainFont.textS};
      color: ${(props) => props.theme.colors['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    border: 1px solid ${(props) => props.theme.colors['base-border']};
    background: ${(props) => props.theme.colors['base-input']};

    font: ${(props) => props.theme.fonts.mainFont.textM};
    color: ${(props) => props.theme.colors['base-text']};

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`

export const PostsList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  gap: 2rem;
`
