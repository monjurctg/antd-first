import { Select } from "antd";
import React from "react";

function Multiple() {
  const fruits = ["apple", "bannana", "Orange", "Cherry"];
  let fruitsOption = fruits.map((fruit, index) => {
    return (
      <Select.Option key={index} value={fruit}>
        {fruit}
      </Select.Option>
    );
  });
  return (
    <div>
      <Select
        mode="multiple"
        allowClear
        placeholder="Select Fruit"
        style={{ width: "50%" }}
      >
        {fruitsOption}
      </Select>
    </div>
  );
}

export default Multiple;
