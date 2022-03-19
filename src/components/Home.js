import React, { useState, useEffect } from "react";
import Post from "./Post";
import { getDocs } from "firebase/firestore";

export default function Home({ myCollections, editClick, deleteClick }) {
  const [users, setUsers] = useState([]);

  //데이터베이스 get
  const getUsers = async () => {
    const data = await getDocs(myCollections);

    /* setUsers에 최종적으로 저장할때 id값도 같이저장한다 
    필드에는 제목과 내용만 저장되고 state에는 id값도 같이 저장된다*/
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    /*
    이걸 찍어보면 id값을 알수있다
    data.docs.map((doc) => {
      console.log(doc.id);
    });
    
    */
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Post users={users} editClick={editClick} deleteClick={deleteClick} />
    </>
  );
}
