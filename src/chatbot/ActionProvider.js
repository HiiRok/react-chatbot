import { useNavigate } from 'react-router-dom';
import React from 'react';
import { createClientMessage } from 'react-chatbot-kit';
import { useSelector, useDispatch } from 'react-redux'; 
import {
  setSelectedDate,
  setSelectedTimeSlot,
  setUserName,
  setUserAge,
} from '../redux/enrollmentSlice'; 


const ActionProvider = ({ createChatBotMessage, setState, children }) =>{
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const enrollment = useSelector((state) => state.enrollment);

 

  const handleGotIt = () => {
    const message = createClientMessage("Got it!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    showCalendarOptions();
  };

  const showCalendarOptions = () => {
    const message = createChatBotMessage("Pick a Date!",{
      widget: "calendar", 
    });
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const selectDateHandler = (date) => {
    dispatch(setSelectedDate(date));
    console.log(date);
    selectTimeSlot();
  };

  const handleName = (name) => {
    const message = name;
    dispatch(setUserName(name));
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    selectAge();
  };

  const selectTimeSlot = () => {
    const message = createChatBotMessage("Pick a time", {
      widget: "time",
    });   
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  const selectTimeSlotHandler = (time) => {
    dispatch(setSelectedTimeSlot(time));
    console.log(time);
    const message = createChatBotMessage("Enter Your Name");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  const selectAge = () => {
    const message = createChatBotMessage("Pick age!", {
      widget: "age",
    });
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    })); 
  }

  const handleAge = (inputage) => {
    dispatch(setUserAge(inputage));
    console.log(inputage);
    const message = createChatBotMessage("Thank you. In 5 seconds, bot will exit");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
    
    setTimeout(() => {
      navigate("/lastpage")
    }, 5000);
  }

  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            showCalendarOptions,
            selectDateHandler,
            handleName,
            selectTimeSlot,
            selectTimeSlotHandler,
            selectAge,
            handleAge
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
