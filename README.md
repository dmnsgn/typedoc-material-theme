# typedoc-custom-theme

Example of creating a custom TypeDoc theme, see [src/index.tsx](https://github.com/Gerrit0/typedoc-custom-theme-demo/blob/main/src/index.tsx) for code & comments.

## Notes:

- Do not specify typedoc as a dependency, but as a peer dependency. Specifying it as a dependency would result in multiple TypeDoc instances being loaded, which will probably break your theme.
- TypeDoc 0.22.9 and later will automatically load npm packages with `typedoc-theme` in their keywords. This keyword will also be used to automatically create a list of available themes at https://typedoc.org/guides/themes/.
- You don't have to create a npm package to use a custom theme. You can also specify TypeDoc's [plugin](https://typedoc.org/guides/options/#plugin) option to load a local `.js` file.
