import React, { useEffect } from "react";
import { useCountStore } from "./store/store";

const zustandStoreTracker = ():number => {
  const tracker = useCountStore.getState().count1;
  return tracker;
}

const App: React.FC = () => {
  const countDataZustand = useCountStore((countStore)=>countStore.count1);

  const increment = useCountStore((state)=>state.increment);
  const decrement = useCountStore((state)=>state.decrement);
  const reset = useCountStore((state)=>state.reset);

  useEffect(()=>{
    console.log(zustandStoreTracker());
  },[])

  return (
    <>
    <h1>Counted Data is here -: {countDataZustand}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
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
