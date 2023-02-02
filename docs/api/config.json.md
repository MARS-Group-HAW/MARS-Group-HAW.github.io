---
sidebar_position: 0
description: API reference for the MARS configuration file.
slug: /api/config
---

# `config.json`

## Overview {#overview}

`config.js` contains configurations for your model and is placed in the root directory of your project.


## Required fields {#required-fields}

### `title` {#title}

- Type: `string`

Title for your website. Will be used in metadata and as browser tab title.

```js title="docusaurus.config.js"
module.exports = {
  title: 'Docusaurus',
};
```
