import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ICountry, ICountryList, countryListAtom } from "../atoms";

interface IForm {
  country: string;
}

function CreateItem() {
  const [countries, setCountries] = useRecoilState(countryListAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();

  const handleValid = ({ country }: IForm) => {
    setCountries((prev) => ({
      ...prev,
      wantToVisit: [...prev.wantToVisit, { key: Date.now(), value: country }],
    }));
    setValue("country", "");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          {...register("country", {
            required: "Please write a country",
          })}
        />
        <span>{errors?.country?.message}</span>
        <button>가자!</button>
      </form>
    </>
  );
}

export default CreateItem;
