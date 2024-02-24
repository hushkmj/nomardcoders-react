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
    <div>
      <h3>{name}</h3>
      <ul>
        {contents.items.map((item: Item) => (
          <li key={item.resourceURI}>
            <a href={item.resourceURI} target="_blank">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubContens;