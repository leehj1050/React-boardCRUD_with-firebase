import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Write from "./components/Write";
import Edit from "./components/Edit";
import { db } from "./firebase-config";
import { collection, deleteDoc, doc } from "firebase/firestore";

const App = () => {
  const myCollections = collection(db, "users");
  /*create*/
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  /*edit*/
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");
  const [userId, setUserId] = useState("");

  /*Edit*/
  const editClick = async (title, text, id) => {
    setEditTitle(title);
    setEditText(text);
    setUserId(id);
  };

  /*Delete*/
  const deleteClick = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              myCollections={myCollections}
              editClick={editClick}
              deleteClick={deleteClick}
            />
          }
        />
        <Route
          path="/write"
          element={
            <Write
              myCollections={myCollections}
              title={title}
              setTitle={setTitle}
              text={text}
              setText={setText}
            />
          }
        />
        <Route
          path="/edit"
          element={
            <Edit
              title={title}
              text={text}
              setEditTitle={setEditTitle}
              setEditText={setEditText}
              editTitle={editTitle}
              editText={editText}
              userId={userId}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
