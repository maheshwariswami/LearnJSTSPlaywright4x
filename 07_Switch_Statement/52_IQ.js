let resp= 404
switch(resp)
{
    case 200:
        console.log("Request OK")
        break
    case 400:
        console.log("Request created")
        break
    case 404:
        console.log("Request Not Found")
        break
    default:
        console.log("No Status Code Match")
}