import React, { useReducer } from "react";
import personReducer from "./reducer/person-recuder";

export default function AppMentors(props) {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꿀까요?`);
    const current = prompt(`이름을 무엇으로 바꿀까요?`);
    dispatch({type: 'updated', prev, current}); 
  };
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직업은?`);
    dispatch({type: 'added', name, title});
  };
  const handleDelete = () => {
    const name = prompt(`멘토의 이름은?`);
    dispatch({type: 'deleted', name});
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토 이름 변경</button>
      <button onClick={handleAdd}>멘토 추가</button>
      <button onClick={handleDelete}>멘토 삭제</button>
    </div>
  );
}

const initialPerson = {
  name: "John",
  title: "개발자",
  mentors: [
    {
      name: "Jason",
      title: "리액트 개발자",
    },
    {
      name: "Bob",
      title: "러스트 개발자",
    },
  ],
};
