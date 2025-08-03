/* eslint-disable no-constant-condition */
import { NS } from '@ns';

export async function main(ns: NS): Promise<void> {
  const target = `${ns.args[0]}`;
  let securityLevelMin;
  let currentSecurityLevel;
  let serverMaxMoney;
  let serverMoneyAvailable;

  while (true) {
    securityLevelMin = ns.getServerMinSecurityLevel(target); // Get the Min Security Level
    currentSecurityLevel = ns.getServerSecurityLevel(target); // Get max money for server

    ns.clearLog();
    ns.print('---------------------------------------------------------------');
    ns.print(
      'Starting attack on ' + target + ' with ' + ns.getHostname() + '...'
    );

    while (currentSecurityLevel > securityLevelMin + 5) {
      ns.print(
        '---------------------------------------------------------------'
      );
      ns.print(target + ' min security level is ' + securityLevelMin);
      ns.print(
        'Current security level on ' +
          target +
          ' is ' +
          ns.nFormat(currentSecurityLevel, '0.00') +
          '.'
      );
      ns.print('Weakening ' + target + ' with ' + ns.getHostname() + '...');

      await ns.weaken(target);
      currentSecurityLevel = ns.getServerSecurityLevel(target);
    }

    ns.print('---------------------------------------------------------------');
    serverMoneyAvailable = ns.getServerMoneyAvailable(target);
    serverMaxMoney = ns.getServerMaxMoney(target);

    ns.print('Minimum security level on ' + target + ' reached !!!');

    while (serverMoneyAvailable < serverMaxMoney * 0.75) {
      ns.print(
        '---------------------------------------------------------------'
      );
      ns.print(
        target +
          ' Current Money: ' +
          ns.nFormat(serverMoneyAvailable, '$0.000a')
      );
      ns.print(target + ' Max Money: ' + ns.nFormat(serverMaxMoney, '$0.000a'));
      ns.print(
        'Growing ' +
          target +
          ' with ' +
          ns.getHostname() +
          ' to ' +
          ns.nFormat(serverMaxMoney * 0.75, '$0.000a') +
          '...'
      );

      await ns.grow(target);
      serverMoneyAvailable = ns.getServerMoneyAvailable(target);
      serverMaxMoney = ns.getServerMaxMoney(target);
    }

    ns.print('---------------------------------------------------------------');
    ns.print('Optimal current money on ' + target + ' reached !!!');
    ns.print(
      target + ' Current Money: ' + ns.nFormat(serverMoneyAvailable, '$0.000a')
    );
    ns.print(target + ' Max Money: ' + ns.nFormat(serverMaxMoney, '$0.000a'));
    ns.print('---------------------------------------------------------------');
    ns.print('Hacking ' + target + ' with ' + ns.getHostname() + '...');

    await ns.hack(target);
    serverMoneyAvailable = ns.getServerMoneyAvailable(target);
    serverMaxMoney = ns.getServerMaxMoney(target);
  }
}
