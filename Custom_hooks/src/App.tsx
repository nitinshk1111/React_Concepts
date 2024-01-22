import { useState } from "react";
import myReact from "./custom_useEffect";

const customReact = myReact();
export const App = ({ name }) => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);

  customReact.useEffect1(() => {
    console.log("my effect");
  }, [counter2, counter1]);
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button
        onClick={() => {
          setCounter1(++counter1);
          // console.log(counter);
        }}
      >
        Increase1
      </button>

      <button
        onClick={() => {
          setCounter1(--counter1);
          // console.log(counter);
        }}
      >
        Decrease1
      </button>
      <div>
        <button
          onClick={() => {
            setCounter2(++counter2);
            // console.log(counter1);
          }}
        >
          Increase2
        </button>

        <button
          onClick={() => {
            setCounter2(--counter2);
            // console.log(counter1);
          }}
        >
          Decrease1
        </button>
      </div>
    </div>
  );
};
