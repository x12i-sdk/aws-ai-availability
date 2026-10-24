import assert from 'node:assert/strict';
import { getMetadata, listModels, listRegions } from 'aws-ai-availability';

const regions = listRegions();
const models = listModels();
assert(regions.length > 0);
assert(models.length > 0);
console.log('Bundled snapshot:', getMetadata());
console.log('First regions:', regions.slice(0, 3));
console.log('First models:', models.slice(0, 3));
