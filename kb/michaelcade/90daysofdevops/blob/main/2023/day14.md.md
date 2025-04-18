# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day14.md
Language: multiple

## Snippet: Scanning Ubuntu Container Image with Grype
Description: This snippet demonstrates how to use the Grype tool to scan the latest Ubuntu container image for vulnerabilities. It shows the command execution and the resulting output, which includes a list of vulnerabilities found in the image.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day14.md#2025-04-17_snippet_0
Language: console

```console
$ grype ubuntu:latest
 ✔ Vulnerability DB        [updated]
 ✔ Pulled image
 ✔ Loaded image
 ✔ Parsed image
 ✔ Cataloged packages      [101 packages]
 ✔ Scanned image           [16 vulnerabilities]
NAME          INSTALLED                 FIXED-IN  TYPE  VULNERABILITY   SEVERITY
bash          5.1-6ubuntu1                        deb   CVE-2022-3715   Medium
coreutils     8.32-4.1ubuntu1                     deb   CVE-2016-2781   Low
gpgv          2.2.27-3ubuntu2.1                   deb   CVE-2022-3219   Low
libc-bin      2.35-0ubuntu3.1                     deb   CVE-2016-20013  Negligible
libc6         2.35-0ubuntu3.1                     deb   CVE-2016-20013  Negligible
libncurses6   6.3-2                               deb   CVE-2022-29458  Negligible
libncursesw6  6.3-2                               deb   CVE-2022-29458  Negligible
libpcre3      2:8.39-13ubuntu0.22.04.1            deb   CVE-2017-11164  Negligible
libsystemd0   249.11-0ubuntu3.6                   deb   CVE-2022-3821   Medium
libtinfo6     6.3-2                               deb   CVE-2022-29458  Negligible
libudev1      249.11-0ubuntu3.6                   deb   CVE-2022-3821   Medium
login         1:4.8.1-2ubuntu2                    deb   CVE-2013-4235   Low
ncurses-base  6.3-2                               deb   CVE-2022-29458  Negligible
ncurses-bin   6.3-2                               deb   CVE-2022-29458  Negligible
passwd        1:4.8.1-2ubuntu2                    deb   CVE-2013-4235   Low
zlib1g        1:1.2.11.dfsg-2ubuntu9.2            deb   CVE-2022-42800  Medium
```

## Snippet: Package Vulnerability List - System Libraries
Description: Details of system library package vulnerabilities including libc, ssl, and system utilities. Shows package versions, CVE IDs and severity levels for security tracking.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day14.md#2025-04-17_snippet_2
Language: plaintext

```plaintext
libc-bin          2.27-3ubuntu1.4           2.27-3ubuntu1.5            deb           CVE-2021-35942       Low
libc-bin          2.27-3ubuntu1.4                                      deb           CVE-2009-5155        Negligible
libc-bin          2.27-3ubuntu1.4                                      deb           CVE-2015-8985        Negligible
libc6             2.27-3ubuntu1.4           2.27-3ubuntu1.5            deb           CVE-2021-3999        Medium
```

## Snippet: Scanning Older Spring PetClinic Image with Grype
Description: This snippet shows how to use Grype to scan an older version of the Spring PetClinic container image. It demonstrates that older images often contain more vulnerabilities, including some with higher severity levels.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day14.md#2025-04-17_snippet_1
Language: console

```console
$ grype springio/petclinic:latest
 ✔ Vulnerability DB        [no update available]
 ✔ Pulled image
 ✔ Loaded image
 ✔ Parsed image
 ✔ Cataloged packages      [213 packages]
 ✔ Scanned image           [167 vulnerabilities]
NAME              INSTALLED                 FIXED-IN                   TYPE          VULNERABILITY        SEVERITY
bash              4.4.18-2ubuntu1.2                                    deb           CVE-2022-3715        Medium
bash              4.4.18-2ubuntu1.2         4.4.18-2ubuntu1.3          deb           CVE-2019-18276       Low
coreutils         8.28-1ubuntu1                                        deb           CVE-2016-2781        Low
dpkg              1.19.0.5ubuntu2.3         1.19.0.5ubuntu2.4          deb           CVE-2022-1664        Medium
e2fsprogs         1.44.1-1ubuntu1.3         1.44.1-1ubuntu1.4          deb           CVE-2022-1304        Medium
gcc-8-base        8.4.0-1ubuntu1~18.04                                 deb           CVE-2020-13844       Medium
gpgv              2.2.4-1ubuntu1.4          2.2.4-1ubuntu1.6           deb           CVE-2022-34903       Medium
gpgv              2.2.4-1ubuntu1.4          2.2.4-1ubuntu1.5           deb           CVE-2019-13050       Low
gpgv              2.2.4-1ubuntu1.4                                     deb           CVE-2022-3219        Low
gzip              1.6-5ubuntu1              1.6-5ubuntu1.2             deb           CVE-2022-1271        Medium
h2                1.4.200                   2.0.202                    java-archive  GHSA-7rpj-hg47-cx62  High
h2                1.4.200                   2.0.206                    java-archive  GHSA-h376-j262-vhq6  Critical
h2                1.4.200                                              java-archive  CVE-2021-23463       Critical
h2                1.4.200                                              java-archive  CVE-2021-42392       Critical
h2                1.4.200                                              java-archive  CVE-2022-23221       Critical
h2                1.4.200                   2.1.210                    java-archive  GHSA-45hx-wfhj-473x  Critical
jackson-databind  2.11.4                    2.12.7.1                   java-archive  GHSA-jjjh-jjxp-wpff  High
jackson-databind  2.11.4                    2.12.7.1                   java-archive  GHSA-rgv9-q543-rqg4  High
jackson-databind  2.11.4                                               java-archive  CVE-2022-42004       High
jackson-databind  2.11.4                                               java-archive  CVE-2020-36518       High
jackson-databind  2.11.4                                               java-archive  CVE-2022-42003       High
jackson-databind  2.11.4                    2.12.6.1                   java-archive  GHSA-57j2-w4cx-62h2  High
jquery            2.2.4                                                java-archive  CVE-2019-11358       Medium
jquery            2.2.4                                                java-archive  CVE-2020-11022       Medium
jquery            2.2.4                                                java-archive  CVE-2015-9251        Medium
jquery            2.2.4                                                java-archive  CVE-2020-11023       Medium
jquery            2.2.4                                                java-archive  CVE-2007-2379        Medium
jquery-ui         1.11.4                                               java-archive  CVE-2021-41184       Medium
jquery-ui         1.11.4                                               java-archive  CVE-2016-7103        Medium
jquery-ui         1.11.4                                               java-archive  CVE-2021-41182       Medium
jquery-ui         1.11.4                                               java-archive  CVE-2021-41183       Medium
libc-bin          2.27-3ubuntu1.4           2.27-3ubuntu1.5            deb           CVE-2020-29562       Low
libc-bin          2.27-3ubuntu1.4                                      deb           CVE-2016-20013       Negligible
libc-bin          2.27-3ubuntu1.4           2.27-3ubuntu1.5            deb           CVE-2020-6096        Low
libc-bin          2.27-3ubuntu1.4           2.27-3ubuntu1.5            deb           CVE-2020-27618       Low
libc-bin          2.27-3ubuntu1.4           2.27-3ubuntu1.5            deb           CVE-2022-23218       Low
libc-bin          2.27-3ubuntu1.4           2.27-3ubuntu1.5            deb           CVE-2016-10228       Negligible
libc-bin          2.27-3ubuntu1.4           2.27-3ubuntu1.5            deb           CVE-2019-25013       Low
libc-bin          2.27-3ubuntu1.4           2.27-3ubuntu1.5            deb           CVE-2021-3326        Low
libc-bin          2.27-3ubuntu1.4           2.27-3ubuntu1.5            deb           CVE-2021-3999        Medium
libc-bin          2.27-3ubuntu1.4           2.27-3ubuntu1.5            deb           CVE-2022-23219       Low
```

## Snippet: Package Vulnerability List - Java Dependencies
Description: Security vulnerabilities in Java-based dependencies including Log4j and Logback libraries. Lists affected versions and associated CVE references.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day14.md#2025-04-17_snippet_3
Language: plaintext

```plaintext
log4j-api         2.13.3                                               java-archive  CVE-2021-45105       Medium
log4j-api         2.13.3                                               java-archive  CVE-2021-44832       Medium
log4j-to-slf4j    2.13.3                                               java-archive  CVE-2021-44832       Medium
logback-core      1.2.3                     1.2.9                      java-archive  GHSA-668q-qrv7-99fm  Medium
```