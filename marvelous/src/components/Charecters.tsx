import { Link } from "react-router-dom";
import styled from "./Charecters.module.css";

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
    <div className={styled.content}>
      <Link to={`/character/${id}`} className={styled.thumbnail} >
        <img src={thumbnail.path + "." + thumbnail.extension} />
      </Link>
      <div className={styled.title}>
        <span>{name}</span>
      </div>

    </div>
  )
}

export default Charecters;