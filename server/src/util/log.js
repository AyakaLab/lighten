// Dependencies
const log4js = require("log4js")

let SysTime = new Date()
let logTime = SysTime.getFullYear() + "-" + ("0" + (SysTime.getMonth() + 1)).slice(-2) + "-" + ("0" + SysTime.getDate()).slice(-2)
const coreLogFileName = `./logs/LightenBE-${logTime}.log`

log4js.configure({
    appenders: {
        Core: { type: "file", filename: coreLogFileName },
        console: { type: "console" }
    },
    categories: {
        LightenBE: { appenders: ["console", "Core"], level: "trace" },
        default: { appenders: ["console"], level: "trace" }
    }
})

let LightenBELogger = log4js.getLogger("LightenBE")

function info(log) {
    LightenBELogger.info(log)
}

function trace(log) {
    LightenBELogger.trace(log)
}

function debug(log) {
    LightenBELogger.debug(log)
}

function warning(log) {
    LightenBELogger.warn(log)
}

function fatal(log) {
    LightenBELogger.fatal(log)
}

function level(lev) {
    LightenBELogger.level = lev
}

module.exports = {
    info,
    trace,
    debug,
    warning,
    fatal,
    level
}