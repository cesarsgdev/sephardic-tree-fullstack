import { useState } from "react";
import { TableRow, TableData } from "../components/styled/TreeContainer.styled";
import { CSSTransition } from "react-transition-group";
import GenerationControls from "../components/GenerationControls";
import "../styles/animation.css";

const Generations = ({ data }) => {
  const [treeData, setTreeData] = useState(data);
  const [gens, setGens] = useState(data.generations);
  const [submenu, setSubmenu] = useState([false, null]);
  return (
    <>
      {gens.map((generation, i) => {
        const principal = generation.principal;
        const marriage = generation.marriage;
        const partner = generation.partner;
        return (
          <TableRow
            draggable
            key={generation._id}
            id={generation._id}
            data-index={i}
            onClick={(e) => {
              console.log(`Clicked ${generation._id}`);
              setSubmenu(true);
            }}
          >
            <TableData data-index={i} className="generation">
              {generation.level}
            </TableData>
            <TableData
              data-index={i}
              className="generationInfo"
              onMouseOver={(e) => {
                setSubmenu([true, i]);
              }}
              onMouseOut={(e) => {
                setSubmenu([false, i]);
              }}
            >
              {
                <CSSTransition
                  in={submenu[0]}
                  timeout={500}
                  classNames="submenu-generation"
                  mountOnEnter={true}
                  unmountOnExit={true}
                  appear={true}
                >
                  {(state) =>
                    submenu[1] === i ? (
                      <GenerationControls></GenerationControls>
                    ) : null
                  }
                </CSSTransition>
              }
              <strong>{`*${principal.name.toUpperCase()} `}</strong>
              {`(${principal.events.code} ${principal.events.data.date.day}/${principal.events.data.date.month}/${principal.events.data.date.year}, ${principal.events.data.place}, m. ${principal.events.death.date.day}/${principal.events.death.date.month}/${principal.events.death.date.year}, ${principal.events.death.place})`}
              <strong>{`${marriage.date.day ? ` - casou ` : ""}`}</strong>
              {`(${marriage.date.day}/${marriage.date.month}/${marriage.date.yearh}, ${marriage.place})`}
              <strong>
                {" "}
                {`${partner.events.data.date.month ? `com ` : ""}`}
              </strong>
              {`${
                partner.events.data.date.month
                  ? `${partner.name} (${partner.events.code} ${partner.events.data.date.day}/${partner.events.data.date.month}/${partner.events.data.date.year}, ${partner.events.data.place}, m. ${partner.events.death.date.day}/${partner.events.death.date.month}/${partner.events.death.date.year}, ${partner.events.death.place})`
                  : ""
              }`}
            </TableData>
          </TableRow>
        );
      })}
    </>
  );
};

export default Generations;
