import React, { useState, useRef } from 'react';
import ChatMessage from '../ChatMessage';

const FileUploadAndQuestion = () => {
  const [files, setFiles] = useState([]);
  const [showQuestionField, setShowQuestionField] = useState(false);
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { text: 'Hi, I am Nexa! Please upload your files here so we can start the chat.', isNexa: true },
  ]);

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    setShowQuestionField(true);
  };

  const handleDeleteFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);

    // Clear the input file field
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    if (!showQuestionField || (files.length === 0 && question.trim() === '')) {
      alert('Please upload at least one file or enter a question.');
      return;
    }

    // Simulate user response in chat history
    if (question.trim() !== '') {
      const userMessage = { text: question, isNexa: false };
      setChatHistory([...chatHistory, userMessage]);
    }

    // Simulate Nexa's response in chat history
    const nexaResponse = { text: "What's your question?", isNexa: true };
    setChatHistory([...chatHistory, nexaResponse]);

    // Reset the component state after submission.
    setFiles([]);
    setQuestion('');
    setShowQuestionField(false);

    // Clear the input file field
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-lg">
      <div className="mb-4">
        <div className="text-lg font-semibold mb-2">Chat with Nexa</div>
        <div className="space-y-2">
          {chatHistory.map((message, index) => (
            <ChatMessage key={index} message={message.text} isNexa={message.isNexa} />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            ref={fileInputRef}
            type="file"
            className="block w-full text-sm text-slate-500 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100"
            onChange={handleFileChange}
            multiple
          />
        </label>
        {showQuestionField && (
          <div className="mt-4">
            <div className="flex">
              <input
                type="text"
                className="flex-grow p-2 rounded-l border bg-white text-slate-500"
                placeholder="Type your question..."
                value={question}
                onChange={handleQuestionChange}
              />
              <button className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600" onClick={handleSubmit}>
                Send
              </button>
            </div>
          </div>
        )}
      </div>
      {files.length > 0 && (
        <div className="mt-4">
          <div className="text-sm font-medium mb-2">Uploaded Files:</div>
          {files.map((file, index) => (
            <div key={index} className="flex items-center space-x-2">
              <p className="text-sm">{file.name}</p>
              <button
                className="text-red-600 text-sm font-medium hover:text-red-800"
                onClick={() => handleDeleteFile(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploadAndQuestion;
