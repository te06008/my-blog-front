export interface ThemeInterface {
  color: {
    default: string;
    alarm: string;
    semiDefault: string;
    gray: string;

    dashboardBorder: string;

    navBar: string;
    banner: string;
    category: string;
    categorySelect: string;
    searchBar: string;
    placeholder: string;
    categoryMenu: string;
    categoryCard: string;
    postTitle: string;
    postDate: string;
    postContent: string;
    postTag: string;
    blogTitle: string;
    blogEditText: string;
    tocTitle: string;
    tocText: string;
    blogNav: string;
    relatedPostTitle: string;
    relatedPostText: string;
    commentCount: string;
    input: string;
    commentDate: string;
    aboutPar: string;
    floatBtn: string;
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
    modal: string;
    bottomModal: string;

    ///
    navBar: string;
    categorySelect: string;
    categoryCard: string;
    floatBtn: string;
  };
}

const lightTheme: ThemeInterface = {
  color: {
    default: '#000000',
    alarm: 'rgba(0, 0, 0, 0.6)',
    semiDefault: 'gray',
    gray: 'gray',

    dashboardBorder: '#cbcbcb',
    navBar: '#ffffff',
    banner: '#3c3c3c',
    category: '#333',
    categorySelect: '#fff',
    searchBar: '#2b2b2b',
    placeholder: 'gray',
    categoryMenu: '#454545',
    categoryCard: '#fdfdfd',
    postTitle: '#333',
    postDate: '#828282',
    postContent: '#777',
    postTag: '#ff5100',
    blogTitle: '#454545',
    blogEditText: '#2b2b2b',
    tocTitle: '#222',
    tocText: '#2a2a2a',
    blogNav: '#666',
    relatedPostTitle: '#333',
    relatedPostText: '#666',
    commentCount: '#212529',
    input: '#2b2b2b',
    commentDate: '#868e96',
    aboutPar: '#343a40',
    floatBtn: '#454545',
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

    ///
    modal: '#ffffff',
    navBar: 'darkgray',
    categorySelect: 'darkgray',
    categoryCard: '#000000bd',
    floatBtn: '#ffffff',
  },
};

const darkTheme: ThemeInterface = {
  color: {
    default: '#eaeaea',
    alarm: 'rgba(255, 255, 255, 0.6)',
    semiDefault: '#b7b7b7',
    gray: '#b9b9b9',

    dashboardBorder: '#606060',
    navBar: '#eeeeee',
    banner: '#4c4c4c',
    category: '#ddd',
    categorySelect: '#ddd',
    searchBar: '#ddd',
    placeholder: 'darkgray',
    categoryMenu: '#bbb',
    categoryCard: '#ddd',
    postTitle: '#ccc',
    postDate: '#bbb',
    postContent: '#aaa',
    postTag: 'rgba(255, 81, 0, 0.8)',
    blogTitle: '#ccc',
    blogEditText: '#ccc',
    tocTitle: '#ddd',
    tocText: '#ccc',
    blogNav: '#ddd',
    relatedPostTitle: '#ddd',
    relatedPostText: '#ccc',
    commentCount: '#eee',
    input: '#ccc',
    commentDate: '#ddd',
    aboutPar: '#ddd',
    floatBtn: '#eee',
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

    ///
    modal: '#555',
    navBar: 'gray',
    categorySelect: 'gray',
    categoryCard: '#444',
    floatBtn: '#444',
  },
};

const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
