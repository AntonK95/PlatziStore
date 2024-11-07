// src/server.ts
import express, { Request, Response } from 'express';
import { deleteDataById, fetchData, fetchDataByCategory, fetchDataById } from './services/apiReq';
import { DataItem } from './interface/interface';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  try {
    const data: DataItem[] = await fetchData();
    res.json(data);
  } catch (error) {
    console.log('error fetching data', error);
    res.status(404).send('Error fetching data');
  }
});

app.get('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const data: DataItem = await fetchDataById(id);
    res.json(data);
  } catch (error) {
    console.log('Error getting data by ID:', error);
    res.status(404).send(`Error getting item with ID ${req.params.id}`);
  }
});

// Radera ett item baserat på id
app.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const deletedItem: DataItem = await deleteDataById(id);
    res.json(deletedItem);
  } catch (error) {
    console.log('Error getting data by ID:', error);
    res.status(404).send(`Error getting item with ID ${req.params.id}`);
  }
});

// Filtrera produkter baserat på category
app.get('/category/:category', async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const data: DataItem[] = await fetchDataByCategory(category);
    res.json(data);
  } catch (error) {
    console.log('Could not filter by category');
    console.error(`Error fetching data for category ${req.params.category}:`, error);
    res.status(404).send('Error fetching data for this category');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
