Blockly.Blocks["yolobit_after_second_do"] = {
    init: function () {
      this.jsonInit({
        colour: "#ECCB00",
        tooltip: "",
        message0: "sau mỗi %1 %2 giây thực hiện %3 %4",
        args0: [
          { type: "input_dummy" },
          {
            type: "input_value",
            name: "SECOND",
            check: "Number"
          },
          { type: "input_dummy" },
          {
            type: "input_statement", 
            name: "ACTION"
          }
        ],
        previousStatement: null,
        nextStatement: null,
        helpUrl: "",
      });
    },
  };
  
  Blockly.Python["yolobit_after_second_do"] = function (block) {
    var second = Blockly.Python.valueToCode(block, 'SECOND', Blockly.Python.ORDER_ATOMIC);
    var statements_action = Blockly.Python.statementToCode(block, 'ACTION');
    globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';

    var cbFunctionName = Blockly.Python.provideFunction_(self,
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(' + variable_message + '):',
      globals,
      statements_action || Blockly.Python.PASS
    ]);
    
      // TODO: Assemble Python into code variable.
    var code = "";
    return code;
  };
  
 
