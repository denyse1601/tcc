import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import BackgroundBolas from './assets/bolas.png';

export function App() {
  const location = useLocation();
  const noBackgroundPaths = ['/', '/jogo'];

  const shouldApplyBackground = !noBackgroundPaths.includes(location.pathname);

  return (
    <div 
      className="flex flex-col min-h-screen transition-colors duration-500"
      style={shouldApplyBackground ? {
        backgroundImage: `url(${BackgroundBolas})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      } : {}}
    >
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
