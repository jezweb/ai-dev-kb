# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day44.md
Language: bash

## Snippet: Running the Docker Getting Started Container
Description: Command to download and run the Docker getting-started container in detached mode with port 80 mapped from the container to the host.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day44.md#2025-04-17_snippet_0
Language: bash

```bash
docker run -d -p 80:80 docker/getting-started
```

## Snippet: Running an Interactive Ubuntu Container with Bash Shell
Description: Command to run an Ubuntu container in interactive mode with a bash shell prompt, allowing direct interaction with the container environment.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day44.md#2025-04-17_snippet_2
Language: bash

```bash
docker run -it ubuntu bash
```

## Snippet: Running the Hello World Docker Container
Description: Command to run the hello-world container which tests the Docker installation and displays a welcome message.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/Days/day44.md#2025-04-17_snippet_1
Language: bash

```bash
docker run hello-world
```