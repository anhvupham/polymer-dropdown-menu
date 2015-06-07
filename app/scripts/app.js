/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function (document) {
    'use strict';

    // Grab a reference to our auto-binding template
    // and give it some initial binding values
    // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
    var app = document.querySelector('#app');

    app.displayInstalledToast = function () {
        document.querySelector('#caching-complete').show();
    };

    // Listen for template bound event to know when bindings
    // have resolved and content has been stamped to the page
    app.addEventListener('dom-change', function () {
        console.log('Our app is ready to rock!');
    });

    // See https://github.com/Polymer/polymer/issues/1381
    window.addEventListener('WebComponentsReady', function () {
        // Ensure the drawer is hidden on desktop/tablet
        var drawerPanel = document.querySelector('#paperDrawerPanel');
        drawerPanel.forceNarrow = true;
    });

    // Close drawer after menu item is selected if drawerPanel is narrow
    app.onMenuSelect = function () {
        var drawerPanel = document.querySelector('#paperDrawerPanel');
        if (drawerPanel.narrow) {
            drawerPanel.closeDrawer();
        }
    };

    app.menus = [{
        title: "Collapsible",
        // icon: "social:group-add",
        link: "/collapsible",
        tag: "collapsible"
    }, {
        title: "Open 1 at a time",
        // icon: "social:group-add",
        link: "/toggle",
        tag: "toggle"
    }, {
        title: "Icon and Color",
        // icon: "social:group-add",
        link: "/icon",
        tag: "icon"
    }, {
        title: "Two level",
        // icon: "social:group-add",
        link: "/level",
        tag: "level"
    }];

    app.demo1 = [{
        title: "Licensor Management",
        icon: "social:group-add",
        color: "#2e7d32",
        items: [{
            title: "Licensor Manage",
            link: "/login",
            tag: "login",
            children: [{
                title: "Add Licensor",
                link: "/login",
                tag: "login"
            }, {
                title: "Licensors",
                link: "/login",
                tag: "login"
            }]
        }]
    }, {
        title: "Admin Permission",
        icon: "settings",
        color: "#ff4080",
        items: [{
            title: "Admin Console",
            link: "/login",
            tag: "login",
            children: [{
                title: "Settings",
                link: "/login",
                tag: "login"
            }, {
                title: "Billings",
                link: "/login",
                tag: "login"
            }]
        }, {
            title: "User Management",
            link: "/login",
            tag: "login",
            children: [{
                title: "Add User",
                link: "/login",
                tag: "login"
            }, {
                title: "Users",
                link: "/login",
                tag: "login"
            }, {
                title: "Assign Permission",
                link: "/login",
                tag: "login"
            }, {
                title: "Permissions",
                link: "/login",
                tag: "login"
            }]
        }]
    }, {
        title: "Files Management",
        icon: "editor:insert-drive-file",
        color: "#ff4080",
        items: [{
            title: "My Folders",
            link: "/login",
            tag: "login",
            children: [{
                title: "All",
                link: "/login",
                tag: "login"
            }, {
                title: "Recent",
                link: "/login",
                tag: "login"
            }, {
                title: "Trash",
                link: "/login",
                tag: "login"
            }]
        }, {
            title: "Collaboration",
            link: "/login",
            tag: "login",
            children: [{
                title: "Shared Folders",
                link: "/login",
                tag: "login"
            }]
        }, {
            title: "Client Management",
            link: "/login",
            tag: "login",
            children: [{
                title: "Client Folders",
                link: "/login",
                tag: "login"
            }, {
                title: "Add Client",
                link: "/login",
                tag: "login"
            }, {
                title: "Clients",
                link: "/login",
                tag: "login"
            }, {
                title: "Client Permissions",
                link: "/login",
                tag: "login"
            }]
        }]
    }, {
        title: "Services & Products",
        icon: "icons:shop",
        color: "#2e7d32",
        items: [{
            title: "Service Manage",
            link: "/login",
            tag: "login",
            children: [{
                title: "Add Service",
                link: "/login",
                tag: "login"
            }, {
                title: "Services",
                link: "/login",
                tag: "login"
            }]
        }, {
            title: "Product Manage",
            link: "/login",
            tag: "login",
            children: [{
                title: "Add Product",
                link: "/login",
                tag: "login"
            }, {
                title: "Products",
                link: "/login",
                tag: "login"
            }]
        }]
    }];

})(document);
