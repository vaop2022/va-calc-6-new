export type VaScriptAction =
  | "Action_init"
  | "Action_operand_1_attach_zero"
  | "Action_operand_1_attach_one"
  | "Action_operand_1_attach_two"
  | "Action_operand_1_attach_three"
  | "Action_operand_1_attach_four"
  | "Action_operand_1_attach_five"
  | "Action_operand_1_attach_six"
  | "Action_operand_1_attach_seven"
  | "Action_operand_1_attach_eight"
  | "Action_operand_1_attach_nine"
  | "Action_waiting_for_operand_2_for_plus"
  | "Action_operand_2_attach_zero"
  | "Action_operand_2_attach_one"
  | "Action_operand_2_attach_two"
  | "Action_operand_2_attach_three"
  | "Action_operand_2_attach_four"
  | "Action_operand_2_attach_five"
  | "Action_operand_2_attach_six"
  | "Action_operand_2_attach_seven"
  | "Action_operand_2_attach_eight"
  | "Action_operand_2_attach_nine"
  | "Action_warning_10__Second_operand_is_missing"
  | "Action_clear"
  | "Action_show_result";

  export type Direction =
  | "Direction_init"
  | "nextDirection_init"
  | "Direction_zero"
  | "Direction_one"
  | "Direction_two"
  | "Direction_three"
  | "Direction_four"
  | "Direction_five"
  | "Direction_six"
  | "Direction_seven"
  | "Direction_eight"
  | "Direction_nine"
  | "Direction_plus"
  | "Direction_equal"
  | "Direction_clear";

  export type ActionMapping = {
    [key in Direction]: VaScriptAction;
  };
  
  export type ActionMap = {
    [key in VaScriptAction]: ActionMapping;
  };
  