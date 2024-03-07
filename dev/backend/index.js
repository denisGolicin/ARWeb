import express from 'express';
import { connect } from 'mongoose';
import { json } from 'body-parser';
import { PORT, MONGODB_URI } from './config';

const app = express();

app.use(json());

// connect to MongoDB
connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => console.error('MongoDB connection error:', error));