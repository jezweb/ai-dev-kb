# Angular Zone.js Project Setup and Release Process

**Summary:** This file covers topics related to "Angular Zone.js Project Setup and Release Process". Key snippets include: Preparing for Zone.js Release.

---

## Preparing for Zone.js Release

**Description:** Commands to prepare for a new Zone.js release, including updating the version and generating the changelog.

```bash
rm -rf node_modules && yarn install
export PREVIOUS_ZONE_TAG=`git tag -l 'zone.js-0.15.*' | tail -n1`
export VERSION=`(cd packages/zone.js; npm version patch --no-git-tag-version)`
export VERSION=${VERSION#v}
export TAG="zone.js-${VERSION}"
echo "Releasing zone.js version ${TAG}. Last release was ${PREVIOUS_ZONE_TAG}."
yarn gulp changelog:zonejs
```

---