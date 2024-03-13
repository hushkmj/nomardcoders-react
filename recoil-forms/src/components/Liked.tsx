import { useRecoilState, useRecoilValue } from "recoil";
import { ICountry, countryListAtom, setLocalStorage } from "../atoms";

function Liked() {
  const [countries, setCountries] = useRecoilState(countryListAtom);
  const countryList = useRecoilValue(countryListAtom);

  const fnChangeCountry = (item: ICountry, flag: string) => {
    const targetIndex = countries.liked.findIndex(
      (obj) => obj.key === item.key
    );

    if (flag === "add") {
      // setCountries((prev) => ({
      //   ...prev,
      //   liked: [
      //     ...prev.liked.slice(0, targetIndex),
      //     ...prev.liked.slice(targetIndex + 1),
      //   ],
      // }));
      setLocalStorage(countries.liked);
    } else {
      setCountries((prev) => ({
        ...prev,
        visited: [...prev.visited, { key: Date.now(), value: item.value }],
        liked: [
          ...prev.liked.slice(0, targetIndex),
          ...prev.liked.slice(targetIndex + 1),
        ],
      }));
    }
  };

  return (
    <>
      <ul>
        {countryList.liked.map((item) => (
          <li key={item.key}>
            <span id={String(item.key)}>{item.value}</span>
            <button
              value={item.value}
              onClick={() => fnChangeCountry(item, "add")}
            >
              saved
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
export default Liked;
