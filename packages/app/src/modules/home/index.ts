import { createFrontendModule } from '@backstage/frontend-plugin-api';
import { HomePageWidgetBlueprint } from '@backstage/plugin-home-react/alpha';
import { WelcomeContent } from './WelcomeWidget';
import { QuickLinksContent } from './QuickLinksWidget';

const welcomeWidget = HomePageWidgetBlueprint.make({
  name: 'welcome',
  params: {
    name: 'Welcome',
    title: 'Welcome',
    components: async () => ({ Content: WelcomeContent }),
    layout: {
      width: { minColumns: 12, defaultColumns: 12 },
      height: { minRows: 2, defaultRows: 2 },
    },
  },
});

const quickLinksWidget = HomePageWidgetBlueprint.make({
  name: 'quick-links',
  params: {
    name: 'QuickLinks',
    title: 'Quick Links',
    components: async () => ({ Content: QuickLinksContent }),
    layout: {
      width: { minColumns: 12, defaultColumns: 12 },
      height: { minRows: 3, defaultRows: 3 },
    },
  },
});

export const homeModule = createFrontendModule({
  pluginId: 'home',
  extensions: [welcomeWidget, quickLinksWidget],
});
