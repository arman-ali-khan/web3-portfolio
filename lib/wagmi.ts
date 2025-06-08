import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { metaMask, injected } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    metaMask(),
    injected(),
    // WalletConnect connector commented out until proper Project ID is configured
    // To enable WalletConnect:
    // 1. Go to https://cloud.walletconnect.com
    // 2. Create a new project
    // 3. Copy your Project ID
    // 4. Add it to your .env.local file as NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
    // 5. Uncomment the walletConnect connector below
    
    // walletConnect({
    //   projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
    // }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}