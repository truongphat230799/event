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
  Blockly.Blocks["yolobit_wait_for"] = {
    init: function() {
      this.jsonInit({
        message0: " khi %1 thực hiện %2 %3",
        args0: [
          { "variable":điều kiện, "type": "field_variable", "name": "message"},
          { type: "input_dummy" },
          {
            type: "input_statement", 
            name: "ACTION"
          }          
        ],        
        colour: "#ECCB00"
      });
    }
  };
  
  Blockly.Python["yolobit_wait_for"] = function(block) {
    // TODO: Assemble Python into code variable.
    var statements_action = Blockly.Python.statementToCode(block, 'ACTION');
    globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';
    var cbFunctionName = Blockly.Python.provideFunction_(self,
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(' + variable_message + '):',
      globals,
      statements_action || Blockly.Python.PASS
    ]);
    var code = "";
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };
 
