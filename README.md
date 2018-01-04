# react-sketchapp-svg-render-test
Test render performance of importing SVG assets

# Setup Scripts

| npm script | description                                              |
|------------|----------------------------------------------------------|
| `build`    | builds the plugin only                                   |
| `link`     | links the plugin to sketch (should run on `postinstall`) |

# Render Scripts

| Script                 | `makeSymbol` | Description                                                                                     |
|------------------------|:------------:|-------------------------------------------------------------------------------------------------|
| `build`                |              | builds the plugin only                                                                          |
| `render`               |      ❌      | alias to `render-small`                                                                         |
| `render-small`         |      ❌      | Renders `10` icons **without** creating symbols                                                 |
| `render-large`         |      ❌      | Renders `100` icons **without** creating symbols                                                |
| `render-all`           |      ❌      | Renders all `259` icons **without** creating symbols                                            |
| `render-symbols-small` |      ✅      | Renders `10` icons and creates symbols of each                                                  |
| `render-symbols-large` |      ✅      | Renders `100` icons and creates symbols of each                                                 |
| `render-symbols-all`   |      ✅      | Renders all `259` icons and creates symbols of each <br /> **🚨Could take up to 30 minutes!🚨** |


