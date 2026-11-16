//Default export
export default function logMessage(message) {
    console.log("[LOG] " + message);
}

export function logError(error) {
    console.error("[ERROR] " + error);
}


export function logBetter(message) {
    console.log("-----------");
    console.log("[LOGS] " + message);
    console.log("-----------");
}

export function logBetter2(message) {
    console.log("-----------");
    console.log("[LOGS] " + message);
    console.log("-----------");
}