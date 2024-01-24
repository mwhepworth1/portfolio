
let blocked = false,
    content, background;
function block(v) {
    if (v == true) {
        try {
            if (!content) content = document.body.innerHTML;
            document.body.innerHTML = '<div style="background-color: #EB4E2F;display:flex;justify-content:center;align-items:center;height:100vh;color:white;"><div style="text-align:center;"><svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" height="150px" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg><h1 style="margin:10px;">Integrity Test Failed.</h1><h3 style="margin:10px;">The use of AI tools in assessments is a violation of the <a href="https://www.byui.edu/student-honor-office/academic-honesty#:~:text=Cheating" style="color:#ffffff;text-decoration: underline;" target="_blank">BYU-Idaho Honor Code</a>.<br>Please disable any extensions that promote the use of AI and move your mouse over this box to test again.</h3></div></div>';
            bocked = true;
        } catch {
            console.log("Error disabling page content.");
        }
    } else if (v == false) {
        if (!content) return;
        try {
            document.body.innerHTML = content;
            blocked = false;
        } catch {
            console.log("Error re-enabling page content.");
        }
    } else return;
}
async function detect(arr) {
    if (blocked) return;
    let failedFetches = 0;
    for (const i of arr) {
        try {
            const r = await fetch("chrome-extension://" + i);
            if (r.ok) {
                block(true);
                console.log("Blocking Content.");
                break;
            }
        } catch (e) {
            failedFetches++;
            if (failedFetches == arr.length) {
                block(false);
            }
        }
    }
}

const extensionsArr = [
    "iiikmhonbbmbdjfokdmmncdohjionkmf/images/logo.svg", //CollegeTools (collegetools.io)
    "bchkdkhfodkkpohjhabdgfhpgjkkgfhg/assets/icon.png", //AnswerAI (answerai.pro)
    "gogdaelhkjfknmbphaopmmlehbafoifb/img/icon.png", //AnswersAI (answersai.ai)
    "ijlpijnplhhbggppiebkfakonpjdikhl/content.html", //Quiz Solver (quizsolverai.com)
    "oednkdncmnfbkhlpihaicgfhmeoanfje/options.html", //Virtual Professor (virtualprofessor.io) (NOT BLOCKED GREAT)
    "oidgiplmcfbadgmofhjicgonldhkbooe/img/login.svg", // Quizzard (NOT WORKING)
    "plghfeffhhcjgalddnfjceicijemcoaa/icons/144x144.png", //DropinAI,
    "dgfigglmnhnamfjbccjoiomogdmglnpa/images/icon16.png", //Homework Helper (NOT WORKING)
    "ehaanimekcjndnhnkojcckjcgalkfgee/icon.png", //Studybudy+ (BLOCKS ONLY ON QUIZ PAGE LOAD)
    "cjpmpjddogcacgckmamjhmjlflfjikdh/images/icon.svg", // Quizwiz
    "hajphibbdloomfdkeoejchiikjggnaif/close_icon_d.56c8e643.svg", //QuestionAI (questionai.com)
    "jpkodibkjgfffjbcaihboenceemgbelk/dialog.html", //Moxo Answers (questionai.com)
    "hccbmhffbioeohofjlmppbicgppcmgde/resources/popup.ts", //Studied AI (NOT WORKING)
    "klknhfgkblobpfimidmhkclikdalnoke/modules/frame.js", //Transript (transcript.study)
    "ldgogjlogbecagpdpfomiiebiaeilgpd/assets/index.esm-4fdf261d.js", //Courseology (courseology.com)
    "iimcimpbdndjaidollhipbkjilpnmfnh/assets/ch-logo-7a3afeb4.svg", //Coursehero (coursehero.com)
    "ojgkoajchjoafbnckklmamjcceiglmkd/quizLogo.png", // QuizMate (quizmate.io)
    "edcebjbpihembjfeogmjamkphfhldnln/content.css", //BLUF (bluf.ai)
    "lamlihfgchoafpnomkjblficpfeonace/icon-128.png", //SmartSolve (smartsolve.ai)
    "iibninhmiggehlcdolcilmhacighjamp/assets/all-icon.svg", //Magical: AI Writer & Autofill Text Expander (getmagical.com)
    "bjkmnimffmhjbfikbempnbanngnnmknc/svg/logo.svg", //AI Toolbar (aitoolbar.co.uk)
    "lgonpmilnmodefgehfmlcbpkjfbakhkb/index.js", //Canvas Hack (Tab-switching detection prevention)
    "mfdlhoackihplokjehpiiffnedbeokod/crosshair32.6d831d4e.png", //AIR Math
    "aahodnigalncogkhfolddkmkklijeoap/assets/icon.png", //Gauth AI Homework & Study Helper
    "gfecjpfhkebjjmanebmejoflhajdgbpa/content-script-selection.css", //Brainly
    "apogailbefogonabpcdihagcplbljiog/assets/js/react.f1979386.js", //TutorEva
    "ppojalbcialfpnanlmjkalgmmfdcedjo/assets/logo-631c7171.js", // Homework Helper
    "aeldeepjdhhldhbgfodleiodmeegnacm/static/resources/resourcesDefault5.png", //PhotoSolve
    "ecnknpjoomhilbhjipoipllgdgaldhll/js/inject.js", //ChatSider AI Copilot
    "ndomankjolllpbijlfdgngibidghflln/css/app.css", //NerdNinja
    "difoiogjjojoaoomphldepapgpbgkhkb/content-all.css", //Sider: GhatGPT Sidebar
    "ofpnmcalabcbjgholdjcjblkibolbppb/content.css", //Monica - Your AI Copilot
    "becfinhbfclcgokjlobojlnldbfillpf/assets/Storage.js", //ChatGPT Sidebar & File Uploader
    "epmjnoajehdombhjonaoifmhbkkflnli/assets/icons/icon16.png", //Ask Jarvis
    "kjihajojcochfdpgpngecjdibjpfkdmn/content.styles.css", //Albus
    "jhickkdplkbfpbikkfldkblbafaahife/logo.b8041f11.png", //AnsGPT Homework Solver
    "mjmncbejfhhccaealcggpeojcdbjmngo/options.html", //Eva-AI
    "gcmemiedfkhgibnmdljhojmgnoimjpcd/options/options.html", //GPT Sidebar
    "mfkfdcmahjobmohdhpgbhflegccgnmec/KaTeX_AMS - Regular.9cd9d238.woff", //ChatX
    "fadapffollpaenabliikgkdllhennpdh/icons/scan.svg", //TutorUp
    "namibaeakmnknolcnomfdhklhkabkchl/scripts/query-pdf.js", //ConchAI
];



// Detects if the user is enables a blacklisted extension after loading the page.
var mouseInfo = false;
document.addEventListener("visibilitychange", () => {
    if (!document.hidden) detect(extensionsArr);
    console.log("Page hidden.")
});
document.getElementsByTagName("body")[0].onmouseenter = () => {
    if (mouseInfo == false) {
        detect(extensionsArr);
        mouseInfo = true;
    } else {
        return;
    }
};
document.getElementsByTagName("body")[0].onmouseleave = () => {
    mouseInfo = false;
};


document.body.onclick = function (e) {
    //Virutal Professor Detection
    let vprof = document.querySelectorAll('[class^="virtualprofessor"]');
    if (vprof[0]) block(true);
    //Studdybuddy+ Detection
    let sbp = document.querySelectorAll('[id^="ask-studybuddy"]');
    if (sbp[0]) block(true);
    //TestBro Detection
    let testbro = document.getElementsByTagName('testbro-app');
    if (testbro[0]) block(true);
    //Quibble Detection
    let quib = document.querySelectorAll('[class^="quibble-box"]');
    if (quib[0]) block(true);
    //WritePanda Detection
    let wpanda = document.querySelectorAll('[id^="chrls-sidebar-"]');
    if (wpanda[0]) block(true);
    //Cheatoz & QuizSolver Detection
    let cheatoz = document.querySelectorAll('button');
    for (const i of cheatoz) {
        if (i.innerHTML == "📋") block(true);
        else continue;
    }
}
document.addEventListener("keydown", function (e) { //WAI Detection
    if (e.ctrlKey && e.altKey && e.key == 'f') {
        block(true);
    }
});
let lastCheckedTime = Date.now();
document.querySelectorAll('input[type="radio"]').forEach(rb => { //WAI Detection
    rb.addEventListener('change', () => {
        let ct = Date.now();
        if (ct - lastCheckedTime < 500) {
            block(true);
        }
        lastCheckedTime = ct;
    })
});

