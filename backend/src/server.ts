// src/server.ts
import express, { Request, Response } from 'express';
import axios from 'axios';
import { fetchData, fetchDataById } from './services/apiReq';
import { log } from 'console';

const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint för att hämta data från API:n
// app.get('/api/data', async (req, res) => {
//   try {
//     const response = await axios.get('https://antonk95.github.io/dummy-api/data.json');
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).send("Error fetching data");
//   }
// });

app.get('/', async (req: Request, res: Response) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (error) {
    console.log('error fetching data', error);
    res.status(404).send('Error fetching data');
  }
});

app.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await fetchDataById(id);
    res.json(data);
  } catch (error) {
    console.log('Error getting data by ID:', error);
    res.status(404).send(`Error getting item with ID ${req.params.id}`);
  }
})


app.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await fetchDataById(id);
    res.json(data);
  } catch (error) {
    console.log('Error getting data by ID:', error);
    res.status(404).send(`Error getting item with ID ${req.params.id}`);
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
