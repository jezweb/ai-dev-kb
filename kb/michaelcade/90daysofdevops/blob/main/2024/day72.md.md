# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day72.md
Language: bash

## Snippet: Configuring and Running Pulumi Infrastructure
Description: A series of commands to set up, configure, and run a Pulumi program for AWS infrastructure deployment. The commands cover cloning the repository, initializing a stack, configuring AWS settings, and managing infrastructure resources.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day72.md#2025-04-17_snippet_0
Language: bash

```bash
git clone https://github.com/scottslowe/2024-90dod-iac-pulumi
cd 2024-90dod-iac-pulumi
pulumi stack init <name>
npm install
pulumi config set aws:region <region>
pulumi config set keypair <keypair-name>
pulumi config set vpcNetworkCidr <cidr>
pulumi config set <instance-type>
pulumi up
pulumi stack output
pulumi destroy
```