import { LoginFunction } from 'helpers/types.d';

export const login:LoginFunction = ({ username }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ auth: true, username });
  }, 1000);
});
