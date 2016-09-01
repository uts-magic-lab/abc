var Blockly = require('exports?Blockly!blockly/blockly_compressed');
// window.Blockly = Blockly;

var pyrideBlocks = require('./pyrideBlocks');

var blocklyDiv = document.getElementById('blockly');
// blocklyDiv.style.width = window.innerWidth;
// blocklyDiv.style.height = Math.max(window.innerHeight, 800);

Blockly.inject(blocklyDiv, {toolbox: pyrideBlocks.toolbox});

