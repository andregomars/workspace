export const navItems: NavItem[] = [
    {
        name: 'Playback',
        url: '/playback',
        icon: 'fa fa-play-circle-o'
    }
]

export interface NavItem {
    name: string;
    url: string;
    icon: string;
}