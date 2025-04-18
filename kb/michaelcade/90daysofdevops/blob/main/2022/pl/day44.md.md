# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day44.md
Language: bash

## Snippet: Running Getting Started Docker Container
Description: Command to run the Docker getting-started container in detached mode on port 80
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day44.md#2025-04-17_snippet_0
Language: bash

```bash
docker run -d -p 80:80 docker/getting-started
```

## Snippet: Running Hello World Container
Description: Command to run the basic hello-world Docker container example
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day44.md#2025-04-17_snippet_1
Language: bash

```bash
docker run hello-world
```

## Snippet: Running Interactive Ubuntu Container
Description: Command to run an Ubuntu container with interactive terminal and bash shell access
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/pl/day44.md#2025-04-17_snippet_2
Language: bash

```bash
docker run -it ubuntu bash
```