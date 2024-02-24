import { Link } from "react-router-dom"

type Props = {
  id: string,
  coverImg: string,
  summary: string,
  title: string,
  genres: string[]
}

function Movie({ id, coverImg, summary, title, genres }: Props) {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {
          genres.map((g: string) => (
            <li key={g}>{g}</li>
          ))
        }
      </ul>
    </div>
  )
}
export default Movie;