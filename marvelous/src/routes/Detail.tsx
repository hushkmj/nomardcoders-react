import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SubContens from "../components/SubContents";
import styled from "./Detail.module.css"

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
        <div className={styled.container}>
          {chrDatas.map((item) => (
            <div key={item.id}>
              <div className={styled.contents}>
                <div className={styled.thumbnail}>
                  <img src={item.thumbnail.path + "." + item.thumbnail.extension} />
                </div>
                <div className={styled.back}><Link to={"/"}>Back</Link></div>
                <div className={styled.info}>
                  <div>Name</div>
                  <div>{item.name}</div>
                </div>
                {item.description === '' ? null :
                  <div className={styled.info}>
                    <div>Description</div>
                    <div>{item.description}</div>
                  </div>
                }
              </div>
              <div>
                <SubContens name={"Comics"} contents={item.comics} />
                <SubContens name={"Series"} contents={item.series} />
                <SubContens name={"Stories"} contents={item.stories} />
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default Detail;