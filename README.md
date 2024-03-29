### Project Structure

```
root
  |- /modules
  |  '- mf1
  |  '- mf2
  |  '- ...                   // Micro-Frontend Apps
  |
  '- webpack.shell.config.js
  '- webpack.mf1.config.js
  '- webpack.mf2.config.js
  '- ...                      // micro-frontends webpack configs
```

The shell application loads the individual, separately built and provided microfrontends as needed.

Each application, including the shell, has its own webpack config file located at the project root level.

## Building the Project

1. Build the shell app: `npm run build:shell`
2. Build the remote micro-frontend apps:
    <br>`npm run build:{MICRO_FRONTEND_NAME}`>
    <br>For instance, to build micro-frontend-1, run: `npm run build:mf1`

* To build all micro-frontend apps, run: `npm run build:all`

## Running the Project

1. Run the shell app: `npm run serve:dist:shell`
2. Build the remote micro-frontend apps:
    <br>`npm run serve:dist:{MICRO_FRONTEND_NAME}`>
    <br>For instance, to build micro-frontend-1, run: `npm run serve:dist:mf1`

* To serve all micro-frontend apps from /dist, run: `npm run serve:all`
* To run all micro-frontend app using the webpack-dev-server, run:
   <br>`npm run serve:dist:all`


## References

1. [The Microfrontend Revolution: Module Federation in Webpack 5](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-module-federation-in-webpack-5/)
2. [Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
3. [Webpack](https://webpack.js.org/)
4. [TypeScript Lang](https://www.typescriptlang.org/)
