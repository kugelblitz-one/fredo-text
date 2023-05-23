# fredo-text
an external text package for Fredo,
 - cleaner code base all the long text messages are in one place
 - allow product managers to edit and tweak text messages
 - allow future translation and language support efforts to require minimal changes to the project code base

### guidelines
please use simple Json files with simple strings
if you really need a tempalte use this simple pattern from this lib
([string-template](https://www.npmjs.com/package/string-template))

```
"Hello {name}, you have {count} unread messages"
```

in the code we can insert things like so
```
var compile = require("string-template/compile")
 
var greetingTemplate = compile("Hello {0}, you have {1} unread messages")
 
var greeting = greetingTemplate("Robert", 12)
// -> "Hello Robert, you have 12 unread messages"
```
