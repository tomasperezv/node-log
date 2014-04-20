node-log
========

Console log wrapper with support for output color messages.

### Installation ###

```shell
$ npm install git+ssh://git@github.com:tomasperezv/node-log.git
```

### Usage ###

```javascript
var log = require('node-log');

log.error('Error message');
log.info('Info message');
log.warning('This is a warning');
log.ok('This is a ok message');
```
