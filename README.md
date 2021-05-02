# sanitize-input

Scrub user inputs with the [Sanitizer Web API](https://developer.mozilla.org/en-US/docs/Web/API/Sanitizer).

<!-- ## Features

- Argument type
- custom options... -->

## Compatability

The Sanitizer Web API is currently in development, try to use Chrome Canary with `chrome://flags/#enable-experimental-web-platform-features` enabled, or Firefox Nightly with `dom.security.sanitizer.enabled` set to true.

## Install

```
npm install sanitize-input
```

## Usage

1. Sanitize strings directly

```js
import Sanitize from 'sanitize-input';

class App extends React.Component {
  constructor() {
    this.state = { inputText: 'none' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ inputText: Sanitize(e.target.value) });
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

2. Wrap an event handler, access e.target.sanitizedValue

```js
import Sanitize from 'sanitize-input';

class App extends React.Component {
  constructor() {
    this.state = { inputText: 'none' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ inputText: e.target.sanitizedValue });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={Sanitize(this.onChange)} />
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}
```

## License

MIT
