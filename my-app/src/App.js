import React, { useState, useEffect, useRef } from "react";
// import "./styles.css";

// // useState
// export default function App() {
//   const [item, setItem] = useState(1);
//   const incrementItem = () => setItem(item + 1);
//   const decrementItem = () => setItem(item - 1);
//   return (
//     <div className="App">
//       <h1>Hello {item}</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={incrementItem}>incrememt</button>
//       <button onClick={decrementItem}>decrememt</button>
//     </div>
//   );
// }

// //useState 를 사용하지 않은 형태의 코드를 작성할 시
// class AppUgly extends React.Component{
//   state = {
//     item : 1
//   }
//   render(){
//     const {item} = this.state;
//     return(
//       <div className="App">
//         <h1>Hello {item}</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.incrementItem}>incrememt</button>
//         <button onClick={this.decrementItem}>decrememt</button>
//       </div>
//     );
//   }
//   incrementItem = () => {
//     this.setState(state => {
//       return {
//         item : state.item + 1
//       }
//     })
//   }
//   decrementItem = () => {
//     this.setState(state => {
//       return {
//         item : state.item - 1
//       }
//     })
//   }
// }

// // useInput
// const useInput = (initialValue, validator) => {
//   const [value, setValue] = useState.apply(initialValue);
//   const onChange = (event) => {
//     console.log(event.target);
//     const {
//       target: { value }
//     } = event;
//     let willUpdate = true;
//     if (typeof validator === "function") {
//       willUpdate = validator(value);
//     }
//     if (willUpdate) {
//       setValue(value);
//     }
//   };
//   return { value, onChange };
// };

// export default function App() {
//   // const maxLen = (value) => value.length < 10;
//   const maxLen = (value) => !value.includes("@");
//   const name = useInput("Mr.", maxLen);
//   return (
//     <div className="App">
//       <h1>Hello</h1> 
//       <input placeholder="Name" /*value={name.value}*/ {...name} />
//     </div>
//   );
// }

// // useTabs
// const content = [
//   {
//     tab: "Section1",
//     content: "Content of Section 1"
//   },
//   {
//     tab: "Section2",
//     content: "Content of Section 2"
//   }
// ];

// const useTabs = (initialTab, allTabs) => {
//   const [currentIndex, setCurrentIndex] = useState(initialTab);
//   if (!allTabs || !Array.isArray(allTabs)){
//     return;
//   }
//   return {
//     currentItem : allTabs[currentIndex],
//     changeItem : setCurrentIndex
//   }
// }

// export default function App() {
//   const {currentItem, changeItem} = useTabs(0, content);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       {content.map((section, index) => (
//         <button onClick={()=> changeItem(index)} key={section.tab}>{section.tab}</button>
//       ))}
//       <div>
//         {currentItem.content}
//       </div>
//     </div>
//   );
// }

// //UseEffect
// export default function App() {
//   const sayHello = () => console.log("hello");
//   const [number, setNumber] = useState(0);
//   const [aNumber, setAnumber] = useState(0);
//   useEffect(sayHello, [number]);
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//       <button onClick={() => setNumber(number + 1)}>{number}</button>
//       <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
//     </div>
//   );
// }

// //useTitle
// const useTitle = (initialTitle) => {
//   const [title, setTitle] = useState(initialTitle);
//   const updateTitle = () => {
//     const htmlTitle = document.querySelector("title");
//     htmlTitle.innerText = title;
//   }
//   useEffect(updateTitle, [title]);
//   return setTitle;
// }

// export default function App() {
//   const titleUpdater = useTitle("Loading...");
//   setTimeout(() => titleUpdater("Home"), 5000);
//   return (
//     <div className="App">
//       <h1>Hi</h1>
//     </div>
//   );
// }

//useClick
const useClick = onClick => {
  if(typeof onClick !== "function"){
    return;
  }
  const element = useRef();
  useEffect(() => {
    if(element.current){
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if(element.current){
        element.current.removeEventListener('click', onClick);
      }
    }
  }, []);
  return element;
}

export default function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}