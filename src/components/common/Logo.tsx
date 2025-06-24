import {visa} from '../../asset/images';
import { Link } from 'react-router-dom';

interface LogoProps {
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ dark = false }) => {
  return (
    <Link to="/\" className="flex items-center">
      <img
        src={visa}
        alt="logo"
        className={`text-primary-600  h-20 ${dark ? 'fill-neutral-900' : ''}`} 
      />
      <span className={`ml-2 text-xl font-heading font-bold ${dark ? 'text-white' : ''}`}>
       
      </span>
    </Link>
  );
};

export default Logo;