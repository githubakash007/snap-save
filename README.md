# snap-save
A small js library to take snap  using your computer camera and save it on the hard-disk OR in the local or remote database.

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
snapSave.startVideo((imageDataURI:string) => console.write(imageDataURI));
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
