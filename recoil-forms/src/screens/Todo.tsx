import CreateItem from "../components/CreateItem";
import Liked from "../components/Liked";
import Visited from "../components/Visited";
import WantToVisit from "../components/WantToVisit";

function Todo() {
  return (
    <>
      <h1>세계여행 리스트</h1>
      <CreateItem />
      <h1>내가 가고싶은 나라들</h1>
      <WantToVisit />
      <h1>내가 가본 나라들</h1>
      <Visited />
      <h1>내가 좋아하는 나라들</h1>
      <Liked />
    </>
  );
}

export default Todo;
