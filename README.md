#node-red-contrib-mihome


[![platform](https://img.shields.io/badge/platform-Node--RED-red?style=flat-square)](https://nodered.org)
[![npm](https://img.shields.io/npm/v/node-red-contrib-mihome?style=flat-square)](https://www.npmjs.com/package/node-red-contrib-local-mihome)
[![npm](https://img.shields.io/npm/dw/node-red-contrib-mihome?style=flat-square)](https://www.npmjs.com/package/node-red-contrib-local-mihome)
[![GitHub](https://img.shields.io/github/license/spongioblast/node-red-contrib-local-mihome?style=flat-square)](https://github.com/spongioblast/node-red-contrib-local-mihome/blob/main/LICENSE)

[![GitHub](https://github.com/spongioblast/node-red-contrib-local-mihome)

Add nodes to get data from and send commands to devices connected to the local network using [node-mihome](https://github.com/spongioblast/node-red-contrib-local-mihome). 

## Requirements

* `node` v12.22.0 or higher
* `node-red` v1.3.0 or higher

## Install

Run `npm i node-red-contrib-local-mihome` in `~/.node-red` directory or search **node-red-contrib-local-mihome** and install from **Palette Manager**.

## Adding device support

If you want to add device support, you can make a PR or add request in discussions. Check [supported devices](https://github.com/maxinminax/node-mihome/blob/master/DEVICES.md) in `node-mihome` package and use node [template](nodes/template) for boost development. Additional information you can find in [contributing guide](CONTRIBUTING.md).

## Examples

<img src="https://github.com/spongioblast/node-red-contrib-local-mihome/blob/main/readme/example_config.png?raw=true">
<img src="https://github.com/spongioblast/node-red-contrib-local-mihome/blob/main/readme/example_command.png?raw=true">
<img src="https://github.com/spongioblast/node-red-contrib-local-mihome/blob/main/readme/example_response.png">

## Example flows

Example flows can be downloaded from <a href="https://github.com/spongioblast/node-red-contrib-local-mihome/blob/main/example/local_mihome_flows.json">here</a>.

<img src="https://github.com/spongioblast/node-red-contrib-local-mihome/blob/main/readme/example_flows.png">
