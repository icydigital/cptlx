# roadmap


While Unstoppable Domains doesn't directly host dApps, it works seamlessly with them in two key ways:

1. User Authentication:

DApps can integrate Unstoppable Domains' libraries or API to allow users to log in with their human-readable UD domain instead of complex wallet addresses.
This improves user experience and accessibility.
2. Pointing a UD Domain to your DApp:

You can't directly host your DApp code on Unstoppable Domains. However, you can point your UD domain to the web server where your DApp is hosted.
This gives your DApp a user-friendly and memorable address like yourdapp.crypto instead of a long IP address.
Here's how to achieve both:

User Authentication:

Refer to Unstoppable Domains' documentation for various SDKs and APIs: https://docs.unstoppabledomains.com/
Popular libraries include web3.js, ethers.js, and Moralis.
Pointing UD Domain to DApp:

Deploy your DApp: Choose a hosting platform like IPFS, Infura, or Alchemy depending on your needs.
Configure DNS Settings: Log in to your Unstoppable Domain dashboard and navigate to your domain's settings.
Update the CNAME record: Point the CNAME record to your DApp's web server address.
Verify Integration: Test your UD domain by attempting to access your DApp through it.
Additional Resources:

Unstoppable Domains Developer Portal: https://docs.unstoppabledomains.com/
Building a Web3 Dapp with Unstoppable Domains: https://www.youtube.com/watch?v=3_bK6kVvCrc
Sign in with Unstoppable Domains, Now on Auth0 Marketplace: https://marketplace.auth0.com/integrations/unstoppable-domains
