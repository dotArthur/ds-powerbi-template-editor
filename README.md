# ds-powerbi-template-editor

## Description

The ds-powerbi-template-editor is a web application based on json-editor/json-editor. It's designed to help Microsoft PowerBI users create reusable Theme files.

## Installation

get ds-powerbi-template-editor installing it via npm

```bash
npm i ds-powerbi-template-editor
copy node_modules/ds-powerbi-template-editor < where ever you want to edit the project >
```

once you are in the folder:

```bash
npm i 
npm run vite
```

now vite should give you a local demo

```bash
  "scripts": {
    "vite": "vite",
    "start": "serve -s dist",
    "heroku-postbuild": "npm run build",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
```

I ran the whole thing on Heroku but you can edit the package.json scripts and run it anywhere you want, you only have to delete the <"heroku-postbuild"> script and then you can simply edit the project local serve it and give the dist folder to your provider

## Usage

Use the Object Properties button to view and adjust values. After making your adjustments, click on the Download JSON button to get a JSON file with the fields you edited.

## Contributing

There are currently no guidelines for contributing. Please feel free to submit pull requests or open issues.

## License

This project is licensed under the terms of the MIT license.

## Related

[schema-based-json-editor](https://github.com/plantain-00/schema-based-json-editor)

[json-editor/json-editor](https://github.com/json-editor/json-editor)

## Authors

- [@dotArthur](https://github.com/dotArthur)
