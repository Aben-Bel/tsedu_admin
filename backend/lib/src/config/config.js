"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const path_1 = require("path");
switch (process.env.NODE_ENV || 'development') {
    case 'development':
        console.log("Environment is 'development'");
        (0, dotenv_1.config)({
            path: (0, path_1.resolve)(__dirname, '../../.env.development')
        });
        console.log('secret', process.env.SECRET);
        break;
    case 'test':
        (0, dotenv_1.config)({
            path: (0, path_1.resolve)(__dirname, '../.env.test')
        });
        break;
    // Add 'staging' and 'production' cases here as well!
    default:
        throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`);
}
