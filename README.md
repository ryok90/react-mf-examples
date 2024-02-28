# React <> Module Federation Plugin - Examples
![npm](https://img.shields.io/npm/dw/@module-federation/enhanced)

This repository contains several small samples on different integrations of `React` and `@module-federation/enhanced` plugin.

## Sample Structure

```
- template
  ├ host            (A React host app)
  ├ remote          (A React remote app)
  ├ package.json    (Package file with scripts to run all apps at once)
  └ README.md       (This readme file to explain how to run the sample)
```

## Sample Stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## How to run the sample

Install the dependencies using `npm`:

```bash
npm i
```

To run the samples in development mode, run the following command:

```bash
npm run dev
```

To run the samples in production mode, first build the samples using the following command:

```bash
npm run build
```

Then, run the following command to serve the samples:

```bash
npm run start
```
