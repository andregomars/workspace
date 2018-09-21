export const navItems: NavItem[] = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'fa fa-dashboard'
    },
    {
        name: 'Playback',
        url: '/playback',
        icon: 'fa fa-play-circle-o'
    },
    {
        name: 'Playground',
        url: '/playground',
        icon: 'fa fa-play'
    }
];

export interface NavItem {
    name: string;
    url: string;
    icon: string;
}
