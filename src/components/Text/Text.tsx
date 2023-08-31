import React, { useState } from "react";


function Text(): JSX.Element {
  const [isTextVisible, setIsTextVisible] = useState<boolean>(false);
  const toggleTextHandler = (): void => {
    setIsTextVisible(()=>!isTextVisible);
  };
  return (
    <div>
      <button onClick={toggleTextHandler}>click</button>
      {isTextVisible ? <div> 'Text' </div> : null}
    </div>
  );
}
div*3

export default Text;
