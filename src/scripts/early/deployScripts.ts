/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-constant-condition */
import { NS } from '@ns';

export async function main(ns: NS): Promise<void> {
  let deployServers: any = [];
  const serverFarm = [];
  let serverName;
  const hostNamePrefix = 'SERVER-'; // Prefix farm server with this name
  const numOfServers = 20; // Server total in farm

  const knownServers = [
    'n00dles',
    'foodnstuff',
    'nectar-net',
    'joesguns',
    'harakiri-sushi',
    'hong-fang-tea',
    'iron-gym',
    'neo-net',
    'zer0',
    'phantasy',
    'max-hardware',
    'omega-net',
    'netlink',
    'crush-fitness',
    'silver-helix',
    'the-hub',
    'rothman-uni',
    'syscore',
    'johnson-ortho',
    'sigma-cosmetics',
    'computek',
    'I.I.I.I',
    'aevum-police',
    'summit-uni',
    'rho-construction',
    '.',
    'alpha-ent',
    'syscore',
    'zb-institute',
    'lexo-corp',
    'catalyst',
    'millenium-fitness',
  ];

  const helperServers = [
    'Darkstar',
    'Starlight',
    'Starbright',
    'Battlestar',
    'Blackhole',
  ];

  //let dedicatedServers = ['johnson-ortho-HACK', 'crush-fitness-HACK', 'foodnstuff-HACK', 'sigma-cosmetics-HACK',
  //	'joesguns-HACK'];

  // const scripts = ['/scripts/crack.js', '/scripts/hack.js', '/scripts/grow.js', '/scripts/supergrow.js',
  //   '/scripts/crack.js', '/scripts/deployscripts.js', '/scripts/hacknow.js', '/scripts/crackall.js',
  //   '/scripts/share.js'];

  const scripts = [
    '/scripts/early/hack.js',
    '/scripts/early/deployscripts.js',
    '/scripts/grow.js',
    '/scripts/supergrow.js',
  ];

  for (let index = 1; index <= numOfServers; index++) {
    serverName = hostNamePrefix + index.toString();
    serverFarm.push(serverName);
  }

  deployServers = deployServers.concat(knownServers, helperServers, serverFarm);

  // ns.tprint(deployServers[1]);

  // Wait until we acquire the "BruteSSH.exe" program
  while (!ns.fileExists('BruteSSH.exe')) {
    await ns.sleep(60000);
  }

  for (const server of deployServers) {
    await ns.scp(scripts, server);
    // ns.brutessh(server);
    // ns.nuke(server);
    ns.tprint('Scripts deployed to ' + server);
  }
}
