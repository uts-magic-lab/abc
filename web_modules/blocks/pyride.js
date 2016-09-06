var Blockly = require('exports?Blockly!blockly/blockly_compressed');

const pyrideMethods = {
  PyRIDE: [
    {
        name: "declare",
        tooltip: "Declare the robot to all available PyRIDE remote clients."
    },
    {
        name: "disconnect",
        tooltip: "Disconnect PyRIDE one or all consoles."
    },
    {
        name: "takeCameraSnapshot",
        tooltip: "Use robot camera to take a snapshot."
    },
    {
        name: "getMyIPAddress",
        tooltip: "Get the current robot IP address."
    },
    {
        name: "updateOperationalStatus",
        tooltip: "Dispatch robot operational data to PyRIDE consoles."
    },
    {
        name: "updateRobotTelemetry",
        tooltip: "Dispatch robot telemetry data."
    },
    {
        name: "listCurrentUsers",
        tooltip: "List all users who are currently log on the robot."
    },
    {
        name: "listAllUsers",
        tooltip: "List all users on the robot."
    },
    {
        name: "blockRemoteExclusiveControl",
        tooltip: "Block or unblock remote client exclusive control of the robot."
    },
    {
        name: "saveConfiguration",
        tooltip: "Save the current PyRIDE configuration."
    },
    {
        name: "addUser",
        tooltip: "Add a new user on the robot."
    },
    {
        name: "removeUser",
        tooltip: "Remove an existing user on the robot."
    },
    {
        name: "changeUserPassword",
        tooltip: "Change the password of an existing user on the robot."
    },
    {
        name: "addTimer",
        tooltip: "Add a new timer object."
    },
    {
        name: "isTimerRunning",
        tooltip: "Check a timer with ID is still running."
    },
    {
        name: "removeTimer",
        tooltip: "Remove a timer object with ID."
    },
    {
        name: "removeAllTimers",
        tooltip: "Remove all timer objects."
    },
    {
        name: "listActiveVideoObjects",
        tooltip: "List the ID of all active video objects."
    },
    {
        name: "dispatchVideoTo",
        tooltip: "Send image data from a video object to a specific remote host."
    },
  ],
  REEM: [
    {
        name: "write",
        tooltip: "standard output for UTS REEM Python console.",
        args: "s"
    },
    {
        name: "setTeamMemberID",
        tooltip: "Set REEM team member ID and team colour.",
        args: "ii"
    },
    {
        name: "sendTeamMessage",
        tooltip: "Send a message to the rest team members.",
        args: "s"
    },
    {
        name: "say",
        tooltip: "Let REEM speak with an optional volume.",
        args: "s|fO"
    },
    {
        name: "pointHeadTo",
        tooltip: "Point REEM head to a new 3D position in wide stereo camera frame.",
        args: "sfff"
    },
    {
        name: "getHeadPos",
        tooltip: "Get REEM's head position.",
        output: "(dd)"
    },
    {
        name: "getJointPos",
        tooltip: "Get a joint's current position.",
        args: "s",
        output: "d"
    },
    {
        name: "getPositionForJoints",
        tooltip: "Get positions for a list of joints.",
        args: "list",
        output: "list"
    },
    {
        name: "getArmJointPositions",
        tooltip: "Get joint positions of REEM arms.",
        args: "bool",
        output: "dict"
    },
    {
        name: "getHandJointPositions",
        tooltip: "Get joint positions of REEM hand.",
        args: "bool",
        output: "dict"
    },
    {
        name: "getRobotPose",
        tooltip: "Get the current REEM pose.",
        output: "(dq)"
    },
    {
        name: "getRelativeTF",
        tooltip: "Get the relative TF between two frames with the first frame as the reference frame.",
        args: "ss",
        output: "(dq)"
    },
    {
        name: "updateHeadPos",
        tooltip: "Update REEM head position with a specific velocity in radian/s.",
        args: "dd"
    },
    {
        name: "moveHeadTo",
        tooltip: "Move REEM head to a new position (in degree).",
        args: "dd|Od"
    },
    {
        name: "moveHeadWithJointTrajectory",
        tooltip: "Move REEM's head in a specific joint trajectory (a list of joint positions).",
        args: "O"
    },
    {
        name: "moveBodyTo",
        tooltip: "Move REEM base to a new pose.",
        args: "fff|f"
    },
    {
        name: "moveBodyWithSpeed",
        tooltip: "Set REEM base moving speed.",
        args: "fff"
    },
    {
        name: "navigateBodyTo",
        tooltip: "Navigate REEM base to a new pose.",
        args: "OO"
    },
    {
        name: "cancelMoveBodyAction",
        tooltip: "Cancel the active move body actions."
    },
    {
        name: "moveTorsoTo",
        tooltip: "Move REEM torso joints.",
        args: "dd|Od"
    },
    {
        name: "moveTorsoWithJointTrajectory",
        tooltip: "Move REEM's torso in a specific joint trajectory (a list of joint positions).",
        args: "O"
    },
    {
        name: "moveArmPoseTo",
        tooltip: "Move one of REEM arms end point pose to a coordinate wrt torso.",
        args: "OOO|d"
    },
    {
        name: "moveArmWithJointPos",
        tooltip: "Move one of REEM arms with specific joint positions.",
        args: "ddddddd|d"
    },
    {
        name: "moveArmWithJointTrajectory",
        tooltip: "Move one of REEM arms in a specific joint trajectory (a list of joint positions).",
        args: "O"
    },
    {
        name: "moveArmWithJointTrajectoryAndSpeed",
        tooltip: "Move one of REEM arms in a specific joint trajectory with joint velocity (a list of joint positions with associated velocity).",
        args: "O"
    },
    {
        name: "cancelMoveArmAction",
        tooltip: "Cancel the active move arm actions."
    },
    {
        name: "openHand",
        tooltip: "Open one or both REEM grippers."
    },
    {
        name: "closeHand",
        tooltip: "Close one or both REEM grippers."
    },
    {
        name: "setHandPosition",
        tooltip: "Set specific position on one or both REEM grippers.",
        args: "ddd|d"
    },
    {
        name: "getBatteryStatus",
        tooltip: "Get the current battery status.",
        output: "(fsf)"
    },
    {
        name: "getLowPowerThreshold",
        tooltip: "Get the low power warning threshold.",
        output: "i"
    },
    {
        name: "setLowPowerThreshold",
        tooltip: "Set the low power warning threshold.",
        args: "i"
    },
    {
        name: "setEarLED",
        tooltip: "Set the colour of the ear LEDs on REEM.",
        args: "s|i",
        output: "i"
    },
    {
        name: "pulseEarLED",
        tooltip: "Pulse the ear LED of REEM between two colours.",
        args: "ss|if",
        output: "i"
    },
    {
        name: "cancelEarLEDEffect",
        tooltip: "Cancel an ear LED effect .",
        args: "i"
    },
    {
        name: "setTorsoStiffness",
        tooltip: "Set the stiffness of the REEM's torso. ",
        args: "f"
    },
    {
        name: "setArmStiffness",
        tooltip: "Set the stiffness of the one of REEM's arms. ",
        args: "f"
    },
    {
        name: "listTFFrames",
        tooltip: "List supported REEM TF frames."
    },
    {
        name: "isSupportedTFFrame",
        tooltip: "Check whether the input TF frames is supported."
    },
    {
        name: "playDefaultMotion",
        tooltip: "Let REEM play one of its default motion.",
        args: "s"
    },
    {
        name: "useMoveIt",
        tooltip: "Check whether MoveIt is in use."
    },
    {
        name: "addSolidObject",
        tooltip: "Add a solid object into the collision scene."
    },
    {
        name: "delSolidObject",
        tooltip: "Remove an existing solid object from the collision scene."
    },
    {
        name: "listSolidObjects",
        tooltip: "List all known solid objects in the collision scene."
    },
    {
        name: "pickUpObject",
        tooltip: "Pick a known object from a known place."
    },
    {
        name: "placeObject",
        tooltip: "Place a known object to a known place."
    },
    {
        name: "registerBaseScanCallback",
        tooltip: "Register (or deregister) a callback function to get base laser scan data. If target frame is not given, raw data is returned."
    },
    {
        name: "registerTiltScanCallback",
        tooltip: "Register (or deregister) a callback function to get tilt laser scan data. If target frame is not given, raw data is returned."
    },
    {
        name: "registerTorsoSonarCallback",
        tooltip: "Register (or deregister) a callback function to get REEM torso sonar data."
    },
    {
        name: "registerPalFaceCallback",
        tooltip: "Register (or deregister) a callback function to get PAL built-in face detector."
    },
    {
        name: "startPalFaceEnrollment",
        tooltip: "Start PAL built-in face enrollment."
    },
    {
        name: "stopPalFaceEnrollment",
        tooltip: "Stop PAL built-in face enrollment."
    },
    {
        name: "directToWeb",
        tooltip: "Direct REEM chest screen to a URI.",
        args: "s"
    },
    {
        name: "getCurrentMapPOIs",
        tooltip: "Get a dictionary of Point of Interest (POI) in the current map."
    },
    {
        name: "gotoPOI",
        tooltip: "Direct REEM to a POI autonomously."
    },
    {
        name: "cancelGotoPOI",
        tooltip: "Cancel the active navigation to a POI."
    },
    {
        name: "sendMessageToNode",
        tooltip: "Send a text command message to a node that is listening to /pyride/node_message.",
        args: "ss|i"
    }
  ]
};

var xml = '';

Object.keys(pyrideMethods).forEach(function(category, i) {
    xml += `<category name="${category}">`
    pyrideMethods[category].forEach(function(method, i) {
        var json = {
            name: method.name,
            message0: method.name,
            args0: [],
            tooltip: method.tooltip,
            colour: 160
        }
        if (method.args) {
            json.args0.push({
                type: "input_value",
                name: "VALUE"
            });
            json.message0 += ' %1';
        }
        if (method.output) {
            json.output = method.output
        }
        else {
            json.previousStatement = "Action";
            json.nextStatement = "Action";
        }

        xml += `<block type="${method.name}"></block>`;

        Blockly.Blocks[method.name] = {
            init: function() {
                this.jsonInit(json);
            }
        };
    });
    xml += '</category>';
});

module.exports.xml = xml;
