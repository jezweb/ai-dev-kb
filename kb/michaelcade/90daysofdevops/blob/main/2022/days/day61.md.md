# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day61.md
Language: multiple

## Snippet: Deploying Nginx to Kubernetes using Terraform
Description: This Terraform configuration creates a Kubernetes namespace, deployment, and service for Nginx. It uses the Kubernetes provider to interact with a local Kubernetes cluster (e.g., minikube) using the kubeconfig file.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day61.md#2025-04-17_snippet_0
Language: HCL

```HCL
terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.0.0"
    }
  }
}
provider "kubernetes" {
  config_path = "~/.kube/config"
}
resource "kubernetes_namespace" "test" {
  metadata {
    name = "nginx"
  }
}
resource "kubernetes_deployment" "test" {
  metadata {
    name      = "nginx"
    namespace = kubernetes_namespace.test.metadata.0.name
  }
  spec {
    replicas = 2
    selector {
      match_labels = {
        app = "MyTestApp"
      }
    }
    template {
      metadata {
        labels = {
          app = "MyTestApp"
        }
      }
      spec {
        container {
          image = "nginx"
          name  = "nginx-container"
          port {
            container_port = 80
          }
        }
      }
    }
  }
}
resource "kubernetes_service" "test" {
  metadata {
    name      = "nginx"
    namespace = kubernetes_namespace.test.metadata.0.name
  }
  spec {
    selector = {
      app = kubernetes_deployment.test.spec.0.template.0.metadata.0.labels.app
    }
    type = "NodePort"
    port {
      node_port   = 30201
      port        = 80
      target_port = 80
    }
  }
}
```

## Snippet: Port Forwarding for Nginx Service in Minikube
Description: This Bash command sets up port forwarding for the Nginx service deployed in the Kubernetes cluster, allowing access to the service through localhost.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day61.md#2025-04-17_snippet_1
Language: Bash

```Bash
kubectl port-forward -n nginx svc/nginx 30201:80
```