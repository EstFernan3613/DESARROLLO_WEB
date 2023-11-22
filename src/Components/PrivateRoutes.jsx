import { useLocation, useNavigate } from 'react-router-dom';

export const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      localStorage.setItem('lastVisited', location.pathname);
      navigate('/login');
    }
  }, [user, location, navigate]);

  return user ? <Component {...rest} /> : null;
};