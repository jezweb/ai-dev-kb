# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day24.md
Language: console

## Snippet: Generating Key Pair for Container Image Signing with Cosign
Description: Command to generate a public-private key pair using cosign. This creates a cosign.key private key file and cosign.pub public key file in the current directory.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day24.md#2025-04-17_snippet_0
Language: console

```console
cosign generate-key-pair
```

## Snippet: Verifying a Signed Container Image with Cosign
Description: Command to verify a container image's signature using cosign with a public key. The output confirms the image has been signed with the expected key and has not been tampered with.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day24.md#2025-04-17_snippet_2
Language: console

```console
$ cosign verify --key=cosign.pub asankov/signed | jq

Verification for index.docker.io/asankov/signed:latest --
The following checks were performed on each of these signatures:
  - The cosign claims were validated
  - The signatures were verified against the specified public key
[
  {
    "critical": {
      "identity": {
        "docker-reference": "index.docker.io/asankov/signed"
      },
      "image": {
        "docker-manifest-digest": "sha256:93d62c92b70efc512379cf89317eaf41b8ce6cba84a5e69507a95a7f15708506"
      },
      "type": "cosign container image signature"
    },
    "optional": null
  }
]
```

## Snippet: Signing a Container Image with Cosign
Description: Command to sign a container image using cosign with a private key. This pushes the signature to the container repository alongside the image.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day24.md#2025-04-17_snippet_1
Language: console

```console
$ cosign sign --key cosign.key asankov/signed
Enter password for private key:

Pushing signature to: index.docker.io/asankov/signed
```

## Snippet: Verifying an Unsigned Container Image with Cosign
Description: Command demonstrating what happens when attempting to verify an unsigned image. The verification fails with an error message indicating no matching signatures were found.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2023/day24.md#2025-04-17_snippet_3
Language: console

```console
$ cosign verify --key=cosign.pub asankov/not-signed
Error: no matching signatures:

main.go:62: error during command execution: no matching signatures:
```