import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue};
  }

  body {
    background: ${(props) => props.theme.colors['base-background']};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      width: 6px; 
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors['base-label']}; 
      border-radius: 4px; 
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${(props) => props.theme.colors.blue};
    }
  }

  body, input, textarea, button {
    font: ${(props) => props.theme.fonts.mainFont.textM}
  }
`

export const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
    color: ${(props) => props.theme.colors['base-label']};
  }

  span {
    font: ${(props) => props.theme.fonts.mainFont.textM};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const StyledLink = styled.span`
  a {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font: ${(props) => props.theme.fonts.mainFont.Link};
    color: ${(props) => props.theme.colors.blue};

    svg {
      width: 12px;
      height: 12px;
    }
  }
`
