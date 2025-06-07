import express from 'express';
import dotenv from 'dotenv';
import focusRouter from './focus-navigator/router';

dotenv.config();
const app = express();
app.use(express.json());

// Integriere den Fokus-Zeitnavigator-Router
app.use('/api/focus', focusRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Spark Sophia läuft auf http://localhost:${PORT}`);
});
