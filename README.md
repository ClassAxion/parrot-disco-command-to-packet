# Generate packet

In `command.json` you have to write your packet in JSON format.
You can check available methods [here](https://github.com/ClassAxion/parrot-disco-command-to-packet/blob/master/src/statics/commands.static.json).
Then run `npm run parse` to generate packet from your command.

# Sending packet to parrot disco

After generating packet you will get `command.dat` file with binary data.
To send this data to parrot disco you can type `dd if=command.dat bs=512 count=1 > /dev/udp/192.168.42.1/54321`
Of course, you must be in the network with disco.
If you are using zerotier instead of WiFi you have to replace `192.168.42.1` with your disco ZeroTier IP.
