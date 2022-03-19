import React from "react";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import WriteContainer from "../styles/writeCss";

export default function Write({
  myCollections,
  title,
  setTitle,
  text,
  setText,
}) {
  /*네비게이터*/
  const navigate = useNavigate();

  /*데이터베이스에 저장*/
  const writeUserData = async () => {
    await addDoc(myCollections, { 제목: title, 내용: text });
  };

  /*엔터쳤을때*/
  const onsubmit = (e) => {
    e.preventDefault();
    if ((title === "") | (text === "")) {
      alert("빈칸을 입력해주세요..");
    } else {
      writeUserData();
      setTitle("");
      setText("");
      navigate("/");
    }
  };

  /*글을 썼을떄*/
  const onchange = (e) => {
    let { value, name } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "text") {
      setText(value);
    }
  };

  return (
    <WriteContainer>
      <form onSubmit={onsubmit}>
        <input
          value={title}
          name="title"
          placeholder="제목.."
          onChange={onchange}
        />
        <textarea
          value={text}
          name="text"
          placeholder="내용.."
          onChange={onchange}
        />
        <button onSubmit={onsubmit}>Click!</button>
      </form>
    </WriteContainer>
  );
}
