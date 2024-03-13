import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ICountry, countryListAtom } from "../atoms";

function WantToVisit() {
  const [countries, setCountries] = useRecoilState(countryListAtom);
  const countryList = useRecoilValue(countryListAtom);

  const fnChangeCountry = (item: ICountry, flag: string) => {
    const targetIndex = countries.wantToVisit.findIndex(
      (obj) => obj.key === item.key
    );

    if (flag === "add") {
      setCountries((prev) => ({
        ...prev,
        wantToVisit: [
          ...prev.wantToVisit.slice(0, targetIndex),
          ...prev.wantToVisit.slice(targetIndex + 1),
        ],
        visited: [...prev.visited, { key: item.key, value: item.value }],
      }));
    } else {
      setCountries((prev) => ({
        ...prev,
        wantToVisit: [
          ...prev.wantToVisit.slice(0, targetIndex),
          ...prev.wantToVisit.slice(targetIndex + 1),
        ],
      }));
    }
  };

  return (
    <>
      <ul>
        {countryList.wantToVisit.map((item) => (
          <li key={item.key}>
            <span id={String(item.key)}>{item.value}</span>
            <button
              value={item.value}
              onClick={() => fnChangeCountry(item, "add")}
            >
              visited
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

export default WantToVisit;
