// Imports des images de projets
import BlockchainIcon from '@/assets/icons/svg/blockchain.svg?react'
import EthereumIcon from '@/assets/icons/svg/ethereum.svg?react'
import SolidityIcon from '@/assets/icons/svg/solidity.svg?react'
import SmartContractIcon from '@/assets/icons/svg/smart-contract.svg?react'
import Web3Icon from '@/assets/icons/svg/web3.svg?react'
import DAppIcon from '@/assets/icons/svg/dapp.svg?react'
import NFTIcon from '@/assets/icons/svg/nft.svg?react'
import DockerIcon from '@/assets/icons/svg/docker.svg?react'
import JavaScriptIcon from '@/assets/icons/svg/javascript.svg?react'
import TypeScriptIcon from '@/assets/icons/svg/typescript.svg?react'
import ReactIcon from '@/assets/icons/svg/react.svg?react'
import NextJSIcon from '@/assets/icons/svg/nextjs.svg?react'
import WebIcon from '@/assets/icons/svg/web.svg?react'
import FigmaIcon from '@/assets/icons/svg/figma.svg?react'
import NodeJSIcon from '@/assets/icons/svg/nodejs.svg?react'
import ExpressIcon from '@/assets/icons/svg/express.svg?react'
import MongoDBIcon from '@/assets/icons/svg/mongodb.svg?react'
import PostgreSQLIcon from '@/assets/icons/svg/postgre.svg?react'
import MySQLIcon from '@/assets/icons/svg/mysql-icon.svg?react'
import SequelizeIcon from '@/assets/icons/svg/sequelize.svg?react'
import APIIcon from '@/assets/icons/svg/api.svg?react'
import FullStackIcon from '@/assets/icons/svg/full-stack.svg?react'
import imaginifyLogo from '@/assets/img/Screenshot 2026-06-17 232720.png?url'
import novmuseraiLogo from '@/assets/img/Screenshot 2026-06-18 002202.png?url'
import mainUILogo from '@/assets/img/main-ui (1).png?url'
import solidityStorageLogo from '@/assets/img/Screenshot 2026-06-18 005547.png?url'

const imaginifyImage = imaginifyLogo
const novmuseraiImage = novmuseraiLogo
const decentralizedFundingImage = mainUILogo
const solidityStorageImage = solidityStorageLogo

const GITHUB_BASE_URL = 'https://github.com/Oshima-921/'

const gitUrlConstructor = (projectName: string): string => {
  return `${GITHUB_BASE_URL}${projectName}`
}

export const technos = [
  'Blockchain',
  'Ethereum',
  'Solidity',
  'Smart Contracts',
  'Web3.js',
  'DApp Development',
  'NFT Development',
  'Docker',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Web Development',
  'Figma',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'Sequelize',
  'API Integration',
  'Full Stack Development'
] as const

export const projects = [
  {
    name: 'Imaginify',
    summary: 'A refined AI-powered image enhancement platform built with Next.js and TypeScript, featuring a responsive TailwindCSS interface, seamless MongoDB-backed persistence, and a polished user experience for creative editing workflows.',
    technos: ['Next.js', 'TypeScript', 'TailwindCSS', 'MongoDB', 'React.js', 'Web Development', 'Figma', 'API Integration'],
    url: {
      icon: imaginifyImage,
      github: gitUrlConstructor('imaginify'),
      server: 'https://ai-imaginify.netlify.app/'
    }
  },
  {
    name: 'NovmuserAI',
    summary: 'A composed AI platform that emphasizes reliable model integration, stable API orchestration, and a maintainable full-stack architecture for consistent delivery.',
    technos: ['TypeScript', 'Node.js', 'React.js', 'API Integration', 'Full Stack Development', 'Hugging Face API', 'OpenAI API', 'Self-trained Models'],
    url: {
      icon: novmuseraiImage,
      github: gitUrlConstructor('novmuserai'),
      server: 'https://novmuserai.com/'
    }
  },
  {
    name: 'Decentralized Funding System',
    summary: 'A decentralized crowdfunding DAO platform focused on secure smart contract funding flows, governance transparency, and a scalable full-stack deployment architecture.',
    technos: ['Solidity', 'Ethereum', 'Smart Contracts', 'OpenZeppelin', 'Hardhat', 'Web3.js', 'TypeScript', 'Smart Contract Testing', 'Security & Audits'],
    url: {
      icon: decentralizedFundingImage,
      github: gitUrlConstructor('Decentralized-Funding'),
      server: 'https://crowdfundingdaoapp.vercel.app/'
    }
  },
  {
    name: 'Solidity-Contract Storage',
    summary: 'A compact Solidity example showcasing secure contract storage patterns, audit-friendly structure, and integration-ready interfaces for decentralized applications.',
    technos: ['Solidity', 'EVM', 'OpenZeppelin', 'Hardhat', 'Foundry', 'Smart Contracts', 'Web3.js', 'Testing', 'Security & Audits'],
    url: {
      icon: solidityStorageImage,
      github: gitUrlConstructor('Solidity-Contract-Storage'),
    }
  }
]

export const stack = [
  {
    title: 'Blockchain',
    technos: [
      {
        name: 'Blockchain',
        IconComponent: BlockchainIcon
      },
      {
        name: 'Ethereum',
        IconComponent: EthereumIcon
      },
      {
        name: 'Solidity',
        IconComponent: SolidityIcon
      },
      {
        name: 'Smart Contracts',
        IconComponent: SmartContractIcon
      },
      {
        name: 'Web3.js',
        IconComponent: Web3Icon
      },
      {
        name: 'DApp Development',
        IconComponent: DAppIcon
      },
      {
        name: 'NFT Development',
        IconComponent: NFTIcon
      },
      {
        name: 'Docker',
        IconComponent: DockerIcon
      }
    ]
  },
  {
    title: 'Frontend',
    technos: [
      {
        name: 'JavaScript',
        IconComponent: JavaScriptIcon
      },
      {
        name: 'TypeScript',
        IconComponent: TypeScriptIcon
      },
      {
        name: 'React.js',
        IconComponent: ReactIcon
      },
      {
        name: 'Next.js',
        IconComponent: NextJSIcon
      },
      {
        name: 'Web Development',
        IconComponent: WebIcon
      },
      {
        name: 'Figma',
        IconComponent: FigmaIcon
      }
    ]
  },
  {
    title: 'Backend',
    technos: [
      {
        name: 'Node.js',
        IconComponent: NodeJSIcon
      },
      {
        name: 'Express.js',
        IconComponent: ExpressIcon
      },
      {
        name: 'MongoDB',
        IconComponent: MongoDBIcon
      },
      {
        name: 'PostgreSQL',
        IconComponent: PostgreSQLIcon
      },
      {
        name: 'MySQL',
        IconComponent: MySQLIcon
      },
      {
        name: 'Sequelize',
        IconComponent: SequelizeIcon
      },
      {
        name: 'API Integration',
        IconComponent: APIIcon
      },
      {
        name: 'Full Stack Development',
        IconComponent: FullStackIcon
      }
    ]
  }
]
