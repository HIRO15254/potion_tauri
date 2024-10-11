import {IconHome} from '@tabler/icons-react';
import {LinksGroupProps} from "./LinksGroup.tsx";

export const linksGroupData = [
  {
    label: 'ダッシュボード',
    Icon: IconHome,
    link: "/",
  },
] as const satisfies LinksGroupProps[];
