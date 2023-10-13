    import DATA from "./PowerBISchema";
    import { JSONEditor } from "react-schema-based-json-editor";
    import "https://cdn.jsdelivr.net/npm/@json-editor/json-editor@latest/dist/jsoneditor.min.js"

    const editorElem = document.getElementById('editor');
        var editor = new JSONEditor(editorElem, {
            schema: DATA
        })
export default editor;