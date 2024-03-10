import { useQuery } from '@tanstack/react-query';
import { useLocation, useMatch, useParams } from 'react-router-dom';
import { character } from '../apis/api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
  max-width: 680px;
  margin: 0 auto;
  margin-top: 3rem;
`;

const Character = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 20px;
  border-radius: 15px;
`;

interface IImg {
  url: string;
}
const Img = styled.div<IImg>`
  background-image: url(${(props) => props.url});
  background-position: top;
  border-radius: 50%;
  background-size: cover;
  aspect-ratio: 1 / 1;
  border: 2px solid white;
  width: 50%;
  font-weight: 600;
`;

const Name = styled.span`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  margin-top: 20px;
`;

const Back = styled.div`
  width: 100%;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Films = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Film = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  margin: 5px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  cursor: default;
  &:hover {
    background-color: aliceblue;
    color: black;
  }
`;

interface character {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

function Detail() {
  const { id } = useParams();
  const { state } = useLocation();
  // const priceMatch = useMatch("/:coinId/price");
  const { isLoading, data } = useQuery<character>({
    queryKey: ['character', id],
    queryFn: () => character(id!),
  });
  console.log(data);
  return (
    <Container>
      <Character>
        <Img url={state?.url} />
        <Name>{state?.name ? state.name : isLoading ? 'Loading...' : data?.name}</Name>
      </Character>
      <Back>
        <Link to={'/'}>&larr;</Link>
      </Back>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <Films>{data?.films.map((film) => <Film key={film}>{film}</Film>)}</Films>
      )}
    </Container>
  );
}

export default Detail;
