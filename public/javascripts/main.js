/**
 * Comment header block
 */

'use strict';

import EventHandler from './EventHandler.js';

export default class Main {

  constructor() {
    console.log(`Opening the bag of holding...`);
    new EventHandler();
  }
}

window.addEventListener('load', () => {
  new Main();
});
