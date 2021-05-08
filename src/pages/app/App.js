import Cookies from 'universal-cookie';
import Login from 'pages/login';
import Board from 'pages/board';

const App = () => {
  const cookies = new Cookies();
  const token = cookies.get('token');

  return token === undefined ? <Login /> : <Board user={token.username} />;
}

export default App;
