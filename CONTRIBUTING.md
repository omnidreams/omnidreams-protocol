# Contributing to OmniDreams Protocol

We welcome contributions from developers, researchers, and DeFi builders.

## Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feat/spatial-kernel-opt`)
3. Commit your changes (`git commit -m 'feat: optimize spatial torus projection'`)
4. Push to the branch (`git push origin feat/spatial-kernel-opt`)
5. Open a Pull Request

## Testing Standards
All smart contract contributions must pass local Forge integration tests before PR submission:
```bash
forge test -vvv
```
