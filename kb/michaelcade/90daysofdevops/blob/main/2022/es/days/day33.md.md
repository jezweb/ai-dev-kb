# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day33.md
Language: powershell

## Snippet: Conectando a una suscripción de Azure con PowerShell
Description: Este comando de PowerShell se utiliza para conectarse a una suscripción de Azure. Es el primer paso para comenzar a administrar recursos de Azure mediante PowerShell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day33.md#2025-04-17_snippet_0
Language: powershell

```powershell
Connect-AzAccount
```

## Snippet: Buscando comandos de PowerShell relacionados con VMs de Azure
Description: Este comando de PowerShell busca y muestra todos los comandos disponibles relacionados con las máquinas virtuales de Azure. Es útil para explorar las capacidades de administración de VMs a través de PowerShell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day33.md#2025-04-17_snippet_1
Language: powershell

```powershell
Get-Command *AzVM*
```