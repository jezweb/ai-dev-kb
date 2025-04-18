# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day35.md
Language: bash

## Snippet: Añadiendo Archivos al Staging Area en Git
Description: Comando para añadir todos los archivos del directorio actual al staging area de Git.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day35.md#2025-04-17_snippet_1
Language: bash

```bash
git add .
```

## Snippet: Realizando un Commit en Git
Description: Comando para realizar un commit en Git con un mensaje descriptivo.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day35.md#2025-04-17_snippet_2
Language: bash

```bash
git commit -m "Mi primer commit"
```

## Snippet: Inicializando un Repositorio Git
Description: Comando para inicializar un nuevo repositorio Git en el directorio actual.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day35.md#2025-04-17_snippet_0
Language: bash

```bash
git init
```

## Snippet: Comparando Diferencias entre Commits en Git
Description: Comando para ver las diferencias entre dos commits específicos en Git.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day35.md#2025-04-17_snippet_6
Language: bash

```bash
git diff b8f8 709a
```

## Snippet: Cambiando entre Commits en Git
Description: Comando para cambiar a un commit específico en Git, permitiendo 'viajar en el tiempo' en el historial del proyecto.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day35.md#2025-04-17_snippet_7
Language: bash

```bash
git checkout 709a
```

## Snippet: Añadiendo un Archivo Específico en Git
Description: Comando para añadir un archivo específico al staging area en Git.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day35.md#2025-04-17_snippet_5
Language: bash

```bash
git add samplecode.ps1
```

## Snippet: Verificando el Estado del Repositorio Git
Description: Comando para verificar el estado actual del repositorio Git, mostrando archivos modificados y no rastreados.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day35.md#2025-04-17_snippet_4
Language: bash

```bash
git status
```

## Snippet: Visualizando el Historial de Commits en Git
Description: Comando para ver el historial de commits en un repositorio Git.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day35.md#2025-04-17_snippet_3
Language: bash

```bash
git log
```

## Snippet: Volviendo al Commit Más Reciente en Git
Description: Comando para volver al commit más reciente después de haber cambiado a un commit anterior en Git.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/es/Days/day35.md#2025-04-17_snippet_8
Language: bash

```bash
git switch -
```