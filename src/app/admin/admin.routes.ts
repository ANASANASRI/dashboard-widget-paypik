export enum AdminRoutes {
  Dashboard = 'dashboard',
  More = 'more/:marchanId',
  Transaction = 'more/transaction',
  Edit = 'marchand/edit/:marchanId',
  Validation = 'validation',

  // Add = 'marchand/add',
  // MarchandDashboard = 'marchand/dashboard/:merchantId' ,
  // EditUser='user/edit/:id',

  Settings = 'settings',
  Elements = 'elements',
}


export enum ElementRoutes {
  Alert = 'alert',
  Modal = 'modal',
  Buttons = 'buttons',
  Tabs = 'tabs',
  DataTable = 'data-table',
  Forms = 'forms',
}

export enum SettingRoutes {
  Profile = 'profile',
  Users = 'users',
}
