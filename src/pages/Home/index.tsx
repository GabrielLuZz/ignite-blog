import { PostsList, Profile, Search } from './styles'
import avatar from '../../assets/avatar.png'
import { Label, StyledLink } from '../../styles/global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Post } from './components/Post'
export function Home() {
  return (
    <>
      <Profile>
        <img className="image" src={avatar} alt="" />
        <div className="info">
          <h1>Cameron Williamson</h1>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <div className="labels">
            <Label>
              <FontAwesomeIcon icon={faGithub} />
              <span>cameronwll</span>
            </Label>
            <Label>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </Label>
            <Label>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </Label>
          </div>
        </div>

        <StyledLink className="githubLink">
          <a href="" target="_blank">
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </StyledLink>
      </Profile>

      <Search>
        <header>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </header>
        <input type="text" placeholder="Buscar conteúdo" />
      </Search>

      <PostsList>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsList>
    </>
  )
}
