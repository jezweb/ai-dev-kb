# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day58.md
Language: multiple

## Snippet: Complete OpenShift Install Config YAML with Custom Resource Settings
Description: A comprehensive install-config.yaml file for OpenShift on vSphere with customized compute and control plane resource configurations, network settings, and authentication details.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day58.md#2025-04-17_snippet_6
Language: yaml

```yaml
apiVersion: v1
baseDomain: veducate.local
compute: 
- hyperthreading: Enabled 
  name: worker
  replicas: 1
  platform:
    vsphere: 
      cpus: 8
      coresPerSocket: 4
      memoryMB: 16384
      osDisk:
        diskSizeGB: 120
controlPlane: 
  hyperthreading: Enabled 
  name: master
  replicas: 3
  platform:
    vsphere: 
      cpus: 8
      coresPerSocket: 4
      memoryMB: 16384
      osDisk:
        diskSizeGB: 120
metadata:
  creationTimestamp: null
  name: ocp48
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  machineNetwork:
  - cidr: 10.0.0.0/16
  networkType: OpenShiftSDN
  serviceNetwork:
  - 172.30.0.0/16
platform:
  vsphere:
    apiVIP: 192.168.200.192
    cluster: Cluster-1
    folder: /vEducate-DC/vm/OpenShift/
    datacenter: vEducate-DC
    defaultDatastore: Datastore01
    ingressVIP: 192.168.200.193
    network: "network_NW1"
    password: Password@!
    username: admin@veducate.local
    vCenter: vcenter.veducate.local
publish: External
pullSecret: '{"auths":{"cloud.openshift.com":{"auth":"bxxxxxx==","email":"openshift@veducate.co.uk"},"registry.redhat.io":{"auth":"Nxxx=","email":"openshift@veducate.co.uk"}}}'
sshKey: |
  ssh-rsa AAAABxxxxxx openshift@veducate
```

## Snippet: Executing OpenShift-Install Create Cluster Command
Description: The command to initiate the OpenShift cluster creation wizard that generates the install-config.yaml file and automatically creates the cluster using the bundled Terraform.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day58.md#2025-04-17_snippet_2
Language: bash

```bash
openshift-install create cluster
```

## Snippet: Basic OpenShift Install Config YAML
Description: A sample install-config.yaml file showing network configuration for OpenShift on vSphere, including the required API and Ingress VIP addresses that need to be modified to match your network environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day58.md#2025-04-17_snippet_5
Language: yaml

```yaml
machineNetwork:
  - cidr: 10.0.0.0/16

platform:
  vsphere:
    apiVIP: 192.168.200.192 <<<<<<< This is your api.{cluster_name}.{base_domain} DNS record
    cluster: Cluster-1
    folder: /vEducate-DC/vm/OpenShift/
    datacenter: vEducate-DC
    defaultDatastore: Datastore01
    ingressVIP: 192.168.200.193 <<<<<<< This is your *.apps.{cluster_name}.{base_domain} DNS record
```

## Snippet: Creating Install Config with OpenShift-Install
Description: Command to run the wizard that creates only the install-config.yaml file which can be modified before cluster creation. This is useful for customizing deployment parameters.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day58.md#2025-04-17_snippet_3
Language: bash

```bash
openshift-install create install-config
```

## Snippet: Generating OpenShift Manifests
Description: Command to create the manifests folder which contains YAML files controlling cluster provisioning. Typically used with UPI installations or when integrating with additional components like load balancers.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day58.md#2025-04-17_snippet_4
Language: bash

```bash
openshift-install create manifests
```

## Snippet: Downloading and Importing vCenter Certificates on Linux
Description: Commands to download vCenter trusted root certificates, unzip them, and import them to the trusted store on a Ubuntu system.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day58.md#2025-04-17_snippet_1
Language: bash

```bash
curl -O https://{vCenter_FQDN}/certs/download.zip
unzip download.zip
cp certs/win/* /usr/local/share/ca-certificates
update-ca-certificates
```

## Snippet: Extracting and Installing OpenShift Tools on Linux
Description: Commands to extract OpenShift installation files and copy them to the local bin directory. This includes the OpenShift-Install tool, OC command line tool, and kubectl.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day58.md#2025-04-17_snippet_0
Language: bash

```bash
tar -zxvf openshift-client-linux.tar.gz
tar -zxvf openshift-install-linux.tar.gz

sudo cp openshift-install /usr/bin/local/openshift-install
sudo cp oc /usr/bin/local/oc
sudo cp kubectl /usr/bin/local/kubectl
```

## Snippet: Accessing OpenShift Cluster with Kubeconfig
Description: Export command provided after successful installation to configure the 'oc' CLI with the necessary authentication details for accessing the OpenShift cluster as system:admin user.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day58.md#2025-04-17_snippet_7
Language: bash

```bash
export KUBECONFIG=/home/dean/90days-ocp412/auth/kubeconfig
```