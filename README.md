# Millio Cryptocurrency Tracker 📊🚀

## Overview

Millio is a mobile cryptocurrency tracking application built with React Native and Expo, providing real-time cryptocurrency market information and personal watchlist management.

## Features

- 🔍 Real-time cryptocurrency market data
- 🌓 Dynamic light/dark theme support
- 📱 Responsive mobile interface
- 💹 Cryptocurrency price tracking
- ⭐ Personal watchlist management
- 🔄 Periodic data refresh

## Technology Stack

### Core Technologies
- React Native
- Expo
- TypeScript

### State Management
- Zustand
- AsyncStorage

### Data Fetching
- TanStack Query
- Coinlore API

### UI Components
- React Native UI Libraries
- Tailwind CSS for React Native

### Navigation
- Expo Router

## Prerequisites

- Node.js (v18+)
- npm
- Android Studio or Xcode (for emulators)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/TzzJokerzzT/currency-tracker.git
cd currency-tracker
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm start
```

### Running on Specific Platforms

- iOS Simulator: 
```bash
npm start --ios
```

- Android Emulator:
```bash
npm start --android
```

- Web:
```bash
npm start --web
```

## Project Structure

```
millio-technical-test/
│
├── app/                # Main application screens
├── components/         # Reusable UI components
├── infrastructure/     # Core logic, hooks, adapters
│   ├── api/            # API integration
│   ├── hooks/          # Custom React hooks
│   └── utils/          # Utility functions
├── store/              # Global state management
└── view/               # Page-specific components
```

## Key Components

- `HomePage`: Displays cryptocurrency market list
- `WatchListPage`: User's saved cryptocurrencies
- `InformationPage`: Detailed cryptocurrency information
- `UserPage`: User settings and theme toggle

## API Integration

The app uses the Coinlore API to fetch real-time cryptocurrency data. Data is adapted and transformed using custom adapters for consistent formatting.

## State Management

Zustand is used for global state management, with AsyncStorage for persistent storage of user preferences and watchlist.

## Performance Optimization

- Periodic data refresh (every 20 seconds)
- Efficient data caching
- Lightweight data transformations

## Customization

- Theme toggling (light/dark mode)
- Watchlist management
- Cryptocurrency tracking

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Alexis Buelvas - alexjesus-4856@hotmail.com

Project Link: [https://github.com/yourusername/millio-technical-test](https://github.com/yourusername/millio-technical-test)
