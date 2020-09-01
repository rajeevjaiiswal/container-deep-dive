Deploy Helm:

https://helm.sh/docs/intro/install/






Create Helm Chart:  helm create <chart Name>

====================================================
Values
=====================================================
values.yaml file:


replicaCount: 
  firstService: 1
  secondService:  2


Use value in template:

{{ .Values.replicaCount.firstService }}



Commands:

helm install myapi myAPI/ --set replicaCount.firstService=1 --set replicaCount.secondService=1

helm upgrade myapi myAPI/ --set replicaCount.firstService=1 --set replicaCount.secondService=2


====================================================
Rollback
=====================================================
 Helm rollback myapi 
