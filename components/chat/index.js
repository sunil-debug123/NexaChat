import Image from 'next/image';
import React, { useState } from 'react';

const FileUploadAndQuestion = () => {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    if (!file || question.trim() === '') {
      alert('Please upload a file and enter a question.');
      return;
    }

    // Here, you can implement logic to handle the uploaded file and question.
    // For example, you can send the file to a server for processing and display the answer.

    // Reset the component state after submission.
    setFile(null);
    setQuestion('');
  };

  return (
    <div className="flex items-start space-x-6 p-4 rounded-lg bg-gray-100">
      <div className="shrink-0">
        <Image
          width={50}
          height={50}
          className="h-16 w-16 object-cover rounded-full"
          src="/img/nexa.jpg"
          alt="Nexa Logo"
        />
      </div>
      <div className="flex-grow">
        <div className="bg-white rounded-lg p-3">
          <p className="text-lg font-semibold mb-1">Hi, I am Nexa!</p>
          <p className="text-gray-600">
            Please upload your files here so we can start the chat.
          </p>
        </div>
      </div>
      <div className="w-48">
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            className="block w-full text-sm text-slate-500
              py-2 px-4 rounded-full border-0
              text-sm font-semibold
              bg-violet-50 text-violet-700
              hover:bg-violet-100
            "
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};

export default FileUploadAndQuestion;
