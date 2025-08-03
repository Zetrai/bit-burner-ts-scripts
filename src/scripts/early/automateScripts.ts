/* eslint-disable no-constant-condition */
import { NS } from '@ns';

export async function main(ns: NS): Promise<void> {
  // Globals
  let servers = [
    'n00dles',
    'foodnstuff',
    'joesguns',
    'harakiri-sushi',
    'hong-fang-tea',
    'iron-gym',
    'neo-net',
    'zer0',
    'phantasy',
    'max-hardware',
    'omega-net',
    'silver-helix',
    'the-hub',
    'rothman-uni',
    'sigma-cosmetics',
    'aevum-police',
    'summit-uni',
    'rho-construction',
    '.',
    'alpha-ent',
    'zb-institute',
    'lexo-corp',
    'catalyst',
    'millenium-fitness',
  ];

  // const targets = ['rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction',
  // 	'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction', 'rho-construction',
  // 	'rho-construction', 'aevum-police', 'summit-uni', 'rho-construction', 'alpha-ent', 'alpha-ent',
  // 	'zb-institute', 'lexo-corp', 'catalyst', 'millenium-fitness'];

  const helperServers = [
    'Darkstar',
    'Starlight',
    'Starbright',
    'Battlestar',
    'Blackhole',
  ];
  const hostNamePrefix = 'SERVER-'; // Prefix farm server with this name
  const numOfServers = 20; // Server total in farm
  const serverFarm = [];
  let serverName;

  for (let index = 1; index <= numOfServers; index++) {
    serverName = hostNamePrefix + index.toString();
    serverFarm.push(serverName);
  }

  servers = servers.concat(helperServers, serverFarm);

  //getTargetServer
  const programsCount = await getProgramsAndInstall(false, ns);
  const myInfo = {
    level: ns.getHackingLevel(),
    portsUnlocked: programsCount,
    moneyAvailable: await ns.getServerMoneyAvailable('home'),
  };
  const targetServer = await getTargetServer(myInfo, ns);
  await getProgramsAndInstall(targetServer, ns);
  await ns.nuke(targetServer);

  const script = '/scripts/early/hack.js';
  //const script = '/scripts/share.js';

  // Variables
  let totalRAMavailable = 0;
  let serverRAM = 0;

  // Calculate total RAM available on all servers
  for (let index = 0; index < servers.length; index++) {
    ns.killall(servers[index]);
    serverRAM = ns.getServerMaxRam(servers[index]);
    totalRAMavailable += serverRAM;

    // ns.tprint("Server RAM available = " + serverRAM);
  }

  for (let index = 0; index < servers.length; index++) {
    const ramAvailable =
      ns.getServerMaxRam(servers[index]) - ns.getServerUsedRam(servers[index]);
    const ramPerThread = ns.getScriptRam(script);
    const threads = Math.floor(ramAvailable / ramPerThread);
    ns.tprint('ramAvailable: ', ramAvailable);
    ns.tprint('ramPerThread: ', ramPerThread);
    ns.tprint('threads: ', threads);

    ns.tprint(threads + ' threads can be runned on ' + servers[index] + '.');

    if (threads > 0) {
      ns.tprint(
        'Starting ' +
          script +
          ' on ' +
          targetServer +
          ' with ' +
          servers[index] +
          '.'
      );
      ns.exec(script, servers[index], threads, targetServer);
    } else {
      ns.tprint('NOT ENOUGH MEMORY ON ' + servers[index] + '.');
    }
  }

  ns.tprint('Total RAM available = ' + totalRAMavailable);
}

export async function getProgramsAndInstall(installCheck: any, ns: NS) {
  if (!installCheck) {
    let count = 1; //BruteSSH.exe is always installed due to the augmentation
    if (ns.fileExists('FTPCrack.exe', 'home')) count++;
    if (ns.fileExists('relaySMTP.exe', 'home')) count++;
    if (ns.fileExists('HTTPWorm.exe', 'home')) count++;
    if (ns.fileExists('SQLInject.exe', 'home')) count++;

    return count;
  }
  if (ns.fileExists('BruteSSH.exe', 'home')) ns.brutessh(installCheck);
  if (ns.fileExists('FTPCrack.exe', 'home')) ns.ftpcrack(installCheck);
  if (ns.fileExists('relaySMTP.exe', 'home')) ns.relaysmtp(installCheck);
  if (ns.fileExists('HTTPWorm.exe', 'home')) ns.httpworm(installCheck);
  if (ns.fileExists('SQLInject.exe', 'home')) ns.sqlinject(installCheck);
}

export async function getTargetServer(myInfo: any, ns: NS) {
  let target = 'foodnstuff';
  if (myInfo.level == 1) {
    return 'foodnstuff';
  } else if (
    (myInfo.level > 40 && myInfo.level < 100) ||
    myInfo.portsUnlocked == 1
  ) {
    target = 'harakiri-sushi';
  } else if (
    myInfo.portsUnlocked == 2 ||
    (myInfo.portsUnlocked > 2 && myInfo.level < 500)
  ) {
    if (myInfo.level < 292) target = 'phantasy';
    else target = 'phantasy';
  } else if (
    myInfo.portsUnlocked == 3 ||
    (myInfo.portsUnlocked > 3 && myInfo.level < 800)
  ) {
    target = 'phantasy';
  } else if (
    myInfo.portsUnlocked == 4 ||
    (myInfo.portsUnlocked > 4 && myInfo.level < 900)
  ) {
    target = 'phantasy';
  } else if (myInfo.portsUnlocked == 5) {
    target = 'phantasy';
  }
  ns.tprint('Target Server : ' + target);
  return target;
}
