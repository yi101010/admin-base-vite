import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';

export const SIDE_LINKS_TOP = [
  {
    path: "/",
    name: "Home",
    icon: HomeIcon,
  },
  {
    path: "/dashboard/",
    name: "Dashboard",
    icon: BarChartIcon,
  },
  {
    path: "/alert/",
    name: "Alert",
    icon: NotificationsIcon,
  },
] as const;

export const SIDE_LINKS_BOTTOM = [
  {
    path: "/help/",
    name: "Help",
    icon: HelpIcon,
  },
  {
    path: "/settings/",
    name: "Settings",
    icon: SettingsIcon,
  },
] as const;
