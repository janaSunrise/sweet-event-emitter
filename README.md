<p align="center">
 <h2 align="center">Sweet event emitter</h2>
 <p align="center">Simple event emitter for Javascript</p>
</p>

## Installation

Get started by installing the package:

```sh
npm install sweet-event-emitter
# OR
yarn add sweet-event-emitter
```

## Usage

The event emitter provides a simple yet rich API to work with events.

#### Creating an event emitter

```ts
import { EventEmitter } from 'sweet-event-emitter';

const emitter = new EventEmitter();
```

#### Listening to events

```ts
emitter.on('event', () => {
  console.log('Event fired!');
});

// Events can have parameters too
emitter.on('event-with-params', (param1, param2) => {
  console.log('Event fired with params:', param1, param2);
});
```

#### Listening to events once

```ts
// This will only fire once
emitter.once('event', () => {
  console.log('Event fired!');
});
```

#### Emitting events

```ts
emitter.emit('event');

// Emit events with parameters
emitter.emit('event-with-params', 'param1', 'param2');
```

#### Removing listeners

```ts
const listener = () => {
  console.log('Event fired!');
};

emitter.on('event', listener);

// Remove a specific listener
emitter.off('event', listener);
```

#### Removing all listeners

```ts
emitter.removeAllListeners('event');
```

#### Get all listeners

```ts
const listeners = emitter.listeners('start');
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome. After cloning & setting up project locally, you can
just submit a PR to this repo and it will be deployed once it's accepted.

⚠️ It's good to have descriptive commit messages, or PR titles so that other contributors can understand
about your commit or the PR created.

## Show your support

We love people's support to grow, improve and give the best. Be sure to drop a 🌟 if you like the project,
and also contribute, if you're interested!

<div align="center">Made by Sunrit Jana with ❤️</div>
