import { useRouteError } from "react-router-dom";
//The above "useRouteError" is the reactHook for helping the user in understanding the error more accuratley.

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong</h2>
      <h2>
        {err.status} : {err.statusText}{" "}
      </h2>
    </div>
  );
};

export default Error;
