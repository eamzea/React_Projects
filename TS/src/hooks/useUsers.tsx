import { useEffect, useRef, useState } from 'react';
import { API } from '../api/api';
import { ResponseAPI, User } from '../interfaces/api';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const page = useRef(1);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const { data } = await API.get<ResponseAPI>('/users', {
        params: {
          page: page.current,
        },
      });

      if (data.data.length > 0) {
        setUsers(data.data);
      } else {
        page.current--;
        alert('There is no more users');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = () => {
    page.current++;
    loadUsers();
  };
  const previousPage = () => {
    if (page.current > 1) {
      page.current--;
      loadUsers();
    }
  };

  return {
    users,
    nextPage,
    previousPage,
  };
};
