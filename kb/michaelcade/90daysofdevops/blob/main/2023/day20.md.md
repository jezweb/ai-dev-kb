# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day20.md
Language: multiple

## Snippet: Running WebGoat Vulnerable Application with Docker Compose
Description: Commands to start the vulnerable WebGoat application container using either the provided run script or Docker Compose directly. After execution, the application will be accessible at http://localhost:8080/WebGoat.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day20.md#2025-04-17_snippet_0
Language: sh

```sh
docker compose up
```

## Snippet: Executing DAST Scan with ZAP-CLI Against WebGoat Application
Description: Example command using zap-cli to perform a quick security scan against the WebGoat application. This command runs both a standard and AJAX spider scan against the login page to discover vulnerabilities.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day20.md#2025-04-17_snippet_1
Language: sh

```sh
zap-cli quick-scan -s all --ajax-spider -r http://127.0.0.1:8080/WebGoat/login.mvc
```

## Snippet: Container Image Vulnerability Scanning with Grype
Description: Example output from scanning the WebGoat Docker container with Grype. The scan identifies numerous vulnerabilities in the container, including critical issues like Remote Code Execution, SQL Injection, and XML External Entity vulnerabilities.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day20.md#2025-04-17_snippet_2
Language: bash

```bash
$ grype contrast-java-webgoat-docker-webgoat
 ✔ Vulnerability DB        [no update available]
 ✔ Loaded image
 ✔ Parsed image
 ✔ Cataloged packages      [316 packages]
 ✔ Scanned image           [374 vulnerabilities]
NAME                 INSTALLED               FIXED-IN                TYPE          VULNERABILITY        SEVERITY
apt                  1.8.2.3                                         deb           CVE-2011-3374        Negligible
axis                 1.4                                             java-archive  GHSA-55w9-c3g2-4rrh  Medium
axis                 1.4                                             java-archive  GHSA-96jq-75wh-2658  Medium
bash                 5.0-4                                           deb           CVE-2019-18276       Negligible
bash                 5.0-4                   (won't fix)             deb           CVE-2022-3715        High
bsdutils             1:2.33.1-0.1                                    deb           CVE-2022-0563        Negligible
bsdutils             1:2.33.1-0.1            (won't fix)             deb           CVE-2021-37600       Low
commons-beanutils    1.8.3                                           java-archive  CVE-2014-0114        High
commons-beanutils    1.8.3                                           java-archive  CVE-2019-10086       High
commons-beanutils    1.8.3                   1.9.2                   java-archive  GHSA-p66x-2cv9-qq3v  High
commons-beanutils    1.8.3                   1.9.4                   java-archive  GHSA-6phf-73q6-gh87  High
commons-collections  3.2.1                                           java-archive  CVE-2015-6420        High
commons-collections  3.2.1                   3.2.2                   java-archive  GHSA-6hgm-866r-3cjv  High
commons-collections  3.2.1                   3.2.2                   java-archive  GHSA-fjq5-5j5f-mvxh  Critical
commons-fileupload   1.3.1                                           java-archive  CVE-2016-1000031     Critical
commons-fileupload   1.3.1                                           java-archive  CVE-2016-3092        High
commons-fileupload   1.3.1                   1.3.2                   java-archive  GHSA-fvm3-cfvj-gxqq  High
commons-fileupload   1.3.1                   1.3.3                   java-archive  GHSA-7x9j-7223-rg5m  Critical
commons-io           2.4                                             java-archive  CVE-2021-29425       Medium
commons-io           2.4                     2.7                     java-archive  GHSA-gwrp-pvrq-jmwv  Medium
coreutils            8.30-3                                          deb           CVE-2017-18018       Negligible
coreutils            8.30-3                  (won't fix)             deb           CVE-2016-2781        Low
curl                 7.64.0-4+deb10u3                                deb           CVE-2021-22922       Negligible
curl                 7.64.0-4+deb10u3                                deb           CVE-2021-22923       Negligible
<truncated>
```