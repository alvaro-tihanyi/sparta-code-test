import Cookies from 'universal-cookie';
import { Login, Board } from 'pages';

const App = () => {
  const cookies = new Cookies();
  const token = cookies.get('token');

  console.log(token);

  const authorized = token !== undefined && typeof token === 'object' && 'auth' in token && token.auth;

  return authorized ? <Board user={token.username} /> : <Login />;
}

export default App;
