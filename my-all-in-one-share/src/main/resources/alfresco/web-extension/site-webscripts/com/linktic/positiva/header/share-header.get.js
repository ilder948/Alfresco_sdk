var headerMenu = widgetUtils.findObject(model.jsonModel, "id", "HEADER_APP_MENU_BAR");
if (headerMenu != null) {
    headerMenu.config.widgets.push({
        id: "HEADER_CUSTOM_PROFILE_LINK",
        
        name: "alfresco/menus/AlfMenuBarItem",
            config: {
                label: "Gestión TRD",
                icon: "icon-share",
                title: "Gestión TRD",
                targetUrl: "hdp/ws/trd"
            }
    });
}