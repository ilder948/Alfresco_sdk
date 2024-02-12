model.jsonModel = {
    widgets: [
        {
            id: "SET_PAGE_TITLE",
            name: "alfresco/header/SetTitle",
            config: {
                title: "Gestión tablas de retención"
            }
        },
        
        // {
        //    name: "alfresco/layout/AlfSideBarContainer",
        //    config: {
        //       isResizable: true,
        //       initialSidebarWidth: 250,
        //       widgets: [
        //          {
        //             name: "alfresco/layout/Twister",
        //             align: "sidebar",
        //             config: {
        //                 label: "Tasks",
        //                 headingLevel: 3,
        //                 initiallyOpen: true,
        //                 widgets: [
        //                   {name: "alfresco/lists/AlfList",
        //                     config: {
        //                       currentData: {
        //                         items: [
        //                           { value: "Active"},
        //                           { value: "Completed"}
        //                         ]
        //                       },
        //                       widgets: [
        //                         {
        //                           name: "alfresco/lists/views/HtmlListView",
        //                           config: {
        //                             propertyToRender: "value"
        //                           }
        //                         }
        //                       ]
        //                     }
        //                     }
        //                 ]
        //             }
        //          },
        //          {
        //              id: "iframe",
        //              name: "alfresco/integration/IFrame",
        //              config: {
        //                  src: "https://www.davaroprojects.com"
        //              }
        //          }
        //       ]
        //    }
        // },
        {
            id: "JBPM_HORIZONTAL_WIDGET_LAYOUT",
            name: "alfresco/layout/HorizontalWidgets",
            config: {
                widgetWidth: 100,
                widgets: [
                    {
                        id: "iframe",
                        name: "alfresco/integration/IFrame",
                        config: {
                            src: "http://localhost:4200",

                        }
                    }
                ]
            }
        }
    ]
};