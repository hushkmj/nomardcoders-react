import { useEffect } from "react";
import { useParams } from "react-router-dom";

type Props = {
  id: string
}
function Detail() {
  const { id }: Props = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  }
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;