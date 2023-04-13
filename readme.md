# DatoCMS export scripts

These scripts are to work with exporting content and
structure from DatoCMS.  The intention is that this
content and structure could then be transformed as
needed if moving to a different host.

## Usage

Install dependencies: `npm i`
Run commands with `npm run [command]`

| command | description |
| ------- | ----------- |
| `npm run export:content` | Exports all content from the main environment, including assets |
| `npm run export:structure` | Exports the CMS model structure |
