import React from "react";

interface RadioListProps {
  data: {
    title: string;
    [key: string]: any;
  };
}

export default function RadioList({ data }: RadioListProps) {
  return (
    <>
      <h1>{data?.title}</h1>
    </>
  );
}
