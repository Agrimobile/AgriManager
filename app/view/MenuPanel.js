/*
 * File: app/view/MenuPanel.js
 *
 * This file was generated by Sencha Architect version 4.1.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.2.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.2.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MenuPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.menupanel',

  requires: [
    'MyApp.view.MenuPanelViewModel',
    'Ext.tree.Panel',
    'Ext.tree.View',
    'Ext.panel.Tool'
  ],

  viewModel: {
    type: 'menupanel'
  },
  id: 'agrimobile1',
  itemId: 'agrimobile1',
  scrollable: true,
  layout: 'card',
  title: 'Agrimobile',
  titleAlign: 'center',
  defaultListenerScope: true,

  items: [
    {
      xtype: 'treepanel',
      title: 'Menu',
      store: 'MainMenu',
      rootVisible: false,
      viewConfig: {
        listeners: {
          itemclick: 'onViewItemClick1'
        }
      }
    }
  ],
  listeners: {
    render: 'onPanelRender1'
  },
  tools: [
    {
      xtype: 'tool',
      cls: 'paneltool',
      itemId: 'mainmenu-tool',
      iconCls: 'x-fa fa-bars',
      listeners: {
        click: 'onToolClick2'
      }
    },
    {
      xtype: 'tool',
      itemId: 'configmenu-tool',
      iconCls: 'x-fa fa-gear',
      listeners: {
        click: 'onToolClick11'
      }
    }
  ],

  onViewItemClick1: function(dataview, record, item, index, e, eOpts) {
    /*var createPanel = function(panelClass) {
        var cardClass = "MyApp.view." + panelClass;
        if(Ext.ClassManager.get(cardClass)) {
            var newPan = Ext.create(cardClass);
            MyApp.main.add(newPan);
            MyApp.main.getLayout().next();
        }
        else {
            var errorMsg = "Error: Panel " + panelClass + " does not exist";
            throw errorMsg;
        }
    };
    var panelClass = record.get('panelClass');
    createPanel(panelClass);

    */
    var layout = MyApp.main.getLayout(), next,
        panelClass = item.panelClass,
        createPanel = function(panelClass) {
          var cardClass = "MyApp.view." + panelClass;
          if(Ext.ClassManager.get(cardClass)) {
            var newPan = Ext.create(cardClass);
            MyApp.main.add(newPan);
            MyApp.main.getLayout().next();
          }
          else {
            var errorMsg = "Error: Panel " + panelClass + " does not exist";
            throw errorMsg;
          }
        };

    layout.setActiveItem(0);
    next = layout.getNext();
    while(next) {
      next.close();
      next.destroy();
      next = layout.getNext();
    }
    createPanel(panelClass);
  },

  onPanelRender1: function(component, eOpts) {
    var mainMenuTool = component.down("#mainmenu-tool"),
        configMenuTool = component.down("#configmenu-tool"),
        mainMenuStoreRecords = Ext.getStore("MainMenu").getData().items,
        configMenuStoreRecords = Ext.getStore("ConfigMenu").getData().items,
        itemClicHandler = function(item, e) {
          this.parentMenu.openCard(item, e);
        };

    mainMenuTool.menu = Ext.create('MyApp.view.MainMenu');
    configMenuTool.menu = Ext.create('MyApp.view.ConfigMenu');

    for (var i = 0; i < mainMenuStoreRecords.length; i++) {
        mainMenuTool.menu.add({
          xtype: 'menuitem',
          iconCls: 'mainmenu-icon ' + mainMenuStoreRecords[i].data.iconCls,
          text: mainMenuStoreRecords[i].data.text,
          panelClass: mainMenuStoreRecords[i].data.panelClass,
          padding: '10px 0px',
          handler: itemClicHandler
        });
    }

    for (var i = 0; i < configMenuStoreRecords.length; i++) {
        configMenuTool.menu.add({
          xtype: 'menuitem',
          iconCls: 'mainmenu-icon ' + configMenuStoreRecords[i].data.iconCls,
          text: configMenuStoreRecords[i].data.text,
          panelClass: configMenuStoreRecords[i].data.panelClass,
          padding: '10px 0px',
          handler: itemClicHandler
        });
    }

    //main configuration
    MyApp.main = component;
    MyApp.archivo_base = 'AgriManager';
    MyApp.screen_count = 0;
    MyApp.screen_name = [];
    //MyApp.url_lib     = '../LibPHP/';
    //MyApp.url_lib       = 'http://inforeports.dnsalias.com/LibPHP/';
    MyApp.url_lib       = 'http://localhost:8080/LibPHP/';
    MyApp.usuario       = window.localStorage.getItem("agrimanager_usuario");
    MyApp.clave         = window.localStorage.getItem("agrimanager_clave");
    MyApp.base_nombre   = window.localStorage.getItem("agrimanager_base");
    MyApp.base_url      = window.localStorage.getItem("agrimanager_servidor");
    MyApp.base_usuario  = 'dba';
    MyApp.base_clave    = 'gestion525';
    MyApp.estado_sinc   = '';
    MyApp.sinc_array_store = [];
    MyApp.sinc_array_tabla = [];
    MyApp.estado_editar = 'N';

    // loading data
    f_crud.load_store('Rubros');
    f_crud.load_store('Personal');
    f_crud.load_store('Maquinaria');
    f_crud.load_store('Contratistas');
    f_crud.load_store('Depositos');
    f_crud.load_store('Campanias');
    f_crud.load_store('Tareas');


  },

  onToolClick2: function(tool, e, owner, eOpts) {
    var toolMenu = tool.menu;
    toolMenu.showBy(tool);
  },

  onToolClick11: function(tool, e, owner, eOpts) {
    var toolMenu = tool.menu;
    toolMenu.showBy(tool);
  }

});