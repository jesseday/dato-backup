# DatoCMS export scripts

These scripts are to work with exporting content and
structure from DatoCMS.  The intention is that this
content and structure could then be transformed as
needed if moving to a different cms.

## Usage

* Install dependencies: `npm i`
* Create your .env file: `cp .env.example .env`
* Add your DatoCMS api key to the .env file
* Run commands with `npm run [command]`

| command | description |
| ------- | ----------- |
| `export:content` | Exports all content from the main environment, including assets |
| `export:structure` | Exports the CMS model structure |
