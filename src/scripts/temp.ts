/* eslint-disable no-constant-condition */
import { NS } from '@ns';

export async function main(ns: NS): Promise<void> {
  const prefix = 'pserv-8gb-';

  for (let i = 0; i < 20; i++) {
    ns.renamePurchasedServer(`${prefix}${i}`, `SERVER-${i + 1}`);
  }
  ns.renamePurchasedServer(`${prefix}20`, 'Darkstar');
  ns.renamePurchasedServer(`${prefix}21`, 'Starlight');
  ns.renamePurchasedServer(`${prefix}22`, 'Starbright');
  ns.renamePurchasedServer(`${prefix}23`, 'Battlestar');
  ns.renamePurchasedServer(`${prefix}10-0`, 'Blackhole');
}
