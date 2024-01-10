import React, { useContext, useEffect, useState } from "react";
import { Context } from "./UseContext";

function ContextContent() {

  let [count, setCount] = useState(0)
  let [displayContent, setDisplayContent] = useState(true)
  let { dark, setDark } = useContext(Context)

  const changeTheme = () => {
    setDark(!dark)
  }

  const changeContent = () => {
    alert("Something")
    setDisplayContent(!displayContent)
  }

  const changeCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log("changed");
  }, [displayContent]);

  return (
    <>
      <div style={{ backgroundColor: dark ? "#000" : "#fff", color: dark ? "#fff" : "#000" }}>
        <button onClick={changeTheme}>Toggle</button>
        <div>
          <p style={{
            display: displayContent ? "block" : "none"
          }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            deserunt quisquam dicta quos pariatur nemo error reiciendis officiis
            consectetur nesciunt assumenda aliquid, minima impedit sequi velit?
            Non earum ullam quo.
          </p>
          <button onClick={changeContent}>Content</button>
          <h3>{count}</h3>
          <button onClick={changeCount}>Like</button>
        </div>
      </div>
    </>
  );
}

export default ContextContent;
