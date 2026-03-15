import express from 'express';
import { join } from 'node:path';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('dist'));
app.get('/:all*', (_, res) => {
  res.sendFile(join(process.cwd(), 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

