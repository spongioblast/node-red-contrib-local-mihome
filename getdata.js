module.exports = function(RED) {
	function MiHomeGetDataNode(config) {
		RED.nodes.createNode(this, config);
		var node = this;
		// this.status({ fill: 'red', shape: 'dot', text: 'No request' }); // status example
		node.on('input', function(msg) {
			// mihome part starts here
			
			const mihome = require('node-mihome');
			mihome.miioProtocol.init();
			//const options = { country: 'de' };
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
					await device.on('properties', (data) => {
						msg.payload = data;
						node.send(msg);
						device.destroy();
					});
					await device.setPower(true); //takes about 5 seconds
					
				} catch (exception) {
					node.warn(`Mihome Exception: Device: ${config.xiaomiId}, IP: ${config.address} -> ${exception.message}`);
					//msg.error = exception.message;
					//await node.send(msg);
					return;
				}
			}			
			af()
		});
	}
	RED.nodes.registerType("mihome-getdata", MiHomeGetDataNode); // must be same as registerType from html
}