/**
 * NOVASTUDIOS NEURAL ENGINE - JARVIS EDITION
 * Master Technical Assistant[cite: 1]
 */

const JARVIS_DATABASE = {
    languages: [
        "Java", "Python", "C#", "C++", "Kotlin", "Swift", "Rust", "Go", "Ruby", "PHP", 
        "Scala", "Dart", "Lua", "Haskell", "Erlang", "Elixir", "C", "R", "Julia", "SQL", 
        "Perl", "Shell", "Assembly", "Fortran", "COBOL", "Pascal", "Ada", "Lisp", "Scheme", 
        "Prolog", "Groovy", "Clojure", "F#", "VB.NET", "VimScript", "YAML", "JSON", "XML", 
        "Markdown", "Sass", "Less", "Stylus", "GraphQL", "Solidity", "Apex", "Verilog", 
        "VHDL", "Tcl", "ActionScript", "Smalltalk"
    ],

    pluginKnowledge: {
        api: "Usa Paper API preferiblemente, es más rápida y segura que Spigot[cite: 1].",
        optimization: "Evita operaciones pesadas en Async si tocas la API de Bukkit directamente[cite: 1].",
        luckperms: "Configura grupos y prefijos con /lp editor. No edites el archivo config.yml manualmente[cite: 1].",
        errors: {
            "npe": "NullPointerException: Verifica que no estés llamando a un jugador offline[cite: 1].",
            "cast": "ClassCastException: Estás intentando convertir un objeto en otro incompatible. Revisa tus imports[cite: 1]."
        }
    }
};

// Inyectar Lenguajes al Hub
function initLanguages() {
    const hub = document.getElementById('hub-container');
    JARVIS_DATABASE.languages.forEach(lang => {
        const div = document.createElement('div');
        div.className = 'lang-tag';
        div.innerText = lang;
        div.onclick = () => {
            logJarvis(`[JARVIS]: Módulo de sintaxis para ${lang} cargado satisfactoriamente[cite: 1].`);
        };
        hub.appendChild(div);
    });
}

// Visualizador en Tiempo Real
function updateVisualizer() {
    const code = document.getElementById('main-editor').value;
    const frame = document.getElementById('preview-frame').contentWindow.document;
    frame.open();
    frame.write(code);
    frame.close();
}

// Motor de IA de Programación
function sendToJarvis() {
    const input = document.getElementById('user-input');
    const flow = document.getElementById('chat-flow');
    const val = input.value.trim().toLowerCase();

    if (!val) return;

    // Mensaje de Fabio
    flow.innerHTML += `<div style="margin: 15px 0; color: #fff;">> Fabio: ${input.value}</div>`;

    // Procesamiento Lógico
    setTimeout(() => {
        let reply = "[JARVIS]: Como tu asistente técnico senior, analizo que tu consulta requiere una revisión del código fuente o de la infraestructura de NovaStudios[cite: 1].";

        if (val.includes("error")) reply = "[JARVIS]: Analizando StackTrace... Asegúrate de que todas las dependencias estén en la carpeta /plugins y que la versión de Java sea compatible[cite: 1].";
        if (val.includes("luckperms") || val.includes("permisos")) reply = JARVIS_DATABASE.pluginKnowledge.luckperms;
        if (val.includes("web") || val.includes("diseño")) reply = "[JARVIS]: El visualizador HTML está activo. He optimizado el render para que veas tus cambios de CSS instantáneamente[cite: 1].";
        if (val.includes("host") || val.includes("gratis")) reply = "[JARVIS]: Si quieres potencia real, ve por Oracle Cloud. Si es solo para pruebas rápidas, Aternos cumple la función[cite: 1].";
        if (val.includes("java")) reply = "[JARVIS]: Para plugins, usa Java 17 o 21. No olvides registrar tus comandos en el plugin.yml[cite: 1].";

        logJarvis(reply);
    }, 450);

    input.value = "";
}

function logJarvis(msg) {
    const flow = document.getElementById('chat-flow');
    flow.innerHTML += `<div style="margin: 10px 0; color: #00d2ff; border-left: 2px solid #800020; padding-left: 10px;">${msg}</div>`;
    flow.scrollTop = flow.scrollHeight;
}

// Inicio del Sistema
initLanguages();
window.onload = updateVisualizer;
console.log("Jarvis Technical Engine v8.0 cargado satisfactoriamente[cite: 1].");
