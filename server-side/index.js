import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import initApp from './src/initApp.js';

// dotenv.config({ path : path.resolve('./config/.env') });

initApp(express);


