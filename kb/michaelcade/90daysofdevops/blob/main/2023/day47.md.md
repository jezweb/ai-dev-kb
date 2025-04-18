# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day47.md
Language: python

## Snippet: Defining AWS EC2 Infrastructure with Pulumi in Python
Description: This example shows how to use Pulumi's Python SDK to define and deploy an AWS EC2 instance as infrastructure as code. The code specifies instance type, AMI, and tags, then exports the instance's public IP address. This can be deployed using the Pulumi CLI.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day47.md#2025-04-17_snippet_1
Language: python

```python
import pulumi
from pulumi_aws import ec2

# Define an EC2 instance
server = ec2.Instance('server',
    instance_type='t2.micro',
    ami='ami-0c55b159cbfafe1',
    tags={
        'Name': 'cloud-server',
    },
)

# Export the server's IP address
pulumi.export('ip_address', server.public_ip)
```

## Snippet: Using Fabric for Remote SSH Command Execution in Python
Description: This snippet demonstrates how to use the Fabric library to connect to a remote server via SSH, execute the 'ls -l' command, and print the output to the console. Fabric streamlines SSH commands and remote execution for server configuration and deployment automation.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day47.md#2025-04-17_snippet_0
Language: python

```python
from fabric import Connection

# Connect to the remote server
c = Connection('user@remote.host')

# Run a command on the remote server
result = c.run('ls -l')

# Print the output of the command
print(result.stdout)
```