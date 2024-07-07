import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="h-16 text-white bg-primary py-6">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Logo />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
