import React from "react";
import { PostContainer, PerPost } from "../styles/postCss";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Post({ users, editClick, deleteClick }) {
  const navigate = useNavigate();

  return (
    <PostContainer>
      {users.map((item, idx) => {
        return (
          <PerPost key={idx}>
            <h1>{item.제목}</h1>
            <h2>{item.내용}</h2>
            <BsPencilFill
              className="editIcon"
              onClick={() => {
                navigate("/edit");
                editClick(item.제목, item.내용, item.id);
              }}
            />
            <BsTrashFill
              className="delIcon"
              onClick={() => {
                deleteClick(item.id);
              }}
            />
          </PerPost>
        );
      })}
    </PostContainer>
  );
}
