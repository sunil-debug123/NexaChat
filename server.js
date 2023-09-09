const express = require('express');
const multer = require('multer');
const pdf = require('pdf-parse');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const pdfData = await pdf(req.file.buffer);
    const pdfText = pdfData.text;

    // Implement your logic for question answering here.
    // For this example, we'll return a static response.
    const response = "This is a static response based on the uploaded PDF.";

    res.status(200).json({ response });
  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).json({ message: 'Error processing file' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
