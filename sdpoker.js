#!/usr/bin/env node
/* Copyright 2018 Streampunk Media Ltd.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

const { getSDP, checkRFC } = require('./index.js');
const yargs = require('yargs');

const args = yargs
  .help('help')
  .default('nmos', true)
  .boolean([ 'nmos' ])
  .describe('nmos', 'Check for compliance with NMOS rules.')
  .argv;

console.log(args);

async function test (args) {
  try {
    let sdp = await getSDP(args._[0], args.nmos);
    console.log(checkRFC(sdp));
  } catch (e) {
    console.error(e);
  }
}

test(args);
