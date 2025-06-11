#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

class EchoServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: 'mcp-echo',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  private setupErrorHandling(): void {
    this.server.onerror = (error) => console.error('[MCP Error]', error);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  private setupToolHandlers(): void {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'echo',
            description: 'Echo the provided text with "echo" prefixed to it',
            inputSchema: {
              type: 'object',
              properties: {
                text: {
                  type: 'string',
                  description: 'The text to echo back with "echo" prefix',
                },
              },
              required: ['text'],
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'echo') {
        const text = args?.text as string;
        if (!text) {
          throw new Error('Text parameter is required');
        }

        return {
          content: [
            {
              type: 'text',
              text: `echo ${text}`,
            },
          ],
        };
      }

      throw new Error(`Unknown tool: ${name}`);
    });
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('MCP Echo Server running on stdio');
  }
}

const server = new EchoServer();
server.run().catch(console.error); 