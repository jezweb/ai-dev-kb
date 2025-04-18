# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day35.md
Language: multiple

## Snippet: Deploying AKS Cluster with Bicep
Description: Commands to build the Bicep file into an ARM template JSON file and then deploy it to create an AKS cluster in the specified resource group. The deployment is named 'myAKSDeployment'.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day35.md#2025-04-17_snippet_3
Language: bash

```bash
az bicep build myAKS.bicep --output-file aksDeployment.json
az deployment group create --name myAKSDeployment --resource-group myResourceGroup --template-file aksDeployment.json
```

## Snippet: Defining an AKS Cluster with Bicep
Description: Bicep template that defines an Azure Kubernetes Service cluster with configurable parameters including cluster name, location, agent count, and VM specifications. The template sets up a managed cluster with Linux nodes and managed identity.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day35.md#2025-04-17_snippet_1
Language: bicep

```bicep
param clusterName string = 'myAKSCluster'
param location string = 'eastus'
param dnsPrefix string = 'mydns'
param osDiskSizeInGB int = 30
param agentCount int = 1
param image string = 'CanonicalUbuntuServer'

@landingSlot
resource aks myAKSCluster = Microsoft.ContainerInstances/managedClusters@2020-06-01 {
   name: clusterName
   location: location
   properties: {
      dnsPrefix: dnsPrefix
      kubernetesVersion: '1.27.7'
      osType: 'Linux'
      servicePrincipalProfile: {
         clientId: '<Your Service Principal Client ID>'
         secret: '<Your Service Principal Secret>'
      }
      enableManagedIdentity: true
   }
   sku: {
      tier: Premium
      name: Standard_D4_v3
   }
   agentPoolProfiles: [
      {
         name: 'agentpool'
         count: agentCount
         osType: 'Linux'
         osDiskSizeInGB: osDiskSizeInGB
         vmSize: 'Standard_DS2_v3'
         type: 'VirtualMachineScaleSets'
         mode: System
      }
   ]
}
```

## Snippet: Creating an Azure Resource Group
Description: Command to create a new resource group in Azure using the Azure CLI. The resource group is named 'myResourceGroup' and located in the 'eastus' region.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day35.md#2025-04-17_snippet_0
Language: bash

```bash
az group create --name myResourceGroup --location eastus
```

## Snippet: Authenticating with Azure CLI
Description: Command to log in to an Azure account using the Azure CLI. This is a prerequisite for deploying resources to Azure.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2024/day35.md#2025-04-17_snippet_2
Language: bash

```bash
az login
```