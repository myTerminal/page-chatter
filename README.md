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

(Coming soon)

## Demo

You can view a demo [here](https://myterminal.github.io/page-chatter/examples).

## To-do

* Write unit-tests
