import React from 'react';
import { useSelector } from 'react-redux';
import "./lastPage.css"

const LastPage = () => {
  const { userName, userAge } = useSelector((state) => state.enrollment);

  return (
    <div className='lastPage'>
      <h1 className='lastH1'>Your name {userName} aged {userAge} has been added to the student system. You may now exit.</h1>
    </div>
  );
};

export default LastPage;
