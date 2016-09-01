var Blockly = require('exports?Blockly!blockly/blockly_compressed');

const METH_NOARGS = Symbol('METH_NOARGS');
const METH_VARARGS = Symbol('METH_VARARGS');
const METH_KEYWORDS = Symbol('METH_KEYWORDS');

const pyrideMethods = {
  Common: [
    ["declare", METH_NOARGS,
      "Declare the robot to all available PyRIDE remote clients." ],
    ["disconnect", METH_VARARGS,
      "Disconnect PyRIDE one or all consoles." ],
    ["takeCameraSnapshot", METH_VARARGS,
      "Use robot camera to take a snapshot." ],
    ["getMyIPAddress", METH_NOARGS,
      "Get the current robot IP address." ],
    ["updateOperationalStatus", METH_VARARGS,
      "Dispatch robot operational data to PyRIDE consoles." ],
    ["updateRobotTelemetry", METH_VARARGS,
      "Dispatch robot telemetry data." ],
    ["listCurrentUsers", METH_NOARGS,
      "List all users who are currently log on the robot." ],
    ["listAllUsers", METH_NOARGS,
      "List all users on the robot." ],
    ["blockRemoteExclusiveControl", METH_VARARGS,
      "Block or unblock remote client exclusive control of the robot." ],
    ["saveConfiguration", METH_NOARGS,
      "Save the current PyRIDE configuration." ],
    ["addUser", METH_VARARGS,
      "Add a new user on the robot." ],
    ["removeUser", METH_VARARGS,
      "Remove an existing user on the robot." ],
    ["changeUserPassword", METH_VARARGS,
      "Change the password of an existing user on the robot." ],
    ["addTimer", METH_VARARGS,
      "Add a new timer object." ],
    ["isTimerRunning", METH_VARARGS,
      "Check a timer with ID is still running." ],
    ["removeTimer", METH_VARARGS,
      "Remove a timer object with ID." ],
    ["removeAllTimers", METH_NOARGS,
      "Remove all timer objects." ],
    ["listActiveVideoObjects", METH_NOARGS,
      "List the ID of all active video objects." ],
    ["dispatchVideoTo", METH_KEYWORDS,
      "Send image data from a video object to a specific remote host." ],
  ],
  REEM: [
    ["write", METH_VARARGS,
      "standard output for UTS REEM Python console." ],
    ["setTeamMemberID", METH_VARARGS,
      "Set REEM team member ID and team colour." ],
    ["sendTeamMessage", METH_VARARGS,
      "Send a message to the rest team members." ],
    ["say", METH_VARARGS,
      "Let REEM speak with an optional volume." ],
    ["pointHeadTo", METH_VARARGS,
      "Point REEM head to a new 3D position in wide stereo camera frame." ],
    ["getHeadPos", METH_NOARGS,
      "Get REEM's head position." ],
    ["getJointPos", METH_VARARGS,
      "Get a joint's current position." ],
    ["getPositionForJoints", METH_VARARGS,
      "Get positions for a list of joints." ],
    ["getArmJointPositions", METH_VARARGS,
      "Get joint positions of REEM arms." ],
    ["getHandJointPositions", METH_VARARGS,
      "Get joint positions of REEM hand." ],
    ["getRobotPose", METH_NOARGS,
      "Get the current REEM pose." ],
    ["getRelativeTF", METH_VARARGS,
      "Get the relative TF between two frames with the first frame as the reference frame." ],
    ["updateHeadPos", METH_VARARGS,
      "Update REEM head position with a specific velocity in radian/s." ],
    ["moveHeadTo", METH_VARARGS,
      "Move REEM head to a new position (in degree)." ],
    ["moveHeadWithJointTrajectory", METH_VARARGS,
      "Move REEM's head in a specific joint trajectory (a list of joint positions)." ],
    ["moveBodyTo", METH_VARARGS,
      "Move REEM base to a new pose." ],
    ["moveBodyWithSpeed", METH_VARARGS,
      "Set REEM base moving speed." ],
    ["navigateBodyTo", METH_KEYWORDS,
      "Navigate REEM base to a new pose." ],
    ["cancelMoveBodyAction", METH_NOARGS,
      "Cancel the active move body actions." ],
    ["moveTorsoTo", METH_VARARGS,
      "Move REEM torso joints." ],
    ["moveTorsoWithJointTrajectory", METH_VARARGS,
      "Move REEM's torso in a specific joint trajectory (a list of joint positions)." ],
    ["moveArmPoseTo", METH_KEYWORDS,
      "Move one of REEM arms end point pose to a coordinate wrt torso." ],
    ["moveArmWithJointPos", METH_KEYWORDS,
      "Move one of REEM arms with specific joint positions." ],
    ["moveArmWithJointTrajectory", METH_VARARGS,
      "Move one of REEM arms in a specific joint trajectory (a list of joint positions)." ],
    ["moveArmWithJointTrajectoryAndSpeed", METH_VARARGS,
      "Move one of REEM arms in a specific joint trajectory with joint velocity (a list of joint positions with associated velocity)." ],
    ["cancelMoveArmAction", METH_VARARGS,
      "Cancel the active move arm actions." ],
    ["openHand", METH_VARARGS,
      "Open one or both REEM grippers." ],
    ["closeHand", METH_VARARGS,
      "Close one or both REEM grippers." ],
    ["setHandPosition", METH_KEYWORDS,
      "Set specific position on one or both REEM grippers." ],
    ["getBatteryStatus", METH_NOARGS,
      "Get the current battery status." ],
    ["getLowPowerThreshold", METH_NOARGS,
      "Get the low power warning threshold." ],
    ["setLowPowerThreshold", METH_VARARGS,
      "Set the low power warning threshold." ],
    ["setEarLED", METH_VARARGS,
      "Set the colour of the ear LEDs on REEM." ],
    ["pulseEarLED", METH_VARARGS,
      "Pulse the ear LED of REEM between two colours." ],
    ["cancelEarLEDEffect", METH_VARARGS,
      "Cancel an ear LED effect ." ],
    ["setTorsoStiffness", METH_VARARGS,
      "Set the stiffness of the REEM's torso. " ],
    ["setArmStiffness", METH_VARARGS,
      "Set the stiffness of the one of REEM's arms. " ],
    ["listTFFrames", METH_NOARGS,
      "List supported REEM TF frames." ],
    ["isSupportedTFFrame", METH_VARARGS,
      "Check whether the input TF frames is supported." ],
    ["playDefaultMotion", METH_VARARGS,
      "Let REEM play one of its default motion." ],
    ["useMoveIt", METH_NOARGS,
      "Check whether MoveIt is in use." ],
    ["addSolidObject", METH_KEYWORDS,
      "Add a solid object into the collision scene." ],
    ["delSolidObject", METH_VARARGS,
      "Remove an existing solid object from the collision scene." ],
    ["listSolidObjects", METH_NOARGS,
      "List all known solid objects in the collision scene." ],
    ["pickUpObject", METH_KEYWORDS,
      "Pick a known object from a known place." ],
    ["placeObject", METH_KEYWORDS,
      "Place a known object to a known place." ],
    ["registerBaseScanCallback", METH_VARARGS,
      "Register (or deregister) a callback function to get base laser scan data. If target frame is not given, raw data is returned." ],
    ["registerTiltScanCallback", METH_VARARGS,
      "Register (or deregister) a callback function to get tilt laser scan data. If target frame is not given, raw data is returned." ],
    ["registerTorsoSonarCallback", METH_VARARGS,
      "Register (or deregister) a callback function to get REEM torso sonar data." ],
    ["registerPalFaceCallback", METH_VARARGS,
      "Register (or deregister) a callback function to get PAL built-in face detector." ],
    ["startPalFaceEnrollment", METH_VARARGS,
      "Start PAL built-in face enrollment." ],
    ["stopPalFaceEnrollment", METH_NOARGS,
      "Stop PAL built-in face enrollment." ],
    ["directToWeb", METH_VARARGS,
      "Direct REEM chest screen to a URI." ],
    ["getCurrentMapPOIs", METH_NOARGS,
      "Get a dictionary of Point of Interest (POI) in the current map." ],
    ["gotoPOI", METH_VARARGS,
      "Direct REEM to a POI autonomously." ],
    ["cancelGotoPOI", METH_NOARGS,
      "Cancel the active navigation to a POI." ],
    ["sendMessageToNode", METH_VARARGS,
      "Send a text command message to a node that is listening to /pyride/node_message." ]
  ]
};

var toolbox = '<xml>';

Object.keys(pyrideMethods).forEach(function(category, i) {
    toolbox += `<category name="${category}">`
    pyrideMethods[category].forEach(function(method, i) {
        var name = method[0]
        var json = {
            name: name,
            message0: name,
            args0: [],
            tooltip: method[2],
            previousStatement: "Action",
            nextStatement: "Action",
            colour: 160
        }
        var argsType = method[1];
        if (argsType == METH_VARARGS || argsType == METH_KEYWORDS) {
            json.args0.push({
                type: "input_value",
                name: "VALUE"
            });
            json.message0 += ' %1';
        }

        toolbox += `<block type="${name}"></block>`;

        Blockly.Blocks[name] = {
            init: function() {
                this.jsonInit(json);
            }
        };
    });
    toolbox += '</category>';
});

toolbox += '</xml>';

module.exports.toolbox = toolbox;
