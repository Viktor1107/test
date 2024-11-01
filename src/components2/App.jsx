import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const TasksPage = lazy(() => import("../pages/TasksPage/TasksPage"));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Routes>
    </Layout>
  );
};

// import { AppBar } from "./components2/AppBar/AppBar";
// import { TaskForm } from "./components2/TaskForm/TaskForm";
// import { TaskList } from "./components2/TaskList/TaskList";

// import { useEffect, useSelector } from "react";
// import { useDispatch } from "react-redux";
// import { fetchTasks } from "./redux/operations";
// import { Layout } from "./components2/Layout/Layout";
// import { selectIsLoading, selectError } from "./redux/selectors";
// // import { getTasks } from "redux/selectors";

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector();

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <Layout>
//       <AppBar />
//       <TaskForm />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <TaskList />
//     </Layout>
//   );
// };
