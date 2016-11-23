/*
 * File: app/view/PanelLotes_actividades.js
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

Ext.define('MyApp.view.PanelLotes_actividades', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.panellotes_actividades',

  requires: [
    'MyApp.view.PanelLotes_actividadesViewModel',
    'Ext.panel.Tool',
    'Ext.grid.Panel',
    'Ext.view.Table',
    'Ext.grid.column.Number',
    'Ext.grid.column.Date',
    'Ext.form.Panel',
    'Ext.button.Button'
  ],

  viewModel: {
    type: 'panellotes_actividades'
  },
  flex: 1,
  itemId: 'gridpanel',
  title: 'Lotes en Actividad',
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
      title: 'Lotes en Actividad',
      store: 'Lotes_actividades',
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
          width: '25%',
          dataIndex: 'codigo',
          text: 'Codigo',
          format: '00'
        },
        {
          xtype: 'gridcolumn',
          width: '25%',
          dataIndex: 'nombre',
          text: 'Nombre'
        },
        {
          xtype: 'numbercolumn',
          width: '25%',
          dataIndex: 'cod_lote',
          text: 'Cod Lote',
          format: '00'
        },
        {
          xtype: 'numbercolumn',
          width: '',
          dataIndex: 'cod_actividad',
          text: 'Cod Actividad',
          format: '00'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'cod_periodo',
          text: 'Cod Periodo',
          format: '00'
        },
        {
          xtype: 'datecolumn',
          hidden: true,
          dataIndex: 'desde',
          text: 'Desde',
          format: 'm/j/Y'
        },
        {
          xtype: 'datecolumn',
          hidden: true,
          dataIndex: 'hasta',
          text: 'Hasta',
          format: 'm/j/Y'
        }
      ],
      listeners: {
        itemlongpress: 'onGridpanelItemLongpress',
        selectionchange: 'onGridpanelSelectionChange',
        itemclick: 'onGridpanelItemClick'
      }
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
          itemId: 'moreBox',
          layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                var lotes_actividades_grid = this.up("#gridpanel");
                f_crud.form_open(lotes_actividades_grid);
              },
              iconCls: 'x-fa fa-plus',
              text: 'Agregar'
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
                var lotes_actividades_grid = this.up('#gridpanel');
                lotes_actividades_grid.form_name = 'MyApp.view.Lotes_ActividadesForm';
                f_crud.form_open(grid,'EDIT');
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
                var gridPanel = this.up('#gridpanel');
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
    this.store_name = 'Lotes_actividades';
    this.model_name = 'MyApp.model.Lotes_actividades';
    this.form_name  = 'MyApp.view.PanelAgregarLotes';
    var store = Ext.getStore(this.store_name);
    this.form_store_array = [store];
    f_crud.load_store(this.store_name, 'cod_actividad = ' + component.parent.codigo);
  },

  onGridpanelItemLongpress: function(dataview, record, item, index, e, eOpts) {
    var morebox = this.down("#moreBox");
    morebox.columnWidth = 0.33;
    morebox.layout.pack = 'end';
    morebox.hide();
    morebox.show();

    var editbox = this.down("#editBox");
    var deletebox = this.down("#deleteBox");
    editbox.show();
    deletebox.show();
    this.longpress = true;
  },

  onGridpanelSelectionChange: function(model, selected, eOpts) {
    this.record = selected[0];
  },

  onGridpanelItemClick: function(dataview, record, item, index, e, eOpts) {
    if(!this.longpress) {
        var panelClass = "MyApp.view.PanelLabores";
        var newPan = Ext.create(panelClass);
        newPan.parent = record.data;
        MyApp.main.add(newPan);
        MyApp.main.getLayout().setActiveItem(newPan);
    }
    this.longpress = false;
  },

  onGridpanelAfterRender: function(component, eOpts) {
    this.setTitle("Lotes dedicados a " + component.parent.nombre);
  }

});