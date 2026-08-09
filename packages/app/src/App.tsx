import { createApp } from '@backstage/frontend-defaults';
import { createFrontendModule } from '@backstage/frontend-plugin-api';
import { githubAuthApiRef } from '@backstage/core-plugin-api';
import { SignInPage } from '@backstage/core-components';
import { UnifiedThemeProvider } from '@backstage/theme';
import { SignInPageBlueprint, ThemeBlueprint } from '@backstage/plugin-app-react';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import scaffolderPlugin from '@backstage/plugin-scaffolder/alpha';
import searchPlugin from '@backstage/plugin-search/alpha';
import techdocsPlugin from '@backstage/plugin-techdocs/alpha';
import kubernetesPlugin from '@backstage/plugin-kubernetes/alpha';
import orgPlugin from '@backstage/plugin-org/alpha';
import apiDocsPlugin from '@backstage/plugin-api-docs/alpha';
import catalogImportPlugin from '@backstage/plugin-catalog-import/alpha';
import catalogGraphPlugin from '@backstage/plugin-catalog-graph/alpha';
import notificationsPlugin from '@backstage/plugin-notifications/alpha';
import userSettingsPlugin from '@backstage/plugin-user-settings/alpha';
import userSettingsModule from '@backstage/plugin-app-module-user-settings';
import appVisualizerPlugin from '@backstage/plugin-app-visualizer';
import homePlugin from '@backstage/plugin-home/alpha';
import { navModule } from './modules/nav';
import { homeModule } from './modules/home';
import { devxLightTheme, devxDarkTheme } from './theme';

const signInPage = SignInPageBlueprint.make({
  params: {
    loader: async () => props =>
      (
        <SignInPage
          {...props}
          providers={[
            {
              id: 'github-auth-provider',
              title: 'GitHub',
              message: 'Sign in using GitHub',
              apiRef: githubAuthApiRef,
            },
          ]}
        />
      ),
  },
});

const lightTheme = ThemeBlueprint.make({
  name: 'devx-light',
  params: {
    theme: {
      id: 'devx-light',
      title: 'DevX Light',
      variant: 'light',
      Provider: ({ children }) => (
        <UnifiedThemeProvider theme={devxLightTheme} children={children} />
      ),
    },
  },
});

const darkTheme = ThemeBlueprint.make({
  name: 'devx-dark',
  params: {
    theme: {
      id: 'devx-dark',
      title: 'DevX Dark',
      variant: 'dark',
      Provider: ({ children }) => (
        <UnifiedThemeProvider theme={devxDarkTheme} children={children} />
      ),
    },
  },
});

const customizationModule = createFrontendModule({
  pluginId: 'app',
  extensions: [signInPage, lightTheme, darkTheme],
});

export default createApp({
  features: [
    catalogPlugin,
    scaffolderPlugin,
    searchPlugin,
    techdocsPlugin,
    kubernetesPlugin,
    orgPlugin,
    apiDocsPlugin,
    catalogImportPlugin,
    catalogGraphPlugin,
    notificationsPlugin,
    userSettingsPlugin,
    userSettingsModule,
    appVisualizerPlugin,
    homePlugin,
    navModule,
    homeModule,
    customizationModule,
  ],
});
