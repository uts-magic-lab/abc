var Blockly = require('exports?Blockly!blockly/blockly_compressed');
// window.Blockly = Blockly;
// require('blockly/blocks_compressed');

var pyrideBlocks = require('./blocks/pyride');

var blocklyDiv = document.getElementById('blockly');
// blocklyDiv.style.width = window.innerWidth;
// blocklyDiv.style.height = Math.max(window.innerHeight, 800);

var toolbox = `<xml>
${pyrideBlocks.xml}
</xml>`;

Blockly.inject(blocklyDiv, {toolbox: toolbox});
