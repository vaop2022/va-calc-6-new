import vaScript from "../../public/vaop/va-scripts/vaScriptBase10_v1.json";

import { VaScriptAction } from "../../types/types";
import { Direction } from "../../types/types";
import { ActionMap } from "../../types/types";
import { ActionMapping } from "../../types/types";


module.exports = { getActionsBlockFromScriptByAction };

function getActionsBlockFromScriptByAction(action: VaScriptAction): string {
    let directionMappings = vaScript[action] as ActionMapping;
    let resultString: string = "";
  
    for (const key in directionMappings) {
      if (directionMappings.hasOwnProperty(key)) {
        const value: VaScriptAction = directionMappings[key];
        resultString += `${key} --- ${value}\n`;
      }
    }
  
    return resultString;
  }
  
  // const getActionsBlockFromScriptByAction = (action: string): string => {
  //   const directionMappings = vaScript[action];
  
  //   return Object.keys(directionMappings)
  //     .filter(key => directionMappings.hasOwnProperty(key))
  //     .map(key => `${key},${directionMappings[key]}\n\n\n`)
  //     .join('');
  // };
  