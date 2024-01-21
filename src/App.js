import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

function App() {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0])
  }

  const handleUpload = () => {
    const formData = new FormData()
    formData.append('pdfFile', selectedFile)

    fetch('http://your-server-endpoint/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data extracted:', data)
        // Handle the extracted data as needed
      })
      .catch(error => console.error('Error uploading file:', error))
  }

  return (
    <div className="App">
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Select PDF File</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>

        <Button variant="primary" onClick={handleUpload}>
          Upload and Extract Data
        </Button>
      </Form>
    </div>
  )
}

export default App
