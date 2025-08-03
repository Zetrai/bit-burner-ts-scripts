/* eslint-disable no-constant-condition */
import { NS } from '@ns';

export async function main(ns: NS): Promise<void> {
  //ns.tprint("Killing scripts...");
  //ns.exec('/scripts/killallscripts.js', 'home', 1);
  //ns.tprint("");

  ns.tprint('------------------------------------');
  ns.tprint('Deploying Scripts...');
  ns.tprint('------------------------------------');
  ns.exec('/scripts/deployscripts.js', 'home', 1);

  // Wait for deployment to finish
  await ns.sleep(1000);

  ns.tprint('------------------------------------');
  ns.tprint('Starting Hacking with Slaved Servers...');
  ns.exec('/scripts/autohack.js', 'home', 1);

  // Wait for slaved servers to start
  await ns.sleep(1000);

  ns.tprint('------------------------------------');
  ns.tprint('Starting Hacking with Helper Servers...');
  ns.tprint('------------------------------------');
  ns.exec('/scripts/autohackhelp.js', 'home', 1);

  // Wait for helper servers to start
  await ns.sleep(1000);

  ns.tprint('------------------------------------');
  ns.tprint('Starting Server Farm...');
  ns.tprint('------------------------------------');
  ns.exec('/scripts/startserverfarm.js', 'home', 1);

  // Wait for server farm to start
  await ns.sleep(1000);

  ns.tprint('------------------------------------');
  ns.tprint('Starting Hacking with Home Computer...');
  ns.tprint('------------------------------------');
  ns.run('/scripts/homeattack.js', 1, 'global-pharm', 776721);
  ns.run('/scripts/homeattack.js', 1, 'unitalife', 776721);
  ns.run('/scripts/homeattack.js', 1, 'zb-def', 776721);
  ns.run('/scripts/homeattack.js', 1, 'vitalife', 776721);
  ns.run('/scripts/homeattack.js', 1, 'snap-fitness', 776721);

  // Wait for home computer to finish starting hacking scripts
  await ns.sleep(1000);

  ns.tprint('------------------------------------');
  ns.tprint('Starting Stock Market on Home Computer...');
  ns.run('/stocks/stocktrader4.js', 1);

  // Wait for home computer to finish starting stock market scripts
  await ns.sleep(1000);
  ns.tprint('Stock Market Started on Home Computer...');
  ns.tprint('------------------------------------');

  ns.tprint('------------------------------------');
  ns.tprint('Solving All Contracts Available...');
  ns.run('/contracts/solveallcontracts.js', 1);

  // Wait for everything to complete
  await ns.sleep(1000);
  ns.tprint('Startup Completed.');
}
