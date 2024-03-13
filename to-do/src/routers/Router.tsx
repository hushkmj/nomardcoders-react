import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ToDoList from "../screens/ToDoList";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <ToDoList />,
      },
    ],
  },
]);
export default Router;
