import useFetch from './hook';

function App() {
  const { data, isLoading, error, getData } = useFetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  const data2 = useFetch('https://jsonplaceholder.typicode.com/todos/2');

  return (
    <>
      <div>
        <h1>DATA 1:</h1>
        {data ? data.title : isLoading ? 'Loading..' : error ? error : null}
        <button onClick={getData}>Get Data</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1>DATA 2:</h1>
        {data2.data
          ? data2.data.title
          : data2.isLoading
          ? 'Loading..'
          : data2.error
          ? data2.error
          : null}
        <button onClick={data2.getData}>Get Data</button>
      </div>
    </>
  );
}

export default App;
