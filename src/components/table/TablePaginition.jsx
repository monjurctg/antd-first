import { Table, Tag } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";

function TablePaginition() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = [
    {
      title: "user Id",
      dataIndex: "userId",
      key: "1",
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "2",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "3",
    },
    {
      title: "status",
      dataIndex: "completed",
      key: "4",
      // render: (completed) => {
      //   return <p>{completed ? "Complete" : "In Progress"}</p>;
      // },

      render: (tag) => {
        const color = tag ? "green" : "red";
        return (
          <Tag color={color} key={tag}>
            {tag ? "Comleted" : "In Progress"}
          </Tag>
        );
      },
      filters: [
        { text: "Complete", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div style={{ marginTop: "40px" }}>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={false}
        rowSelection={true}
      />
    </div>
  );
}

export default TablePaginition;
