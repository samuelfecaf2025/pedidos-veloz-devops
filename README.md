# Pedidos Veloz - Plataforma de Microsserviços

**Entrega de Trabalho - DevOps (UniFECAF)**  
**Aluno:** Samuel Estevão Sales Cerqueira  
**Repositório:** https://github.com/samuelfecaf2025/pedidos-veloz-devops

## 🎯 Visão Geral
Plataforma de pedidos em microsserviços com:
- Ambiente local reproduzível (Docker Compose)
- Conteinerização segura com multi-stage builds
- Orquestração em Kubernetes (produção mínima)
- CI/CD completo com GitHub Actions
- Blue-Green Deployment + HPA + VPA
- Observabilidade (métricas, logs e tracing distribuído)
- IaC com Terraform

## 🚀 Como rodar localmente
```bash
git clone https://github.com/samuelfecaf2025/pedidos-veloz-devops.git
cd pedidos-veloz-devops
docker compose up -d
