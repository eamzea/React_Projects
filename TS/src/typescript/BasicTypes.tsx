const BasicTypes = () => {
  const name: string = 'Edgar';
  const age: number = 27;
  const isActive: boolean = true;
  const powers: string[] = ['Super strength', 'Hyper velocity'];

  return (
    <div>
      <h3>Basic Types</h3>
      {name} {age} {isActive ? 'active' : 'inactive'}
      <br />
      {powers.join(', ')}
    </div>
  );
};

export default BasicTypes;
