# aws-ai-availability usage example

Offline, JSON-backed lookup of AWS AI service and foundation-model regional availability (Bedrock access modes included). Unofficial / community-maintained — not an AWS product.

This consuming application demonstrates **inspect the bundled model and region availability snapshot** using the published npm package, pinned to `0.3.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Check which recorded AWS regions and access modes include a foundation model.
- Populate a regional model selector from the bundled snapshot, then verify current service availability before deployment.

## Links

- [npm package](https://www.npmjs.com/package/aws-ai-availability)
- [Implementation monorepo](https://github.com/x12i/ai-profiles)
- [Reviewed package source](https://github.com/x12i/ai-profiles/tree/8efd4dc11dfaacab2ceef9f030a4a3fa7da00800/packages/aws-ai-availability)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
