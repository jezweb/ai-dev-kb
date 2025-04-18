# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day61.md
Language: HCL

## Snippet: Deploying NGINX on Kubernetes using Terraform
Description: Terraform configuration to create a Kubernetes namespace, deployment with 2 NGINX replicas, and a NodePort service. The configuration uses the Kubernetes provider and references the local kubeconfig file for cluster access.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day61.md#2025-04-17_snippet_0
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