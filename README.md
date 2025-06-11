# MCP Echo

A Model Context Protocol (MCP) server that provides an echo tool. This tool takes any text input and returns it prefixed with the word "echo".

## Features

- **Echo Tool**: Returns the provided text with "echo" prefixed to it
- **Stdio Transport**: Uses stdio transport for reliable communication with MCP clients
- **TypeScript**: Built with TypeScript for type safety
- **MCP Compatible**: Follows the Model Context Protocol specification

## Installation

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=echo&config=eyJjb21tYW5kIjoibm9kZSAvVXNlcnMvbWF1cmljaW9tZWlyZWxsZXMvbWNwLWVjaG8vYnVpbGQvaW5kZXguanMiLCJjd2QiOiIvVXNlcnMvbWF1cmljaW9tZWlyZWxsZXMvbWNwLWVjaG8iLCJlbnYiOnt9fQ%3D%3D)

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

### Start the MCP Server

Start the MCP server with stdio transport:
```bash
npm start
```

The server will run on stdio and communicate with MCP-compatible clients.

### Configure in Cursor

Add this to your MCP configuration (`.cursor/mcp.json` or in Cursor settings):
```json
{
  "mcpServers": {
    "echo": {
      "command": "node",
      "args": ["/Users/mauriciomeirelles/mcp-echo/build/index.js"],
      "cwd": "/Users/mauriciomeirelles/mcp-echo",
      "env": {}
    }
  }
}
```

**Note**: Make sure to replace `/Users/mauriciomeirelles/mcp-echo` with the actual absolute path to your project directory.

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

## Troubleshooting

- **Tools not showing**: Make sure the configuration path is correct and restart Cursor
- **Build errors**: Run `npm run build` to compile TypeScript code
- **Cursor not connecting**: Check that Node.js is accessible from Cursor's environment

## License

MIT 