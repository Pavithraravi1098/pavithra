require.config({
    // Karma serves files under '/base', which is the basePath from your config file
    baseUrl: './base',

    packages: [{
        name: '@syncfusion/ej2-base',
        location: './../../../node_modules/@syncfusion/ej2-base/dist',
        main: 'ej2-base.umd.min.js'
    },
    {
        name: '@syncfusion/ej2-buttons',
        location: './../../../node_modules/@syncfusion/ej2-buttons/dist',
        main: 'ej2-buttons.umd.min.js'
    },
    {
        name: '@syncfusion/ej2-popups',
        location: './../../../node_modules/@syncfusion/ej2-popups/dist',
        main: 'ej2-popups.umd.min.js'
    },
    {
        name: '@syncfusion/ej2-splitbuttons',
        location: './../../../node_modules/@syncfusion/ej2-splitbuttons/dist',
        main: 'ej2-splitbuttons.umd.min.js'
    }]
});
