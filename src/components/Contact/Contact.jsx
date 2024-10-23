import s from "./Contact.module.css";
import { FaUserTie } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={s.item}>
      <div className={s.wrap}>
        <div className={s.span}>
          <p>
            <FaUserTie /> {contact.name}
          </p>
          <p>
            <FaPhone /> {contact.number}
          </p>
        </div>
        <button className={s.btn} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};
