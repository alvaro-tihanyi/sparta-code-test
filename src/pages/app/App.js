import Login from 'pages/login';
import Board from 'pages/board';

const App = () => {

  const token = localStorage.getItem('token');
  console.log(token);

  return token === null ? <Login /> : <Board />;
}

export default App;
