import React from "react";

const App: React.FC = () => {
  return (
    <>
      <OtherComponents userName={"Ajay"} />
    </>
  );
};

export default App;

type OtherComponentsProp = {
  userName: string;
};
const OtherComponents: React.FC<OtherComponentsProp> = ({ userName }) => {
  return (
    <>
      <h1>Name -: {userName}</h1>
    </>
  );
};
