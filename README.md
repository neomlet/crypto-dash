# 🚀 Crypto Dashboard

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue)](https://www.typescriptlang.org/)
[![CoinGecko API](https://img.shields.io/badge/CoinGecko_API-v3-green)](https://www.coingecko.com/)

Real-time cryptocurrency market tracker with interactive charts and portfolio management features.

![Dashboard Preview](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3BqY2Z4bWQ0bjJ6bXc3eXU1d2V2dXp5aG5tN2R1emRhaGx4eWxjdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8JTDFsZfqVH6T3qwpC/giphy.gif)

## ✨ Features

- 📊 Real-time price updates for 1000+ cryptocurrencies
- 📈 Interactive candlestick & line charts (1h/24h/7d/1y)
- 🔍 Advanced search and filters (Gainers/Losers)
- 💼 Virtual portfolio management
- 🔔 Price alerts and notifications
- 🌓 Dark/Light theme support

## 🛠️ Tech Stack

**Frontend:**  
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript)
![Zustand](https://img.shields.io/badge/-Zustand-764ABC?logo=redux)
![Recharts](https://img.shields.io/badge/-Recharts-FF6384?logo=chart.js)

**Backend/API:**  
![CoinGecko](https://img.shields.io/badge/-CoinGecko_API-4A90E2)
![WebSocket](https://img.shields.io/badge/-WebSocket-010101?logo=socket.io)

**Deployment:**  
![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel)
![AWS](https://img.shields.io/badge/-AWS_Amplify-232F3E?logo=amazon-aws)

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/neomlet/crypto-dash.git
cd crypto-dash
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```env
VITE_COINGECKO_API_KEY=your_api_key_here
VITE_WS_PROVIDER_URL=wss://ws.coingecko.com/v3
```
4. **Start development server**
```bash
npm run dev
```
## 📂 Project Structure
```
crypto-dash/
├── src/
│   ├── components/     # React components
│   ├── stores/         # Zustand state management
│   ├── types/          # TypeScript interfaces
│   ├── utils/          # Helper functions
│   └── App.tsx         # Main application entry
├── public/             # Static assets
└── vite.config.ts      # Build configuration
```
