import React, { useState } from 'react';

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: 'John',
    title: '개발자',
    mentor:
      {
        name: 'Jason',
        title: '리액트 개발자'
      }
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name}({person.mentor.title})입니다.
      </p>
      <button 
        onClick={() => {
          const name = prompt(`What's your mentor's name?`);
          setPerson({
            ...person,
            mentor: {
              ...person.mentor,
              name: name
              //* 'name' 단독 사용도 가능
            }
          });
      }}
      >
        멘토 이름 변경
      </button>
      <button
        onClick={() => {
          const title = prompt(`What's your mentor's title?`);
          setPerson({
            ...person,
            mentor: {
              ...person.mentor,
              title: title
            }
          });
        }}>
        멘토 직책 변경
      </button>
    </div>
  );
}

