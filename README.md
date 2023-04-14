<p align="center">
  <a href="https://twitter.com/simonxpe/status/1645159203235930114/photo/1" target="blank"><img src="https://pbs.twimg.com/media/FtTHkhiWIAAm83i?format=jpg&name=large" width="100%" alt="EthCusco Logo" /></a>
</p>

<h1 align="center">EthCusco</h1>
<p align="center">A decentralized application that allows users to watch smoke level data from Ethereum Blockchain.</p>
<p align="center">
<a href="https://hardhat.org/" target="_blank"><img src="https://img.shields.io/badge/Hardhat-2.13.1-blue" alt="Hardhat Framework" /></a>
<a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next.js-13-green" alt="Next.js Framework" /></a>
<a href="https://soliditylang.org/" target="_blank"><img src="https://img.shields.io/badge/Solidity-0.8.7-red" alt="Solidity Programming Language" /></a>
</p>

## ⚠️ Testnet Blockchain Network

The testnet network used in this application is [SEPOLIA](https://sepolia.etherscan.io/) on [ETHEREUM](https://ethereum.org/en/)


## Environment Variables

To set up the environment variables for the application, follow these steps:

1. Create a copy of the `.example.env.local` file and rename it to `.env.local`:

```bash
cp .example.env.local .env.local
```

The following environment variables are used in this application:


| Variable Name                     | Description                                                             | Example                                                                   |
| --------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------|
| `NEXT_PUBLIC_WSS_ALCHEMY`        | WebSocket Secure (WSS) URL of Alchemy API for Ethereum                   | `wss://eth-sepolia.g.alchemy.com/v2/5N7C78UQIqqc4eN0cCBxO2wF_Z3ecJRq`     |
| `NEXT_PUBLIC_CONTRACT_ADDRESS`    | Ethereum contract address                                                | `0xf713d84bc1AC82d0a7B0CeB405Ce1C8F47dC9806`                             |
| `NEXT_PUBLIC_EVENT`               | Event name in the Ethereum contract to listen for                        | `RequestPrice`                                                            |

## Installation

To run EthCusco locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/frankdev7/ethcusco.git

```

2. Install dependencies:

```bash
cd ethcusco
npm install
```

3. Start the development server:

```bash
npm run dev
```


4. Open `http://localhost:3000` in your web browser to access the EthCusco application.

## Usage

Once you have the EthCusco application running locally, you can watch:

- The smoke level

## Contributing

If you would like to contribute to EthCusco, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with clear commit messages
4. Push your changes to your fork
5. Submit a pull request

## License

EthCusco is licensed under the MIT License. See `LICENSE` for more information.
