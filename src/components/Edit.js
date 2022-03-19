import React from "react";
import WriteContainer from "../styles/writeCss";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export default function Edit({
  setEditTitle,
  setEditText,
  editTitle,
  editText,
  userId,
}) {
  const navigate = useNavigate();

  const onsubmit = (e) => {
    e.preventDefault();
    handleEditClick();
    navigate("/");
  };

  /*업데이트 해주는 부분*/
  const handleEditClick = async () => {
    const userDoc = doc(db, "users", userId);
    await updateDoc(userDoc, {
      제목: editTitle,
      내용: editText,
    });
  };

  const onchange = (e) => {
    const { value, name } = e.target;
    if (name === "title") {
      setEditTitle(value);
    } else if (name === "text") {
      setEditText(value);
    }
  };

  return (
    <WriteContainer>
      <form onSubmit={onsubmit}>
        <input
          value={editTitle}
          name="title"
          placeholder="제목.."
          onChange={onchange}
        />
        <textarea
          value={editText}
          name="text"
          placeholder="내용.."
          onChange={onchange}
        />
        <button onSubmit={onsubmit}>Click!</button>
      </form>
    </WriteContainer>
  );
}
