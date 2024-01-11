import { Counter, CounterWithHook, Form, Login, Users } from 'components';

import BasicTypes from '../typescript/BasicTypes';
import Functions from '../typescript/Functions';
import ObjectLiterals from '../typescript/ObjectLiterals';

const Home = () => {
  return (
    <div>
      Intro to TS in React
      <hr />
      <BasicTypes />
      <hr />
      <ObjectLiterals />
      <hr />
      <Functions />
      <hr />
      <Counter />
      <hr />
      <CounterWithHook />
      <hr />
      <Login />
      <hr />
      <Users />
      <hr />
      <Form />
    </div>
  );
};

export default Home;
