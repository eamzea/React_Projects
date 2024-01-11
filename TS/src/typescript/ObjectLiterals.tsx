interface Person {
  name: string;
  age: number;
  address: Address;
  fullName?: string;
}

interface Address {
  city: string;
  country: string;
}

const ObjectLiterals = () => {
  const person: Person = {
    name: 'Edgar',
    age: 27,
    address: {
      city: 'Mexico City',
      country: 'Mexico',
    },
  };

  return (
    <div>
      <h3>Person Information</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </div>
  );
};

export default ObjectLiterals;
