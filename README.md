# hubot-joke-delay-punchline

Tells a joke with a delay to the punchline

See [`src/joke-delay-punchline.js`](src/joke-delay-punchline.js) for full documentation.

## Installation

In hubot project repo, run:

```
npm install hubot-joke-delay-punchline --save
```

Or add `"hubot-joke-delay-punchline": ""` to your package.json dependencies

Then add **hubot-joke-delay-punchline** to your `external-scripts.json`:

```json
[
  "hubot-joke-delay-punchline"
]
```

## Configuration
A list of jokes is built in and can be modified, located in lib/jokes.json
Custom jokes can be added to the json file or a url to a json file can be set as
an environment variable.

#### **Environment Variables:**

| Key Term | Description |
| HUBOT_JOKES_URL | (Optional) Url to json of jokes |


## Sample Interaction:

Leia:     Tell me a joke
Hubot:    Sure! I know a few
Hubot:    What do you call a bear with no teeth?
(wait 6 sec)
Hubot:    A Gummy Bear :)

## NPM Module

[https://www.npmjs.com/package/hubot-joke-delay-punchline](https://www.npmjs.com/package/hubot-joke-delay-punchline)
