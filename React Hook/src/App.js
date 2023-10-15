import { useState } from "react";
import "./styles.css";

// useState
// export default function App() {
//   const [item, setItem] = useState(1);
//   const incrememtItem = () => setItem(item + 1);
//   const decrement = () => setItem(item - 1);
//   return (
//     <div className="App">
//       <h1>Hello {item}</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={incrememtItem}>incrememt</button>
//       <button onClick={decrement}>decrememt</button>
//     </div>
//   );
// }

// useInput
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState.apply(initialValue);
  const onChange = (event) => {
    console.log(event.target);
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  // const maxLen = (value) => value.length < 10;
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>

      <input placeholder="Name" /*value={name.value}*/ {...name} />
    </div>
  );
}
