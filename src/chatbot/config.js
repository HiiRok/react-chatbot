import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { createClientMessage } from 'react-chatbot-kit';

import Options from "../components/Options/Options";
import Calendar from "../components/Options/Calendar"; 
import TimeSlots from "../components/Options/TimeSlots";

import AgeSelection from "../components/Options/AgeSelection";


const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "options", 
    }),
  ],
  customComponents: {
   header: () => <div style={{ fontWeight:"bolder",color:"darkblue",fontFamily:"American Typewriter, serif",padding: "5px", borderRadius: "3px" }}>Happilyever</div>,
  },
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "calendar", 
      widgetFunc: (props) => <Calendar {...props} />,
    },
    {
      widgetName: "time", 
      widgetFunc: (props) => <TimeSlots {...props} />,
    },
    {
      widgetName: "age", 
      widgetFunc: (props) => <AgeSelection {...props} />,
    },
  ],
};

export default config;
