/* eslint-disable no-constant-condition */
import { NS } from '@ns';

export async function main(ns: NS): Promise<void> {
  const target = `${ns.args[0]}`;

  let serverMoneyAvailable = ns.getServerMoneyAvailable(target);
  let serverMaxMoney = ns.getServerMaxMoney(target);

  while (serverMoneyAvailable < serverMaxMoney * 0.75) {
    serverMoneyAvailable = ns.getServerMoneyAvailable(target);
    serverMaxMoney = ns.getServerMaxMoney(target);

    ns.print('-------------------------------------------------------');
    ns.print(
      'Server money available on ' +
        target +
        ' is ' +
        ns.nFormat(serverMoneyAvailable, '$0.000a' + '.')
    );
    ns.print(
      'Server max money on ' +
        target +
        ' is ' +
        ns.nFormat(serverMaxMoney, '$0.000a' + '.')
    );
    ns.print(
      'Starting grow on ' +
        target +
        ' with ' +
        ns.getHostname() +
        ' to ' +
        ns.nFormat(serverMaxMoney * 0.75, '$0.000a') +
        '...'
    );

    await ns.grow(target);
  }

  serverMoneyAvailable = ns.getServerMoneyAvailable(target);
  serverMaxMoney = ns.getServerMaxMoney(target);

  ns.print('-------------------------------------------------------');
  ns.print('Optimal current money on ' + target + ' reached !!!');
  ns.print(
    'Server money available on ' +
      target +
      ' is ' +
      ns.nFormat(serverMoneyAvailable, '$0.000a' + '.')
  );
  ns.print(
    'Server max money on' +
      target +
      ' is ' +
      ns.nFormat(serverMaxMoney, '$0.000a' + '.')
  );
}
