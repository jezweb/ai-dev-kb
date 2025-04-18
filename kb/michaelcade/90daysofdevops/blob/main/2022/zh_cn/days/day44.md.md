# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day44.md
Language: bash

## Snippet: Running Docker Getting Started Container
Description: This command runs the Docker getting started container in detached mode, mapping port 80 of the container to port 80 on the host.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day44.md#2025-04-17_snippet_0
Language: bash

```bash
docker run -d -p 80:80 docker/getting-started
```

## Snippet: Running Interactive Ubuntu Docker Container
Description: This command runs an Ubuntu Docker container in interactive mode with a bash shell, allowing you to explore and interact with a minimal Ubuntu environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day44.md#2025-04-17_snippet_2
Language: bash

```bash
docker run -it ubuntu bash
```

## Snippet: Running Hello World Docker Container
Description: This command runs the hello-world Docker container, which prints a welcome message and some basic Docker information.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/zh_cn/Days/day44.md#2025-04-17_snippet_1
Language: bash

```bash
docker run hello-world
```