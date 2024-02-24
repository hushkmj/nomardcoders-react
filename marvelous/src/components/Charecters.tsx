import { Link } from "react-router-dom";

type CharacterList = {
  id: string,
  name: string,
  thumbnail: {
    path: string,
    extension: string
  },
  description: string
}

function Charecters({ id, name, thumbnail, description }: CharacterList) {
  return (
    <li>
      <img src={thumbnail.path + "." + thumbnail.extension} />
      <div>
        <Link to={`/character/${id}`}>
          <h1>{name}</h1>
        </Link>
      </div>
    </li>
  )
}

export default Charecters;