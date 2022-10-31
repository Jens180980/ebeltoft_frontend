import { useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { IconContext } from "react-icons";

const StyledAccordion = styled.section`
  width: 80%;
  margin: 4rem auto;
  border-bottom: 1px solid ${(props) => props.theme.colors.green};

  .closed {
    margin-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.green};

    h4 {
      font-size: ${(props) => props.theme.fontSize.h4};
      color: black;
    }

    svg {
      cursor: pointer;
    }
  }

  .opened {
    margin-left: 2rem;

    p {
      font-size: ${(props) => props.theme.fontSize.p};
    }
  }
`;

export const Accordion = ({ headerTxt, contentTxt }) => {
  const [toogleAccordion, setToogleAccordion] = useState(false);

  const toogleHandler = () => setToogleAccordion(!toogleAccordion);

  return (
    <StyledAccordion>
      <div className="closed">
        <h4>{headerTxt}</h4>
        {!toogleAccordion ? (
          <IconContext.Provider value={{ size: "3em" }}>
            <FaChevronDown onClick={toogleHandler} />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ size: "3em" }}>
            <FaChevronUp onClick={toogleHandler} />
          </IconContext.Provider>
        )}
      </div>
      <div className="opened">
        {toogleAccordion ? <p>{contentTxt}</p> : null}
      </div>
    </StyledAccordion>
  );
};
