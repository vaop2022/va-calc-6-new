import React from "react";
import { Direction } from "../../types/types";

interface ActionListProps {
  actionData: string[];
  nextDirectionAction: Direction;
}

function ActionList({ actionData, nextDirectionAction }: ActionListProps) {
  return (
    <div className="border action-list-content p-2 rounded bg-grey">
      {actionData.map((line, index) => {
        if (line) {
          if (line.includes(nextDirectionAction)) {
            return (
              <div className="whitespace-nowrap" key={index}>
                <strong>
                <img src="images/v-agent-red-32x32.png" width={32} height={32} /> [{line}]
                </strong>
              </div>
            );
          } else {
            return (
              <div className="whitespace-nowrap" key={index}>
                [{line}]
              </div>
            );
          }
        }
        return null;
      })}
    </div>
  );
}

export default ActionList;
