# sanitize-input

Simple, declarative interface to scrub user inputs with the [Sanitizer Web API](https://developer.mozilla.org/en-US/docs/Web/API/Sanitizer).

<!-- ## Features

- Argument type
- custom options... -->

## Motivation

The Sanitizer Web API is a tool which allows developers to take untrusted strings of HTML, and sanitize them for safe insertion into a document’s DOM. `sanitize-input` simplifies `window.Sanitizer`'s API, removing programmatic access to DOM in favor of a more declarative interface useful for frontend frameworks.

## Compatability

The Sanitizer Web API is currently in development, try to use Chrome Canary with `chrome://flags/#enable-experimental-web-platform-features` enabled, or Firefox Nightly with `dom.security.sanitizer.enabled` set to true.

## Install

```
npm install sanitize-input
```

## API

Invoking the default export from `sanitize-input` will return a function that has a closed over reference to a single instance of `window.Sanitizer`. This returned function (`this.sanitize` in the examples) behaves in two ways. Given a string, it will return a sanitized string. Given an event handler, `Sanitize` will wrap the function, creating a `sanitizedValue` property on `event.target`.

## Usage

1. Sanitize strings directly

```js
import Sanitizer from 'sanitize-input';

class App extends React.Component {
  constructor() {
    this.state = { inputText: 'none' };
    this.onChange = this.onChange.bind(this);
    // creates one reusable instance of window.Sanitizer
    this.sanitize = Sanitizer();
  }

  onChange(e) {
    this.setState({ inputText: this.sanitize(e.target.value) });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} />
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}
```

2. Wrap an event handler, access `e.target.sanitizedValue`

```js
import Sanitizer from 'sanitize-input';

class App extends React.Component {
  constructor() {
    this.state = { inputText: 'none' };
    this.onChange = this.onChange.bind(this);
    // creates one reusable instance of window.Sanitizer
    this.sanitize = Sanitizer();
  }

  onChange(e) {
    this.setState({ inputText: e.target.sanitizedValue });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.sanitize(this.onChange)} />
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}
```

## License

MIT
