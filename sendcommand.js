module.exports = function(RED) {
	function MiHomeSendCommandNode(config) {
		RED.nodes.createNode(this, config);
		var node = this;
		// this.status({ fill: 'red', shape: 'dot', text: 'No request' }); // status example
		node.on('input', function(msg) {
			// mihome part starts here
			//var payload = msg.payload;
			const mihome = require('node-mihome');
			mihome.miioProtocol.init();
			//add config properties from node to msg
			msg.name = config.name;
			msg.xiaomiId = config.xiaomiId;
			msg.address = config.address;
			msg.model = config.model;

			const device = mihome.device({
				id: config.xiaomiId, //'358737912', // required, device id
				model: config.model, //'zhimi.airpurifier.vb2', // required, device model
				address: config.address, //'192.168.80.119', // miio-device option, local ip address
				token: config.token, //'300723076d1f78e2ec7d0607fbe60261', // miio-device option, device token
				refresh: 30000 // miio-device option, device properties refresh interval in ms
			});
			async function af() {
				try {
					await device.init(); // connect to device and poll for properties
					
					Object.keys(msg.payload).forEach(async function(key) {
						var setterMethodName = key;
						//console.log('setting "' + setterMethodName + '" to "' + msg.payload[key] +'"')
						try {
    						await device.miotSetProperty(setterMethodName, msg.payload[key]);
  						} catch(exception) {
    						node.warn(`Mihome Exception: Device: ${device.id}, IP: ${device.address} -> ${exception.message}`);
							//msg.jobstatus = 'failed';
							//node.send(msg);  
							return;						
  						}
					});
					//additional command that should always be sent, eg power on state, should not be used.
					//await device.setPower(true); //takes about 5 seconds
				} catch (exception) {
					node.warn(`Mihome Exception: Device: ${config.xiaomiId}, IP: ${config.address} -> ${exception.message}`);
					return;
				}
				msg.jobstatus = 'success';
				node.send(msg);
			}			
			af()
			
		});
	}
	RED.nodes.registerType("mihome-SendCommand", MiHomeSendCommandNode); // must be same as registerType from html
}
