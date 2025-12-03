# Sample Node.js Express API

This is a sample Node.js Express API with 4 endpoints, designed for AWS deployment.

## Endpoints

- `GET /health`: Health check.
- `GET /info`: Server information.
- `POST /echo`: Echoes back the JSON body.
- `GET /time`: Current server time.

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

## Docker

Build and run with Docker:

```bash
docker build -t aws-example .
docker run -p 3000:3000 aws-example
```
