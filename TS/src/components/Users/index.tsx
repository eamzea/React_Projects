import { useUsers } from '../../hooks/useUsers';
import { User } from '../../interfaces/api';

const Users = () => {
  const { users, nextPage, previousPage } = useUsers();

  const renderUser = ({ id, avatar, first_name, email }: User) => (
    <tr key={id.toString()}>
      <td>
        <img
          src={avatar}
          alt={first_name}
          style={{ width: 35, borderRadius: 100 }}
        />
      </td>
      <td>{first_name}</td>
      <td>{email}</td>
    </tr>
  );

  return (
    <>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map(renderUser)}</tbody>
      </table>
      <button className="btn btn-secondary" onClick={previousPage}>
        Previous
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={nextPage}>
        Next
      </button>
    </>
  );
};

export default Users;
