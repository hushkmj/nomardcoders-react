import styled from "./SubContents.module.css"

type Item = {
  id: string,
  name: string,
  resourceURI: string
}
type Items = {
  items: Item[]
}

interface IComics {
  name: string
  contents: Items
}

function SubContens({ name, contents }: IComics) {
  return (
    <div className={styled.container}>
      <div>
        <div>{name}</div>
      </div>
      <div>
        <ul>
          {contents.items.map((item: Item) => (
            <li key={item.resourceURI}>
              <a href={item.resourceURI} target="_blank">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>


    </div>
  )
}

export default SubContens;