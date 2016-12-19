/*
 * File: app/view/DepositosPanel.js
 *
 * This file was generated by Sencha Architect version 4.0.2.
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

Ext.define('MyApp.view.DepositosPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.depositospanel',

  requires: [
    'MyApp.view.LotesPanelViewModel5',
    'Ext.panel.Tool',
    'Ext.grid.Panel',
    'Ext.view.Table',
    'Ext.grid.column.Number',
    'Ext.form.Panel',
    'Ext.button.Button'
  ],

  viewModel: {
    type: 'depositospanel'
  },
  cls: 'gridpanel',
  flex: 1,
  scrollable: true,
  title: 'Depositos',
  titleAlign: 'center',
  defaultListenerScope: true,

  tools: [
    {
      xtype: 'tool',
      cls: 'paneltool',
      iconCls: 'x-fa fa-arrow-left',
      listeners: {
        click: 'onToolClick'
      }
    }
  ],
  listeners: {
    render: 'onPanelRender',
    afterrender: 'onGridpanelAfterRender'
  },
  items: [
    {
      xtype: 'gridpanel',
      itemId: 'grid',
      header: false,
      title: 'Depositos',
      store: 'Depositos',
      listeners: {
        selectionchange: 'onGridSelectionChange1',
        itemlongpress: 'onGridItemLongpress1',
        itemclick: 'onGridItemClick1',
        beforerender: 'onGridBeforeRender'
      },
      columns: [
        {
          xtype: 'gridcolumn',
          hidden: true,
          dataIndex: 'estado_registro',
          text: 'Estado Registro'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'id',
          text: 'ID'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'uid',
          text: 'Uid',
          format: '00'
        },
        {
          xtype: 'numbercolumn',
          width: '50%',
          dataIndex: 'codigo',
          text: 'Codigo',
          format: '00'
        },
        {
          xtype: 'gridcolumn',
          width: '50%',
          dataIndex: 'nombre',
          text: 'Nombre'
        }
      ]
    }
  ],
  dockedItems: [
    {
      xtype: 'form',
      dock: 'bottom',
      layout: 'column',
      bodyPadding: 10,
      header: false,
      title: 'My Form',
      items: [
        {
          xtype: 'container',
          columnWidth: 1,
          itemId: 'newBox',
          layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                f_crud.form_open(this.up("[cls=gridpanel]"),'ADD');
              },
              cls: '',
              iconCls: 'x-fa fa-plus',
              text: 'Nuevo'
            }
          ]
        },
        {
          xtype: 'container',
          columnWidth: 0.33,
          hidden: true,
          itemId: 'editBox',
          layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                f_crud.form_open(this.up('[cls=gridpanel]'),'EDIT');
              },
              cls: '',
              margin: '0 0 0 10',
              iconCls: 'x-fa fa-pencil',
              text: 'Editar'
            }
          ]
        },
        {
          xtype: 'container',
          columnWidth: 0.33,
          hidden: true,
          itemId: 'deleteBox',
          layout: {
            type: 'hbox',
            align: 'stretch'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                var gridPanel = this.up('[cls=gridpanel]');
                f_crud.grid_delete(gridPanel);
              },
              cls: '',
              margin: '0 0 0 10',
              iconCls: 'x-fa fa-trash',
              text: 'Borrar'
            }
          ]
        }
      ]
    }
  ],

  onToolClick: function(tool, e, owner, eOpts) {
    var thisPanel = MyApp.main.getLayout().getActiveItem();
    MyApp.main.getLayout().prev();
    thisPanel.close();
  },

  onPanelRender: function(component, eOpts) {
    this.store_name = 'Depositos';
    this.model_name = 'MyApp.model.Depositos';
    this.form_name  = 'MyApp.view.DepositosForm';
    var store = Ext.getStore(this.store_name);
    this.form_store_array = [store];
    f_crud.load_store(this.store_name);
  },

  onGridSelectionChange1: function(model, selected, eOpts) {
    this.record = selected[0];
  },

  onGridItemLongpress1: function(dataview, record, item, index, e, eOpts) {
    var newbox = this.down("#newBox");
    var editbox = this.down("#editBox");
    var deletebox = this.down("#deleteBox");
    newbox.columnWidth = 0.33;
    newbox.layout.pack = 'end';
    newbox.hide();
    newbox.show();
    editbox.show();
    deletebox.show();
    this.longpress = true;
  },

  onGridItemClick1: function(dataview, record, item, index, e, eOpts) {
    if(!this.longpress) {
        /*var panelClass = "MyApp.view.";
        var newPan = Ext.create(panelClass);
        newPan.parent = record.data;
        MyApp.main.add(newPan);
        MyApp.main.getLayout().setActiveItem(newPan);*/
        console.log('Should bring the user to a single-labor view');
    }
    this.longpress = false;
  },

  onGridBeforeRender: function(component, eOpts) {
    f_crud.renderGridWidth(component);
  },

  onGridpanelAfterRender: function(component, eOpts) {
    this.setTitle("Depositos");
  }

});