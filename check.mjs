import { existsSync } from 'node:fs'
if (existsSync('FAIL')) { console.error('check failed'); process.exit(1) }
