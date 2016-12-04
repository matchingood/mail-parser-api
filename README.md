# mail-parser-api
Parsing mail content API on serverless architecture

## Install
You need to install Node.js before executing following commands.
```
$ npm install -g serverless
$ npm install
```

## Run on local machine
```
$ sls offline
```
That's it!

## API

### POST /parse
Request
```json
{
  "mime": "base64 encoded mime text"
}
```
Response
```json
{
  "from": {"address": "test@example.com", "name": "Han Solo"},
  "to": {"address": "test@example.com", "name": "Luke Skywalker"},
  "bcc": [{"address": "test@example.com", "name": "Chewbacca"}],
  "cc": [{"address": "test@example.com", "name": "R2D2"}],
  "subject": "About Death Star plan",
  "html": "content as html",
  "date": "2016-12-02T07:44:11.000Z"
}
```
