let browser="Brave"
switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project")
        break;
    case "Firefox":
        console.log("Mozilla Project")
        break;
    case "Safari":
        console.log("Apple Safari Project")
    default:
        console.log("Unknow browser")
        break;
}