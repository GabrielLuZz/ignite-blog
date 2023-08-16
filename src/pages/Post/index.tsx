import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Label, StyledLink } from '../../styles/global'
import { Content, PostInfo } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const markdownText = `
## Exemplo de Código

A seguir, temos um exemplo de código em JavaScript que mostra como calcular o fatorial de um número usando uma função recursiva.

\`\`\`javascript
// Função para calcular o fatorial de um número usando recursão
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFatorial(numero - 1);
  }
}

// Exemplo de uso da função para calcular o fatorial de 5
const numero = 5;
const resultado = calcularFatorial(numero);
console.log(\`O fatorial de \${numero} é: \${resultado}\`);
\`\`\`
`

export function Post() {
  return (
    <>
      <PostInfo>
        <div className="header">
          <StyledLink>
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              voltar
            </Link>
          </StyledLink>
          <StyledLink>
            <a href="" target="_blank">
              ver no github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </StyledLink>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <div className="labels">
          <Label>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </Label>
          <Label>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </Label>
          <Label>
            <FontAwesomeIcon icon={faComment} />
            <span>comentários</span>
          </Label>
        </div>
      </PostInfo>
      <Content>
        <ReactMarkdown
          components={{
            code: ({ node, inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  style={materialDark}
                  wrapLines // Adicione essa prop para que as linhas sejam quebradas corretamente
                  customStyle={{ maxHeight: '400px', overflowY: 'auto' }} // Defina seu estilo personalizado aqui
                  children={String(children).replace(/\n$/, '')}
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {markdownText}
        </ReactMarkdown>
      </Content>
    </>
  )
}
