import data from './PowerBISchema.json'
window.onload = function () {
    const editorElem = document.getElementById('editor');
    var editor = new JSONEditor(editorElem, {
        schema: data
    })
}
