const express = require('express');
const { runDatabase } = require('./config/db');

const app = express();


runDatabase();
