# LiskSwap

A native decentralized exchange (DEX) for the Lisk blockchain. Swap tokens and provide liquidity with minimal fees and maximum transparency.

## Overview

LiskSwap enables peer-to-peer token trading and liquidity provision on Lisk. Users can:

- **Swap tokens** instantly with transparent pricing and low slippage
- **Provide liquidity** to earn a percentage of protocol fees
- **Trade without intermediaries** with full self-custody of assets

LiskSwap is built natively on Lisk to take advantage of its speed and low transaction costs.

## Features

- **Core Swaps**: Automated Market Maker (AMM) model for efficient token exchange
- **Liquidity Pools**: Deposit equal values of token pairs to earn swap fees
- **Gas Efficient**: Optimized for Lisk's high-throughput environment
- **Community Governance**: Token holders vote on protocol changes and parameters
- **Non-custodial**: Users maintain full control of their assets at all times

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Lisk testnet or mainnet access
- A Lisk wallet (e.g., Lisk Desktop, browser extension)

### Installation

```bash
git clone https://github.com/liskswap/liskswap
cd liskswap
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
LISK_RPC_URL=https://rpc.lisk.io
LISK_CHAIN_ID=40400
PRIVATE_KEY=your_private_key_here
NETWORK=mainnet
```

### Running Locally

```bash
npm run dev
```

The application will start on `http://localhost:3000`

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
npm start
```

## Smart Contracts

### Core Contracts

- **Router.sol**: Main entry point for swaps and liquidity operations
- **Factory.sol**: Creates and manages liquidity pools
- **Pair.sol**: Individual liquidity pool contract
- **Token.sol**: ERC-20 wrapper for native Lisk assets (if needed)

### Contract Deployment

```bash
npm run deploy:contracts --network mainnet
```

See `contracts/README.md` for detailed deployment instructions.

## API Reference

### Swap Tokens

```javascript
import { LiskSwap } from './services/LiskSwap';

const liskswap = new LiskSwap(rpcUrl);
const result = await liskswap.swap({
  tokenIn: '0x...',
  tokenOut: '0x...',
  amountIn: '1000000000000000000',
  minAmountOut: '950000000000000000',
  recipient: '0x...'
});
```

### Add Liquidity

```javascript
const result = await liskswap.addLiquidity({
  tokenA: '0x...',
  tokenB: '0x...',
  amountA: '1000000000000000000',
  amountB: '2000000000000000000',
  minAmountA: '990000000000000000',
  minAmountB: '1980000000000000000',
  to: '0x...'
});
```

### Get Price Quote

```javascript
const quote = await liskswap.getQuote({
  tokenIn: '0x...',
  tokenOut: '0x...',
  amount: '1000000000000000000'
});

console.log(quote.amountOut); // Expected output amount
console.log(quote.priceImpact); // Price impact percentage
```

See `docs/API.md` for complete API documentation.

## Contributing

We welcome contributions from the community. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes and write tests
4. Commit your changes (`git commit -m 'Add your feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

Please see `CONTRIBUTING.md` for detailed guidelines.

## Testing

We maintain comprehensive test coverage for all critical functions:

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test tests/swap.test.js
```

## Security

Security is our top priority. All smart contracts have been audited by [Audit Firm Name] (audit report in `audits/` directory).

### Reporting Security Issues

**Do not open a public issue for security vulnerabilities.** Please email security@liskswap.io with details. We appreciate responsible disclosure and will acknowledge all reports within 48 hours.

## Governance

LiskSwap is governed by holders of the SWAP token. Governance decisions include:

- Fee structure changes
- New feature proposals
- Liquidity incentive programs
- Treasury allocation

Visit [governance portal] to view active proposals and vote.

## Roadmap

**Phase 1 (Current)**: Core swap and liquidity pool functionality

**Phase 2**: Governance token launch and community voting

**Phase 3**: Advanced features (limit orders, multi-hop routing, liquidity mining)

**Phase 4**: Cross-chain bridges and ecosystem partnerships

See `ROADMAP.md` for detailed timelines and feature specifications.

## Documentation

- [API Documentation](docs/API.md)
- [Smart Contract Guide](contracts/README.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Contributing Guide](CONTRIBUTING.md)
- [Architecture Overview](docs/ARCHITECTURE.md)

## License

LiskSwap is licensed under the MIT License. See the `LICENSE` file for details.

## Community

- **Discord**: [Join our Discord](https://discord.gg/liskswap)
- **Twitter**: [@LiskSwap](https://twitter.com/liskswap)
- **Forum**: [Governance Forum](https://forum.liskswap.io)
- **Email**: hello@liskswap.io

## Support

Have questions? Check our [FAQ](docs/FAQ.md) or reach out to the team:

- **Developers**: dev@liskswap.io
- **General Support**: support@liskswap.io
- **Partnerships**: partnerships@liskswap.io

## Acknowledgments

LiskSwap is built on the principles of transparency and community. Thanks to:

- The Lisk Foundation for infrastructure and support
- Our auditors for ensuring smart contract security
- All community members who have contributed ideas and feedback

---

**Made with ❤️ for the Lisk ecosystem**
