# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day21.md
Language: multiple

## Snippet: Enforcing Failure on Critical Vulnerabilities with Grype
Description: Using Grype's --fail-on flag to make the scan fail when critical vulnerabilities are found. This example demonstrates scanning the springio/petclinic image and failing the scan due to critical vulnerabilities, which would fail a CI/CD pipeline.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day21.md#2025-04-17_snippet_2
Language: shell

```shell
$ grype springio/petclinic:latest --fail-on critical
 ✔ Vulnerability DB        [no update available]
 ✔ Loaded image
 ✔ Parsed image
 ✔ Cataloged packages      [212 packages]
 ✔ Scanned image           [168 vulnerabilities]

NAME        INSTALLED FIXED-IN TYPE         VULNERABILITY    SEVERITY
spring-core 5.3.6              java-archive CVE-2016-1000027 Critical
spring-core 5.3.6              java-archive CVE-2022-22965   Critical
...
1 error occurred:
    * discovered vulnerabilities at or above the severity threshold

$ echo $?
1
```

## Snippet: Configuring Vulnerability Exceptions in Grype YAML
Description: Creating a grype.yaml configuration file to ignore specific vulnerabilities that cannot be fixed immediately or don't pose a risk to the application. This allows the pipeline to succeed despite certain known vulnerabilities.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day21.md#2025-04-17_snippet_3
Language: yaml

```yaml
ignore:
  # This is the full set of supported rule fields:
  - vulnerability: CVE-2016-1000027
    fix-state: unknown
    package:
      name: spring-core
      version: 5.3.6
      type: java-archive
  # We can list as many of these as we want
  - vulnerability: CVE-2022-22965
  # Or list whole packages which we want to ignore
  - package:
      type: gem
```

## Snippet: Scanning Ubuntu Image with Grype and Viewing Results
Description: Complete example of scanning the Ubuntu 20.04 image with Grype and the resulting vulnerability output. Shows the command execution and its output displaying discovered vulnerabilities with their severity levels.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day21.md#2025-04-17_snippet_1
Language: shell

```shell
$ grype ubuntu:20.04

 ✔ Vulnerability DB        [no update available]
 ✔ Pulled image
 ✔ Loaded image
 ✔ Parsed image
 ✔ Cataloged packages      [92 packages]
 ✔ Scanned image           [19 vulnerabilities]

NAME          INSTALLED                 FIXED-IN  TYPE  VULNERABILITY   SEVERITY
coreutils     8.30-3ubuntu2                       deb   CVE-2016-2781   Low
gpgv          2.2.19-3ubuntu2.2                   deb   CVE-2022-3219   Low
libc-bin      2.31-0ubuntu9.9                     deb   CVE-2016-20013  Negligible
libc6         2.31-0ubuntu9.9                     deb   CVE-2016-20013  Negligible
libncurses6   6.2-0ubuntu2                        deb   CVE-2021-39537  Negligible
libncurses6   6.2-0ubuntu2                        deb   CVE-2022-29458  Negligible
libncursesw6  6.2-0ubuntu2                        deb   CVE-2021-39537  Negligible
libncursesw6  6.2-0ubuntu2                        deb   CVE-2022-29458  Negligible
libpcre3      2:8.39-12ubuntu0.1                  deb   CVE-2017-11164  Negligible
libsystemd0   245.4-4ubuntu3.19                   deb   CVE-2022-3821   Medium
libtinfo6     6.2-0ubuntu2                        deb   CVE-2021-39537  Negligible
libtinfo6     6.2-0ubuntu2                        deb   CVE-2022-29458  Negligible
libudev1      245.4-4ubuntu3.19                   deb   CVE-2022-3821   Medium
login         1:4.8.1-1ubuntu5.20.04.4            deb   CVE-2013-4235   Low
ncurses-base  6.2-0ubuntu2                        deb   CVE-2021-39537  Negligible
ncurses-base  6.2-0ubuntu2                        deb   CVE-2022-29458  Negligible
ncurses-bin   6.2-0ubuntu2                        deb   CVE-2021-39537  Negligible
ncurses-bin   6.2-0ubuntu2                        deb   CVE-2022-29458  Negligible
passwd        1:4.8.1-1ubuntu5.20.04.4            deb   CVE-2013-4235   Low
```

## Snippet: Basic Container Image Scanning with Grype
Description: Simple command to scan a container image for vulnerabilities using Grype. This example shows the basic syntax and demonstrates scanning the Ubuntu 20.04 image.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day21.md#2025-04-17_snippet_0
Language: shell

```shell
grype <IMAGE>
```