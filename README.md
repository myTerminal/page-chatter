# page-chatter

[![npm version](https://badge.fury.io/js/page-chatter.svg)](https://badge.fury.io/js/page-chatter)
[![npm downloads](https://img.shields.io/npm/dt/page-chatter.svg)](https://www.npmjs.com/package/page-chatter)  
[![Build Status](https://travis-ci.org/myTerminal/page-chatter.svg?branch=master)](https://travis-ci.org/myTerminal/page-chatter)
[![Code Climate](https://codeclimate.com/github/myTerminal/page-chatter.png)](https://codeclimate.com/github/myTerminal/page-chatter)
[![js-myterminal-style](https://img.shields.io/badge/code%20style-myterminal-blue.svg)](https://www.npmjs.com/package/eslint-config/myterminal)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/page-chatter.svg)](https://coveralls.io/r/myTerminal/page-chatter?branch=master)  
[![Dependency Status](https://david-dm.org/myTerminal/page-chatter.svg)](https://david-dm.org/myTerminal/page-chatter)
[![devDependency Status](https://david-dm.org/myTerminal/page-chatter/dev-status.svg)](https://david-dm.org/myTerminal/page-chatter#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/page-chatter/peer-status.svg)](https://david-dm.org/myTerminal/page-chatter#info=peerDependencies)  
[![License](https://img.shields.io/github/license/myTerminal/page-chatter.svg)](https://opensource.org/licenses/MIT)  
[![NPM](https://nodei.co/npm/page-chatter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/page-chatter/)

A simple library to facilitate chatter between web-apps running on the same page

## How to Use

### Directly from a web page

One can use *page-chatter* directly from a web-page by attaching the *page-chatter.js* to the DOM.

    <!-- Attaching the page-chatter script -->
    <script type="text/javascript" src="path/to/library/page-chatter.js"></script>

    <!-- Usage -->
    <script type="text/javascript">
        pageChatter.init();
    </script>

### With [Webpack](https://webpack.js.org), [Browserify](http://browserify.org) or [RequireJS](http://requirejs.org)

Install *page-chatter* from NPM

    npm install page-chatter --save-dev

Consume as an ES6 module

    import * as pageChatter from 'page-chatter';

or

    import { init, listen, talk } from 'page-chatter';

Consume as a CommonJS module

    var pageChatter = require('page-chatter');

Consume as an AMD

    require(['page-chatter'], function (pageChatter) {
        // Consume pageChatter
    }

Note: You may have to use [Babel](https://babeljs.io) for ES6 transpilation.

### Simple usage

1. Import *page-chatter* functions

        import { init, listen, talk, broadcast, terminate } from 'page-chatter';

2. Initialize *page-chatter*

        init();

    The above line should be placed in the parent-most app, the one that can host *page-chatter* in a way that it can be accessed from any other contained app participating in the chatter. 

3. Listen to chatter from an app on the page

        listen(
            'sub-app1', // Own Id
            ({ event, payLoad }) => {
                // TODO: Consume messages
            }
        );

    The first argument to `listen` needs to be an identifier for the current participating app and the second is a handler that receives messages with an `event` and a `payLoad` (if at all there's one).

4. Talk to another app participating in the chatter

        talk(
            'sub-app2', // Id of the recipient
            'get-sum', // Event identifier
            {
                num1: 2,
                num2: 3
            } // Message data
        );

    The first argument to `talk` is the identifier of the recipient, the second is the `event` for the recipient to know the nature of the message and the third is the `payLoad`.

5. Talk to all other participants at once

        broadcast(
            'he-is-here' // Event identifier
            {
                who: 'someone'
            } // Message data
        );

    The arguments to `broadcast` are the same as `talk` but there is no `id` for the recipient, as all participants can listen.

6. [Optional] Terminate the chatter

        terminate();

    A call to `terminate` releases *page-chatter*'s control from the page and returns everything back to normal.

## Demo

You can view a demo [here](https://myterminal.github.io/page-chatter/examples).

## To-do

* Write unit-tests
