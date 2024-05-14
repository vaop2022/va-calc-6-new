function Action_warning_10__Second_operand_is_missing(
    operandOne: string, 
    operandTwo: string, 
    setOperandOne: React.Dispatch<React.SetStateAction<string>>,
    setOperandTwo: React.Dispatch<React.SetStateAction<string>>,
    setResult: React.Dispatch<React.SetStateAction<string>>,
    setWarningMsg: React.Dispatch<React.SetStateAction<string>>
    ): void {
        setWarningMsg("Second operand is missing");
    }
    
    export default Action_warning_10__Second_operand_is_missing;