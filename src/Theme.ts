export interface ThemeInterface {
  color: {
    default: string;
    alarm: string;
    semiDefault: string;
    gray: string;

    dashboardBorder: string;
  };
  backgroundColor: {
    default: string;
    dashboard: string;
    dashboardButton: string;

    tableHead: string;
    tableBody: string;
    tableBorder: string;

    tableResizer: string;

    subTableHead: string;
    // subTableBody: string;

    textArea: string;
    alarm: string;
    unreadAlarm: string;

    hover: string;

    // modal: string;
    bottomModal: string;
  };
}

const lightTheme: ThemeInterface = {
  color: {
    default: '#000000',
    alarm: 'rgba(0, 0, 0, 0.6)',
    semiDefault: 'gray',
    gray: 'gray',

    dashboardBorder: '#cbcbcb',
  },
  backgroundColor: {
    default: '#ffffff',
    dashboard: '#ffffff',
    dashboardButton: '#dddddd',

    tableHead: '#e6e1e5',
    tableBody: '#ffffff',
    tableBorder: '#cccccc',

    tableResizer: '#d9d1d1',

    subTableHead: '#e6e1e5',

    textArea: 'rgb(234, 234, 234)',
    alarm: 'rgba(255, 255, 255, 0.99)',
    unreadAlarm: 'rgba(89, 134, 232, 0.2)',

    hover: '#eaeaea',
    bottomModal: '#ffffff',
  },
};

const darkTheme: ThemeInterface = {
  color: {
    default: '#eaeaea',
    alarm: 'rgba(255, 255, 255, 0.6)',
    semiDefault: '#b7b7b7',
    gray: '#b9b9b9',

    dashboardBorder: '#606060',
  },
  backgroundColor: {
    default: '#2a2a2a',
    dashboard: '#4a4a4a',
    dashboardButton: '#606060',

    tableHead: '#5a5258',
    tableBody: '#3a3535',
    tableBorder: '#585858',

    tableResizer: '#817474',

    subTableHead: '#666666',

    textArea: 'rgb(78 78 78)',

    alarm: 'rgba(78, 78, 78, 0.99)',
    unreadAlarm: 'rgba(166, 121, 23, 0.2)',

    hover: '#363636',
    bottomModal: '#3a3535',
  },
};

const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
