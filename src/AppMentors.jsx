import React, { useState } from 'react';

export default function AppMentors(props) {
  const [person, setPerson] = useState({
    name: 'John',
    title: '개발자',
    mentors: [
      {
        name: 'Jason',
        title: '리액트 개발자'
      },
      {
        name: 'Bob',
        title: '러스트 개발자'
      }
    ]
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는:
      </p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button 
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꿀까요?`);
          const current = prompt(`이름을 무엇으로 바꿀까요?`);
          //! person.mentors[0].name = current; // 이와 같이 사용 불가, state는 불변성을 유지해야 함, 객체를 새로 만들어야 함
          //! setPerson(person); 
          setPerson({
            ...person,
            mentors: person.mentors.map(mentor => {
              if(mentor.name === prev) {
                return {
                  ...mentor,
                  name: current
                }
              }
              return mentor;
            })
          })
        }}
      >
        멘토 이름 변경
      </button>
    </div>
  );
}

