# MCP Echo

A Model Context Protocol (MCP) server that provides an echo tool. This tool takes any text input and returns it prefixed with the word "echo".

## Features

- **Echo Tool**: Returns the provided text with "echo" prefixed to it
- **TypeScript**: Built with TypeScript for type safety
- **MCP Compatible**: Follows the Model Context Protocol specification

## Installation

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=echo&config=eyJjb21tYW5kIjoibm9kZSBidWlsZC9pbmRleC5qcyIsImN3ZCI6Ii9Vc2Vycy9tYXVyaWNpb21laXJlbGxlcy9tY3AtZWNobyJ9)

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Build

Compile the TypeScript code:
```bash
npm run build
```

## Usage

Start the MCP server:
```bash
npm start
```

The server will run on stdio and can be integrated with MCP-compatible clients.

### Example

When you call the `echo` tool with the text "Hello World", it will return:
```
echo Hello World
```

## Development

To run in development mode with automatic recompilation:
```bash
npm run dev
```

## Tool Schema

The echo tool accepts:
- `text` (string, required): The text to echo back with "echo" prefix

## License

MIT 