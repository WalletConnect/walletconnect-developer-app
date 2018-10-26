import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';

import QRCodeScannerScreen from '../screens/QRCodeScannerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WalletScreen from '../screens/WalletScreen';
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen';
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';
import CallRequestScreen from '../screens/CallRequestScreen';
import SendTransactionScreen from '../screens/SendTransactionScreen';
import ReceiveTransactionScreen from '../screens/ReceiveTransactionScreen';
import AccountScreen from '../screens/AccountScreen';
import NetworkScreen from '../screens/NetworkScreen';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('WalletConnect.QRCodeScannerScreen', () => QRCodeScannerScreen, store, Provider);

  // Settings Tab Screens
  Navigation.registerComponent('WalletConnect.SettingsScreen', () => SettingsScreen, store, Provider);
  Navigation.registerComponent('WalletConnect.AccountScreen', () => AccountScreen, store, Provider);
  Navigation.registerComponent('WalletConnect.NetworkScreen', () => NetworkScreen, store, Provider);

  // Wallet Tab Screens
  Navigation.registerComponent('WalletConnect.WalletScreen', () => WalletScreen, store, Provider);
  Navigation.registerComponent('WalletConnect.TransactionHistoryScreen', () => TransactionHistoryScreen, store, Provider);
  Navigation.registerComponent('WalletConnect.TransactionDetailsScreen', () => TransactionDetailsScreen, store, Provider);

  // Transaction / Signing Screens
  Navigation.registerComponent('WalletConnect.CallRequestScreen', () => CallRequestScreen, store, Provider);
  Navigation.registerComponent('WalletConnect.SendTransactionScreen', () => SendTransactionScreen, store, Provider);
  Navigation.registerComponent('WalletConnect.ReceiveTransactionScreen', () => ReceiveTransactionScreen, store, Provider);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({
      screen, startTime, endTime, commandType,
    }) =>
      console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({ screen }) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`),
  }).register();
}

export async function hideActiveModal() {
  Navigation.dismissModal({
    animationType: 'slide-down',
  });
}

export function showModal(screen, passProps = {}) {
  Navigation.showModal({
    screen,
    navigatorStyle: { navBarHidden: true },
    navigatorButtons: {},
    animationType: 'slide-up',
    passProps,
  });
}

export async function showCallRequestModal(passProps = {}) {
  showModal('WalletConnect.CallRequestScreen', passProps);
}