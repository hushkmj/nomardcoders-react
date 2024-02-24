import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubContens from "../components/SubContents";

type Props = {
  id: string;
}
interface IDatas {
  id: string,
  name: string,
  thumbnail: {
    path: string,
    extension: string
  },
  description: string,
  comics: Items,
  series: Items,
  stories: Items,
}
type Item = {
  id: string,
  name: string,
  resourceURI: string
}
type Items = {
  items: Item[]
}

function Detail() {
  const { id }: Props = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [chrDatas, setChrDatas] = useState<IDatas[]>([]);

  const fnFetchData = async () => {
    const json = await (
      await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`)
    ).json();
    setChrDatas(json.data.results);
    setLoading(false);
  }

  useEffect(() => {
    fnFetchData();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading</h1> :
        <div>
          {chrDatas.map((item) => (
            <div key={item.id}>
              <img src={item.thumbnail.path + "." + item.thumbnail.extension} />
              <div>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
              <SubContens name={"Comics"} contents={item.comics} />
              <SubContens name={"Series"} contents={item.series} />
              <SubContens name={"stories"} contents={item.stories} />
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Detail;