import { useState } from "react";
import { TableRow, TableData } from "../components/styled/TreeContainer.styled";

const Generations = ({ data }) => {
  const [gens, setGens] = useState(data);
  const [submenu, setSubmenu] = useState(false);
  return (
    <>
      {gens.generations.map((generation, i) => {
        const principal = generation.principal;
        const marriage = generation.marriage;
        const partner = generation.partner;
        return (
          <TableRow
            draggable
            key={generation._id}
            id={generation._id}
            onClick={(e) => {
              console.log(`Clicked ${generation._id}`);
              setSubmenu(true);
            }}
          >
            <TableData className="generation">{generation.level}</TableData>
            <TableData className="generationInfo">
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
