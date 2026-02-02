# 🚗 Rental Car Application

A modern and high-performance web application for car rentals, built with **Next.js 15**, **TypeScript**, and **Zustand**. This project allows users to browse a car catalog, filter by various criteria, and manage a personal list of favorite vehicles.

## ✨ Key Features

- **Dynamic Catalog**: Browse a wide range of cars with smooth animations powered by Framer Motion.
- **Advanced Filtering**: 
  - Filter by car brand (searchable dropdown).
  - Filter by rental price per hour.
  - Filter by mileage range (From/To).
- **Favorites Management**: Add or remove cars from your favorites. Data is persisted in `localStorage`.
- **Detailed Car Views**: Each car has a dedicated page with technical specifications and rental conditions.
- **Booking System**: Interactive booking form with real-time validation and toast notifications.
- **Optimized Performance**: Built with Server Components for better SEO and Client Components for interactivity.

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (with Persistence)
- **Styling**: CSS Modules & [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Form Components**: [React-Select](https://react-select.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/OleksandrT434/CatalogeCar.git
cd CatalogeCar
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Open the app
Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure
```
src/
├── app/              # Main pages and routing
├── components/       # Reusable UI components (CarCard, Filter, Header, etc.)
├── store/            # Zustand state management for favorites
├── lib/              # API services, TypeScript types, and styling configurations
public/
└── icons/            # SVG sprite for optimized icon rendering
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).