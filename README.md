# Technical Interview Project

A React + TypeScript + Vite application designed for technical interview practice. This project demonstrates various
React concepts including state management with Redux, component architecture, API integration, and modern development
practices.

## 🚀 Features

- **React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **Redux** for state management
- **React Markdown** for rendering markdown content
- **ESLint** with TypeScript support for code quality
- **Prettier** for code formatting

## 📁 Project Structure

```
src/
├── App.tsx                 # Main application component with Redux Provider
├── main.tsx               # Application entry point
├── index.css              # Global styles
├── componenst/            # Components directory
│   ├── Tasks/             # Tasks component for displaying markdown content
│   └── SomeComponent/     # Additional component structure
├── types/                 # TypeScript type definitions
└── assets/                # Static assets

store/                     # Redux store configuration
├── store.ts              # Main store setup
├── store.types.ts        # Store type definitions
├── example/              # Example reducer and actions
│   ├── example.reducer.ts
│   ├── example.actions.ts
│   └── example.consts.ts

mocks/                    # Mock data
└── uses.json.ts         # Mock user data

public/                   # Public assets
└── tasks.md             # Task requirements in markdown format
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.9.2
- **Build Tool**: Vite 7.1.3
- **State Management**: Redux 5.0.1 + React Redux 9.2.0
- **Markdown Rendering**: React Markdown 10.1.0
- **Code Quality**: ESLint 9.34.0 + Prettier 3.6.2

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd day1_techInterview
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Start the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build the application for production
- `pnpm lint` - Run ESLint to check code quality
- `pnpm preview` - Preview the production build locally

## 🎯 Project Goals

This project serves as a technical interview practice application with the following objectives:

### Current Implementation

- ✅ Basic React + TypeScript setup with Vite
- ✅ Redux store configuration with example reducer
- ✅ Tasks component that fetches and displays markdown content
- ✅ Mock user data structure

### Planned Features (Based on tasks.md)

- [ ] Header and Footer components with styling
- [ ] Real-time clock component in footer
- [ ] Counter component with increment/decrement functionality
- [ ] Redux integration for counter state management
- [ ] API integration with JSONPlaceholder
- [ ] User filtering functionality
- [ ] Array flattening utility

## 🔧 Development

### Code Style

- ESLint configuration with TypeScript support
- Prettier for consistent code formatting
- TypeScript strict mode enabled

### State Management

The application uses Redux for state management with the following structure:

- `example` reducer containing:
    - `headerText`: Text to display in header
    - `footerHtml`: HTML content for footer
    - `arrayToFlat`: Nested array for flattening demonstration
    - `counter`: Counter state
    - `users`: User data array

### Component Architecture

- Functional components with TypeScript
- React hooks for state management
- Component composition pattern

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Markdown](https://github.com/remarkjs/react-markdown)

## 🤝 Contributing

This is a personal project for technical interview practice. Feel free to fork and adapt for your own learning purposes.

## 📄 License

This project is for educational purposes only.
