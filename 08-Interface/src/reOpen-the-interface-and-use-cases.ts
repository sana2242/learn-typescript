//REOPEN THE INTERFACE AND USE CASES 

interface Settings{
    readonly theme: boolean;
    font: string;
}

interface Settings{
    sidebar:boolean;
}

interface Settings{
    external: boolean;
}

let userSettings: Settings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true
}
