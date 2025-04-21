# Angular Internationalization (i18n) Translation File Management

**Summary:** This file covers topics related to "Angular Internationalization (i18n) Translation File Management". Key snippets include: Multiple Translation Units in XLIFF Format, French Translation Unit Before Translation in XLIFF Format, Extracting i18n Translations with Different Format Options in Angular CLI, Extracting i18n Translations with Custom Output Filename in Angular CLI.

---

## Multiple Translation Units in XLIFF Format

**Description:** Example of multiple translated XLIFF translation units showing source English text and target French text for various UI elements from an Angular application.

```html
<trans-unit id="ba0cc104d3d69bf669f97b8d96a4c5d8d9559aa3" datatype="html">
  <source>I don&apos;t output any element</source>
  <target>Je n&apos;affiche aucun élément</target>
</trans-unit>
<trans-unit id="701174153757adf13e7c24a248c8a873ac9f5193" datatype="html">
  <source>Angular logo</source>
  <target>Logo d&apos;Angular</target>
</trans-unit>
```

---

## French Translation Unit Before Translation in XLIFF Format

**Description:** Example of an untranslated XLIFF translation unit element showing a source element that needs French translation. This represents an h1 greeting tag marked with the i18n attribute.

```html
<trans-unit id="introductionHeader" datatype="html">
  <source>Hello i18n!</source>
  <note priority="1" from="description">An introduction header for this sample</note>
  <note priority="1" from="meaning">User welcome</note>
</trans-unit>
```

---

## Extracting i18n Translations with Different Format Options in Angular CLI

**Description:** Commands demonstrating how to extract i18n translations in various formats including XLIFF 1.2, XLIFF 2.0, XMB, ARB, and JSON using the --format flag.

```bash
ng extract-i18n --format=xlf
ng extract-i18n --format=xlf2
ng extract-i18n --format=xmb
ng extract-i18n --format=arb
ng extract-i18n --format=json
```

---

## Extracting i18n Translations with Custom Output Filename in Angular CLI

**Description:** Command to extract i18n translations and specify a custom output file name instead of using the default messages.xlf name.

```bash
ng extract-i18n --out-file=source.xlf
```

---