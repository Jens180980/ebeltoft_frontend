import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledTable = styled.section`
  width: 80%;
  margin: 6rem auto;
  .wrapper {
    width: 100%;
    padding: 0 1rem;

    tr,
    thead {
      display: flex;
      justify-content: left;
      width: 100%;
      padding: 0.5rem 0;
      border-bottom: 2px solid black;
      transition: all 300ms linear;

      td,
      th {
        width: 100%;
        text-align: left;
      }
    }
    tr:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }
`;

export const ListHomes = () => {
  const [Homes, setHomes] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-json/wp/v2/boliger`
      );
      setHomes(result.data);
    };
    getData();
  }, []);

  console.log(Homes);

  return (
    <StyledTable>
      <table className="wrapper">
        <thead>
          <th>Boligtype</th>
          <th>Areal</th>
          <th>Værelser</th>
          <th>Pris</th>
          <th>Status</th>
        </thead>

        {Homes &&
          Homes.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.acf.type}</td>
                <td>{item.acf.area} m2</td>
                <td>{item.acf.rooms}</td>
                <td>{Number(item.acf.price).toLocaleString()} kr.</td>
                <td>{item.acf.status}</td>
              </tr>
            );
          })}
      </table>
    </StyledTable>
  );
};
