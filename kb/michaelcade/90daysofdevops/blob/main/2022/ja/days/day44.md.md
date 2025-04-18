# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day44.md
Language: bash

## Snippet: Running Docker Getting Started Container
Description: This command runs the Docker getting started container in detached mode, mapping port 80 on the host to port 80 in the container.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day44.md#2025-04-17_snippet_0
Language: bash

```bash
docker run -d -p 80:80 docker/getting-started
```

## Snippet: Running Interactive Ubuntu Docker Container
Description: This command runs an Ubuntu Docker container in interactive mode with a bash shell.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day44.md#2025-04-17_snippet_2
Language: bash

```bash
docker run -it ubuntu bash
```

## Snippet: Running Hello World Docker Container
Description: This command runs the Hello World Docker container, which prints a message and exits.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day44.md#2025-04-17_snippet_1
Language: bash

```bash
docker run hello-world
```