import {
  Application,
  JSX,
  DefaultTheme,
  PageEvent,
  Reflection,
  DefaultThemeRenderContext,
  Options,
} from "typedoc";

/**
 * A clone of the default theme, which prints a message when rendering each page.
 */
export class LoggingTheme extends DefaultTheme {
  render(page: PageEvent<Reflection>): string {
    this.application.logger.info(`Rendering ${page.url}`);
    return super.render(page);
  }
}

/**
 * The theme context is where all of the partials live for rendering a theme,
 * in addition to some helper functions.
 */
export class FooterOverrideThemeContext extends DefaultThemeRenderContext {
  constructor(theme: DefaultTheme, options: Options) {
    super(theme, options);

    const oldFooter = this.footer;

    // Overridden methods must have `this` bound if they intend to use it.
    // <JSX.Raw /> may be used to inject HTML directly.
    this.footer = () => {
      return (
        <>
          {oldFooter()}
          <div class="container">
            <JSX.Raw
              html={this.markdown(
                "Custom footer text, with **markdown** support!"
              )}
            />
          </div>
        </>
      );
    };
  }
}

/**
 * A near clone of the default theme, that adds some custom text after the footer.
 */
export class FooterOverrideTheme extends DefaultTheme {
  private _contextCache?: FooterOverrideThemeContext;

  override getRenderContext(): FooterOverrideThemeContext {
    this._contextCache ||= new FooterOverrideThemeContext(
      this,
      this.application.options
    );
    return this._contextCache;
  }
}

/**
 * Called by TypeDoc when loading this theme as a plugin. Should be used to define themes which
 * can be selected by the user.
 */
export function load(app: Application) {
  // Hooks can be used to inject some HTML without fully overwriting the theme.
  app.renderer.hooks.on("body.begin", (_) => (
    <script>
      <JSX.Raw html="console.log(`Loaded ${location.href}`)" />
    </script>
  ));

  // Or you can define a custom theme. This one behaves exactly like the default theme,
  // but logs a message when rendering a page.
  app.renderer.defineTheme("logging", LoggingTheme);

  // While this one overwrites the footer to include custom content.
  app.renderer.defineTheme("footer", FooterOverrideTheme);
}
