# React Progress Bar

A modern, interactive progress bar component built with React and Vite. Features a clean design, smooth animations, and dark/light theme support.

![Progress Bar Demo](./src/assets/demo.gif)

## Features

- 🎯 Interactive progress bar with smooth animations
- 🌓 Dark/Light theme toggle with persistent preference
- 🔄 Auto-reset functionality when progress reaches 100%
- 📱 Responsive design
- ⚡ Built with React + Vite for optimal performance

## Live Demo

[View Live Demo](#) <!-- Add your deployment URL when available -->

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd progress-bar
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Usage

The progress bar component can be used as follows:

```jsx
import ProgressBar from './components/ProgressBar';

function App() {
  return <ProgressBar progress={50} />;
}
```

### Props

- `progress` (number): Value between 0 and 100 representing the progress percentage

## Features in Detail

### Progress Bar

- Visual representation of progress from 0% to 100%
- Smooth transition animations
- Auto-resets after reaching 100%

### Theme Toggle

- Switch between light and dark themes
- Persists user preference in localStorage
- Smooth transition effects

## Project Structure

```
progress-bar/
├── src/
│   ├── components/
│   │   └── ProgressBar.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## Built With

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- CSS Variables - For theming
- LocalStorage - For theme persistence

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built as part of the Codédex React curriculum
- Inspired by modern UI/UX practices
- Thanks to the React and Vite communities
