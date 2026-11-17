import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import {navigation} from './src/navigation';

const sidebars: SidebarsConfig = {
  vertex: navigation.map((group) => ({
    type: 'category' as const,
    label: group.label,
    collapsed: false,
    collapsible: false,
    items: group.items.map((item) => item.id),
  })),
};

export default sidebars;
