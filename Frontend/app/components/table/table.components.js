import { useState, useEffect } from "react";
const {
  DivContaiener,
  DivHeader,
  AHeader,
  DivContent,
  AContent,
} = require("./styles/table.styles");
const Table = ({ header = [], content = [] }) => {
  const [size, setSize] = useState("");
  useEffect(() => {
    let grid = "";
    const length = header.length;

    for (let i = 0; i < length; i++) {
      grid += `${100 / length}% `;
    }
    setSize(grid);
  }, [content]);
  return (
    <>
      <DivContaiener>
        <DivHeader size={size}>
          {header.map((data) => (
            <>
              <AHeader>{data}</AHeader>
            </>
          ))}
        </DivHeader>
        {content.map((info) => (
          <>
            <DivContent size={size}>
              {Object.values(info).map((data, i) => (
                <>{i !== 0 && <AContent>{data}</AContent>} </>
              ))}
            </DivContent>
          </>
        ))}
      </DivContaiener>
    </>
  );
};

module.exports = Table;
