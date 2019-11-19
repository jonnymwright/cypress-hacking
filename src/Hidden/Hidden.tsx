import React, { useState } from "react";

const Hidden: React.FC = () => {
  const [showChild, setShowChild] = useState(false);

  return (
    <>
      <button className="toggle" onClick={() => setShowChild(!showChild)}>
        Toggle
      </button>
      {showChild && <input className="hidden"></input>}
    </>
  );
};

export default Hidden;
