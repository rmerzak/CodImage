export const languages = [
    { name: 'javascript', value: 'javascript', icons: '/javascript.svg' },
    { name: 'java', value: 'java', icons: '/java.svg' },
    { name: 'python', value: 'python', icons: '/python.svg' },
    { name: 'xml', value: 'xml', icons: '/xml.svg' }, ///
    { name: 'ruby', value: 'ruby', icons: '/ruby.svg' },
    { name: 'sass', value: 'sass', icons: '/sass.svg' }, ///
    { name: 'markdown', value: 'markdown', icons: '/markdown.svg' },
    { name: 'mysql', value: 'mysql', icons: '/mysql.svg' },
    { name: 'json', value: 'json', icons: '/json.svg' }, //
    { name: 'html', value: 'html', icons: '/html.svg' },
    { name: 'handlebars', value: 'handlebars', icons: '/handlebars.svg' },
    { name: 'golang', value: 'golang', icons: '/golang.svg' }, //
    { name: 'csharp', value: 'csharp', icons: '/csharp.svg' },
    { name: 'css', value: 'css', icons: '/css.svg' },
    { name: 'typescript', value: 'typescript', icons: '/typescript.svg' },

]

export const themes = [
    { "name": "monokai", "value": "monokai" },
    { "name": "twilight", "value": "twilight" },
    { "name": "terminal", "value": "terminal" },
    { "name": "github", "value": "github" },
    { "name": "xcode", "value": "xcode" },
    { "name": "chaos", "value": "chaos" },
    { "name": "dracula", "value": "dracula" },
    { "name": "solarized_dark", "value": "solarized_dark" },
    { "name": "solarized_light", "value": "solarized_light" },
    { "name": "tomorrow", "value": "tomorrow" },
    { "name": "dawn", "value": "dawn" },
    { "name": "tomorrow_night", "value": "tomorrow_night" },
    { "name": "tomorrow_night_blue", "value": "tomorrow_blue" },
    { "name": "tomorrow_night_bright", "value": "tomorrow_bright" },
    { "name": "tomorrow_night_eighties", "value": "tomorrow_eight" },
    { "name": "kuroir", "value": "kuroir" },
    { "name": "ambiance", "value": "ambiance" },
    { "name": "clouds_midnight", "value": "clouds_midnight" },
    { "name": "cobalt", "value": "cobalt" },
    { "name": "idle_fingers", "value": "idle_fingers" },
    { "name": "kr_theme", "value": "kr_theme" },
    { "name": "merbivore", "value": "merbivore" },
    { "name": "merbivore_soft", "value": "merbivore_soft" },
    { "name": "mono_industrial", "value": "mono_industrial" },
    { "name": "pastel_on_dark", "value": "pastel_on_dark" },
    { "name": "sqlserver", "value": "sqlserver" },
    { "name": "textmate", "value": "textmate" }
];


export const backgrounds = [
    "linear-gradient(354deg,#ff75b5, #ffb86c)",
    "linear-gradient(140deg,rgb(255, 207, 115), rgb(255, 122, 47))",
    "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
    "linear-gradient(90deg, #93f9b9, #1d976c)", 
    "linear-gradient(140deg,rgb(142, 199, 251), rgb(28, 85, 170))",
    "linear-gradient(337deg, #654ea3, #da98b4)",
    "#000",
    "#fff",
    "linear-gradient(270deg, #fc6767, #ec008c)",
    "linear-gradient(140deg, rgb(165, 142, 251),rgb(233, 191, 248))",
    "linear-gradient(270deg, #514a9d, #24c6dc)",
]

export const initialCode = `
function applyForJob(availablePositions) {
    const message = availablePositions > 0
        ? \` 
        Dear Hiring Wizard,
        
        I wield JavaScript spells! 🧙♂️ Ready to bring magic to your codebas
        .If there are \${availablePositions} spots, let's make sparks fly! ✨💻
        Enchantingly,
        rmerzak\`
        : \`
        Dear Future Collaborator,
        
        On a quest for opportunities! 🗺️ If no positions now, let's connect and
        gear up for the epic journey ahead.
        Adventure-ready! 🚀🌌
        Whimsically,
        rmerzak\`;

    return message;
}
`