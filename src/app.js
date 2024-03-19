import app from './index.js';

// configure the port
import 'dotenv/config'
const PORT = process.env.PORT || 3000;

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});