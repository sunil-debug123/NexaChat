// pages/api/upload.js
import multer from 'multer';
import pdf from 'pdf-parse';
import { NextApiRequest, NextApiResponse } from 'next';

const upload = multer();

export default async function handler(NextApiRequest, NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const buffer = req.body.file[0].buffer;
    const pdfData = await pdf(buffer);
    const pdfText = pdfData.text;

    // Implement your logic for question answering here.
    // For this example, we'll return a static response.
    const response = "This is a static response based on the uploaded PDF.";

    res.status(200).json({ response });
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).json({ message: 'Error processing file' });
  }
}
