import React from 'react';
import Image from 'next/image';

const ChatMessage = ({ message, isNexa }) => {
  return (
    <div className={`flex ${isNexa ? 'items-start' : 'items-end'}`}>
      <div className={`shrink-0 ${isNexa ? 'mr-2' : 'ml-2'}`}>
        <Image
          width={40}
          height={40}
          className="h-10 w-10 object-cover rounded-full"
          src="/img/nexa.jpg"
          alt="Nexa Logo"
        />
      </div>
      <div className={`max-w-md ${isNexa ? 'bg-gray-100 text-gray-800' : 'bg-blue-100 text-white'} p-2 rounded-lg`}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
