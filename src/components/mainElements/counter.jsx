import React, { useState } from "react";
import { Button, Space } from "antd";
function Count() {
  const initialValue = 0;
  const [currentNumber, setCurrentNumber] = useState(initialValue);

  function minusClick() {
    setCurrentNumber(currentNumber - 1);
  }

  function plusClick() {
    setCurrentNumber(currentNumber + 1);
  }

  function resetClick() {
    setCurrentNumber(initialValue);
  }
  return (
    <Space
      className="innerClick"
      direction="vertical"
      
    >
      <Button
        type="dashed"
        block
        className="innerClick__plus-click"
        onClick={minusClick}
      >
        -
      </Button>
      <div className="innerClick__block">
        <p className="innerClick__number">{currentNumber}</p>
        <Button
          type="dashed"
          block
          className="innerClick__plus-click"
          onClick={resetClick}
        >
          Reset
        </Button>
      </div>
      <Button
        type="dashed"
        block
        className="innerClick__plus-click"
        onClick={plusClick}
      >
        +
      </Button>
    </Space>
  );
}

export default Count;
