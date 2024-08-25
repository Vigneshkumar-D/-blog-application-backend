const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRoutes = require('./src/routes/postRoutes');
const userRoutes = require('./src/routes/userRoutes');
const commentRoutes = require('./src/routes/commentRoutes'); 
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swaggerConfig');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', postRoutes);
app.use('/api', userRoutes);
app.use('/api', commentRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
