import { useGetAllUsersQuery } from "./services/UserService";

const App = () => {
  const { data } = useGetAllUsersQuery();
  console.log(data);

  return (
    <>
      {data?.map(user => (
        <>
          <h1>{user.name}</h1>
        </>
      ))}
    </>
  );
};

export default App;
