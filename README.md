# ray-flags
An easy command line flags handeling library for ray-userland software.

# Installation
```
npm i ray-flags --save
```

#Usage
Add the following code to your app:
```javascript
const flags = require('ray-flags');

console.log(flags.n); // logs name
console.log(flags.a); // logs age

```
Call your `ray-flags` using app with the following approach:
```
app -n "John Doe" -a 45
```

# Comming Soon
1. Support for long flags, e.g. `--name="John Doe" --age=45`.
2. Flag symmetry, e.g. `-n === --name` is `true`.
3. DataTyping for flag values.
4. Ignoring and Error throwing for flags.
5. Auto CLI documentation Generation.
6. etc.

# LICENSE
MIT License

Copyright (c) 2021 Ray Voice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

