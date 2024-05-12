"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './chatbot.css'

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<any>([]);

  useEffect(() => {
    fetchChatList();
  }, []);

  const fetchChatList = async () => {
    try {
      const response = await axios.get('YOUR_API_ENDPOINT');
      setConversation(response.data);
    } catch (error) {
      console.error('Error fetching chat list:', error);
    }
  };

  const handleChange = (e:any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (message.trim() === '') return;

    // Send message to API endpoint
    try {
      // Update conversation with user's message
      const my_conversation = { role: 'user', content: message };
      setConversation((prevMessage:any)=>([...prevMessage, my_conversation]));
      setMessage('');
      const messageResponse = await axios.post(' http://127.0.0.1:5000/chatbot-response', { content: message, role: 'user' });
      if (messageResponse.status === 200){
        const bot_convo = {role:'assistant',content:messageResponse.data.response}
        setConversation((prevMessage:any)=>([...prevMessage, bot_convo]))
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }

    // Clear input field after sending message
  };
  console.log(conversation)

  return (
    <div className="chatbot-container">
      <div className="chat-window">
      {conversation && conversation.map((item:any, index:any) => (
          <div key={index} className={`message ${item.role === 'user' ? 'user' : 'assistant'}`}>
            {item.content}
          </div>
        ))}
      </div>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
