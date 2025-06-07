import express from 'express';
import fs from 'fs';
const router = express.Router();

router.post('/webhook', (req, res) => {
  const data = req.body;
  fs.writeFileSync('./backend/focus-navigator/test-data.json', JSON.stringify(data, null, 2));
  res.status(200).send('Garmin data received');
});

export default router;
