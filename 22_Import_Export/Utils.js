export let BASE_URL = "https://api.example.com/data";

export function formatTestName(name) {
    return ("TC_" + name.toUpperCase()).replaceAll(" ", "_");
}

export class LoginPage{

    constructor(page){
        this.page = page;
    }
    async login(username, password){
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        await this.page.click('#loginButton');
    }

    async openLoginPage(){
        await this.page.goto(BASE_URL);
    }

    async closeBrowser(){
        await this.page.close();
    }
    
}