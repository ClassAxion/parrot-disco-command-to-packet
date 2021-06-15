import fs from 'fs/promises';
import { constants } from 'fs';

import networkFrameGenerator from './utils/networkFrameGenerator.util';
import commandToBuffer from './utils/commandToBuffer.util';

const parseCommand = (command: any[]): Buffer => {
    const buffer: Buffer = commandToBuffer(command[0], command[1], command[2], command[3], command[4]);

    return networkFrameGenerator(buffer);
};

(async () => {
    const commandFilePath: string = 'command.json',
        commandBufferFilePath: string = 'command.dat';

    try {
        await fs.access(commandFilePath, constants.F_OK);
    } catch (e) {
        console.error(`Please write your command in command.json file`);

        throw e;
    }

    let command: any[];

    try {
        command = JSON.parse(await fs.readFile(commandFilePath, 'utf8'));
    } catch (e) {
        console.error(`Parsing command.json failed`);

        throw e;
    }

    console.log(`Parsing command: ${JSON.stringify(command)}`);

    const frame: Buffer = parseCommand(command);

    console.log(`Got frame:`, frame);

    await fs.writeFile(commandBufferFilePath, frame, 'binary');

    console.log(`Saving to:`, commandBufferFilePath);

    console.log(`Now you can view it by`);
    console.log();
    console.log(`xxd -b ${commandBufferFilePath}`);
    console.log();
    console.log(`or send UDP packet via`);
    console.log();
    console.log(`dd if=${commandBufferFilePath} bs=512 count=1 > /dev/udp/192.168.42.1/54321`);
    console.log();
})();
