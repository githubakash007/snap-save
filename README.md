# snap-save
A small js library to take snap  using your computer camera and return the image DataURI.
 future feature ( will work as time permit):
  1. Save the taken snap on the local or remote database.

## Demo app
* click [here](https://angular-qxwpjd.stackblitz.io) for the demo app. 
* click [here](https://stackblitz.com/edit/angular-qxwpjd) for  editing the demo app and live  reload. 

## Installation
  ```sh
npm install snap-save --save
yarn add snap-save
bower install snap-save --save
```

 ## Usage
 ### Javascript
```javascript
const snapSave = require('snap-save');
 snapSave.startVideo((imageDataURI:string) => console.write(imageDataURI));
```
```sh
Output should be the image DataURI when you clicked the image
```
### TypeScript
```typescript
import { startVideo } from 'snap-save';
startVideo((imageDataURI:string) => console.log(imageDataURI));
```
```sh
Output should be the image DataURI when you clicked the image
```
### AMD
```javascript
define(function(require,exports,module){
  var snapSave = require('snap-save');
  snapSave.startVideo((imageDataURI:string) => console.write(imageDataURI));
});
```
```sh
Output should be the image DataURI when you clicked the image
```
