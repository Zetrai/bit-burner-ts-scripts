/* eslint-disable no-constant-condition */
import { NS } from '@ns';

export async function main(ns: NS): Promise<void> {
  const server = `${ns.args[0]}`;
  const target = `${ns.args[1]}`;
  const ramAvailable = ns.getServerMaxRam(server) - ns.getServerUsedRam(server);
  const ramPerThread = ns.getScriptRam('/scripts/grow.js');
  const threads = Math.floor(ramAvailable / ramPerThread);

  ns.tprint('Super growing on ' + target + ' with ' + threads + ' threads.');

  ns.exec('/scripts/grow.js', server, threads, target);
}
