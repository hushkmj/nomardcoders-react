import { useEffect, useState } from "react";
import Charecters from "../components/Charecters";

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [characterList, setCharacterList] = useState<any[]>([]);
  const fnFetchData = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setCharacterList(json.data.results);
    setLoading(false);
  }
  useEffect(() => {
    fnFetchData();
  }, []);

  return (
    <>
      {loading ? <h1>Loading</h1> :
        <section>
          <ul>
            {
              characterList.map((charecter) => (
                <Charecters
                  key={charecter.id}
                  id={charecter.id}
                  name={charecter.name}
                  thumbnail={charecter.thumbnail}
                  description={charecter.description}
                />
              ))
            }
          </ul>
        </section>
      }
    </>
  )
}

export default Home;