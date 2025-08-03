/* eslint-disable no-constant-condition */
import { NS, Server } from '@ns';

export async function main(ns: NS): Promise<void> {
  const target = `${ns.args[0]}`;
  const server: Server = ns.getServer(target);

  const ramAvailable = server.maxRam - server.ramUsed;
  const ramPerThread = ns.getScriptRam('/scripts/hack.js');
  const maxThreads = Math.floor(ramAvailable / ramPerThread);

  ns.tprint('------------------------------------');
  ns.tprint('Server Infomation');
  ns.tprint('------------------------------------');
  ns.tprint('Host Name: ' + server.hostname);
  ns.tprint('IP: ' + server.ip);
  ns.tprint('Owned By: ' + server.organizationName);
  ns.tprint('');
  ns.tprint('------------------------------------');
  ns.tprint('Security Infomation');
  ns.tprint('------------------------------------');
  ns.tprint('Required Hacking Level: ' + server.requiredHackingSkill);
  ns.tprint('Min Security level: ' + server.minDifficulty);
  ns.tprint(
    'Current security: ' + ns.nFormat(server.hackDifficulty || 0, '0.00')
  );
  ns.tprint('');
  ns.tprint('------------------------------------');
  ns.tprint('Money Infomation');
  ns.tprint('------------------------------------');
  ns.tprint('Max Money: ' + ns.nFormat(server.moneyMax || 0, '$0.000a'));
  ns.tprint(
    'Current Money: ' + ns.nFormat(server.moneyAvailable || 0, '$0.000a')
  );
  ns.tprint('Server Growth: ' + server.serverGrowth);
  ns.tprint('');
  ns.tprint('------------------------------------');
  ns.tprint('Hardware Infomation');
  ns.tprint('------------------------------------');
  ns.tprint('Cores: ' + server.cpuCores);
  ns.tprint('Max RAM: ' + server.maxRam);
  ns.tprint('Used RAM: ' + server.ramUsed);
  ns.tprint('Max Threads: ' + maxThreads);
  ns.tprint('');
  ns.tprint('------------------------------------');
  ns.tprint('Hacking Infomation');
  ns.tprint('------------------------------------');
  ns.tprint('Rooted: ' + server.hasAdminRights);
  ns.tprint('Backdoored: ' + server.backdoorInstalled);
  ns.tprint('Required Open Ports: ' + server.numOpenPortsRequired);
  ns.tprint('Ports Currently Open: ' + server.openPortCount);
  ns.tprint('------------------------------------');
}
