// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

console.log('this is from delayed')
// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
