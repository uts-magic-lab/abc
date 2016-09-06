var imports = require('exports?goog&Blockly!blockly/blockly_compressed');
imports.goog.Timer.defaultTimerObject = window;
window.Blockly = imports.Blockly;

require('blockly/blocks_compressed');
Blockly.Msg = require('blockly/msg/json/en.json');

var pyrideBlocks = require('./blocks/pyride');

var blocklyDiv = document.getElementById('blockly');
blocklyDiv.style.width = window.innerWidth - 50 + 'px';
// blocklyDiv.style.height = window.innerHeight - 50 + 'px';

var toolbox = `<xml>
<category name="Text">
<block type="text"></block>
</category>
${pyrideBlocks.xml}
</xml>`

Blockly.inject(blocklyDiv, {toolbox: toolbox});
