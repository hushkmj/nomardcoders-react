import { useQuery } from '@tanstack/react-query';
import { characterList } from '../apis/api';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 860px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 64px;
  color: ${(props) => props.theme.accentColor};
  font-weight: 600;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const CharacterList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Character = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 20px;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: aliceblue;
    color: black;
  }
`;

interface IImg {
  url: string;
}
const Img = styled.div<IImg>`
  background-image: url(${(props) => props.url});
  background-position: top;
  border-radius: 50%;
  background-size: cover;
  width: 80%;
  aspect-ratio: 1 / 1;
  border: 2px solid white;
`;

const Name = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

function Home() {
  const { isLoading, data } = useQuery<ICharacter[]>({
    queryKey: ['characterList'],
    queryFn: characterList,
  });

  return (
    <Container>
      <Header>
        <Title>디즈니 캐릭터즈</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CharacterList>
          {data?.slice(0, 100).map((character) => (
            <Link
              key={character.id}
              to={{ pathname: `character/${character.id}` }}
              state={{ name: character.name, url: character.imageUrl }}
            >
              <Character>
                <Img url={character.imageUrl} />
                <Name>{character.name}</Name>
              </Character>
            </Link>
          ))}
        </CharacterList>
      )}
    </Container>
  );
}

export default Home;
