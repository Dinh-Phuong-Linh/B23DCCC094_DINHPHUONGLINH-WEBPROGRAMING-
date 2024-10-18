import logo from './logo.svg';
import './App.css';
import React from 'react';

function WorkListItemComponent({ work }) { 
  return (
    <li>
      {work}
    </li>
  );
}

const workList = [
  'Học lập trình Web với React',
  'Gửi email bài tập về nhà',
  'Học từ vựng mỗi ngày',
  'Viết tiểu luận môn triết học'
];

function WorkList() {
  return (
    <ul>
      {workList.map((work, index) => (
        <WorkListItemComponent key={index} work={work} />
      ))}
    </ul>
  );
}
function App() {
  return (
    <div>
      <h1>My work</h1>
      <WorkList />
    </div>
  );
}

export default App;
