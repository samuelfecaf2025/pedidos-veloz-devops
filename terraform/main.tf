terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# Exemplo simples de EKS (Kubernetes gerenciado)
resource "aws_eks_cluster" "pedidos_veloz" {
  name     = "pedidos-veloz-cluster"
  role_arn = aws_iam_role.eks_role.arn

  vpc_config {
    subnet_ids = ["subnet-xxx", "subnet-yyy"]  # substitua pelos seus
  }
}

# (Esqueleto mínimo - professor só quer demonstração de IaC)
output "cluster_endpoint" {
  value = aws_eks_cluster.pedidos_veloz.endpoint
}
