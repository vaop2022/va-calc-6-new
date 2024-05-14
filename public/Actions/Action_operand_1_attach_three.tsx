function Action_operand_1_attach_three(
    operandOne: string, 
    operandTwo: string, 
    setOperandOne: React.Dispatch<React.SetStateAction<string>>,
    setOperandTwo: React.Dispatch<React.SetStateAction<string>>,
    setResult: React.Dispatch<React.SetStateAction<string>>,
    setWarningMsg: React.Dispatch<React.SetStateAction<string>>
    ): void {
        setOperandOne(operandOne + "3");
    }
    
    export default Action_operand_1_attach_three;