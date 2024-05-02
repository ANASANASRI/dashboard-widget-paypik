export enum MarchandRoutes {
    Dashboard = 'dashboard/:id', 
    More = 'transaction/:id/:transaId/:clientName',
    Support = 'support',
    Settings = 'settings',
    Elements = 'elements',
}

export enum SettingRoutes {
    Profile = 'profile',
    Users = 'users',
}

export enum SupportRoutes {
    FAQ = 'faq',
    Contact = 'contact',
}