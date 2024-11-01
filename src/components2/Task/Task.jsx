import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/operations";
import css from "./Task.module.css";

export const Task = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

// import { useDispatch } from "react-redux";
// import { MdClose } from "react-icons/md";
// import css from "./Task.module.css";
// import { deleteTask, toggleCompleted } from "../../redux/operations";

// export const Task = ({ task }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => dispatch(deleteTask(task.id));

//   const handleToggle = () => dispatch(toggleCompleted(task));

//   return (
//     <div className={css.wrapper}>
//       <input
//         type="checkbox"
//         className={css.checkbox}
//         checked={task.completed}
//         onClick={handleToggle}
//       />
//       <p className={css.text}>{task.text}</p>
//       <button className={css.btn} onClick={handleDelete}>
//         <MdClose size={24} />
//       </button>
//     </div>
//   );
// };
