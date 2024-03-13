import { useRecoilState, useRecoilValue } from "recoil";
import { ICountry, countryListAtom } from "../atoms";

function Visited() {
  const [countries, setCountries] = useRecoilState(countryListAtom);
  const countryList = useRecoilValue(countryListAtom);

  const fnChangeCountry = (item: ICountry, flag: string) => {
    const targetIndex = countries.visited.findIndex(
      (obj) => obj.key === item.key
    );

    if (flag === "add") {
      setCountries((prev) => ({
        ...prev,
        visited: [
          ...prev.visited.slice(0, targetIndex),
          ...prev.visited.slice(targetIndex + 1),
        ],
        liked: [...prev.liked, { key: item.key, value: item.value }],
      }));
    } else {
      setCountries((prev) => ({
        ...prev,
        wantToVisit: [
          ...prev.wantToVisit,
          { key: item.key, value: item.value },
        ],
        visited: [
          ...prev.visited.slice(0, targetIndex),
          ...prev.visited.slice(targetIndex + 1),
        ],
      }));
    }
  };

  return (
    <>
      <ul>
        {countryList.visited.map((item) => (
          <li key={item.key}>
            <span id={String(item.key)}>{item.value}</span>
            <button
              value={item.value}
              onClick={() => fnChangeCountry(item, "add")}
            >
              liked
            </button>
            <button onClick={() => fnChangeCountry(item, "delete")}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Visited;
