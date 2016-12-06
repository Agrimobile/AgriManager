/*
 * File: app/view/LaboresPanel.js
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

Ext.define('MyApp.view.LaboresPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.laborespanel',

  requires: [
    'MyApp.view.PanelLotesViewModel1',
    'Ext.panel.Tool',
    'Ext.grid.Panel',
    'Ext.view.Table',
    'Ext.grid.column.Number',
    'Ext.grid.column.Date',
    'Ext.form.Panel',
    'Ext.button.Button'
  ],

  viewModel: {
    type: 'laborespanel'
  },
  cls: 'gridpanel',
  flex: 1,
  scrollable: true,
  title: 'Labores',
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
  items: [
    {
      xtype: 'gridpanel',
      itemId: 'grid',
      header: false,
      title: 'Labores',
      store: 'Labores',
      listeners: {
        selectionchange: 'onGridSelectionChange',
        itemlongpress: 'onGridItemLongpress',
        itemclick: 'onGridItemClick'
      },
      columns: [
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'uid',
          text: 'Uid',
          format: '00'
        },
        {
          xtype: 'numbercolumn',
          width: '20%',
          dataIndex: 'id',
          text: 'ID'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'id_origen',
          text: 'Id Origen',
          format: '00'
        },
        {
          xtype: 'gridcolumn',
          hidden: true,
          dataIndex: 'estado_registro',
          text: 'Estado Registro'
        },
        {
          xtype: 'datecolumn',
          hidden: true,
          dataIndex: 'fecha',
          text: 'Fecha',
          format: 'm/j/Y'
        },
        {
          xtype: 'numbercolumn',
          width: '20%',
          dataIndex: 'cod_lote_actividad',
          text: 'Cod Lote Actividad',
          format: '00'
        },
        {
          xtype: 'numbercolumn',
          width: '20%',
          dataIndex: 'cod_lote',
          text: 'Cod Lote',
          format: '00'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'cod_area',
          text: 'Cod Area',
          format: '00'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'cod_establecimiento',
          text: 'Cod Establecimiento',
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
          xtype: 'numbercolumn',
          width: '20%',
          dataIndex: 'cod_tarea',
          text: 'Cod Tarea',
          format: '00'
        },
        {
          xtype: 'gridcolumn',
          hidden: true,
          dataIndex: 'cantidad',
          text: 'Cantidad'
        },
        {
          xtype: 'gridcolumn',
          hidden: true,
          dataIndex: 'precio',
          text: 'Precio'
        },
        {
          xtype: 'gridcolumn',
          hidden: true,
          dataIndex: 'propia',
          text: 'Propia'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'cod_contratista',
          text: 'Cod Contratista',
          format: '00'
        }
      ]
    }
  ],
  listeners: {
    render: 'onPanelRender',
    afterrender: 'onGridpanelAfterRender'
  },
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
                /*var gridPanel = this.up('[cls=gridpanel]');
                var checkConfig = {
                table: 'Lotes_actividades',
                field: 'cod_lote',
                msgTitle: 'Lote con actividades',
                message: 'No puede borrar un lote con actividades asignadas, <br> borre las actividades primero'
                };
                f_crud.grid_check_delete(gridPanel,checkConfig);
                */
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

  onGridSelectionChange: function(model, selected, eOpts) {
    this.record = selected[0];
  },

  onGridItemLongpress: function(dataview, record, item, index, e, eOpts) {
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

  onGridItemClick: function(dataview, record, item, index, e, eOpts) {
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

  onPanelRender: function(component, eOpts) {
    this.store_name = 'Labores';
    this.model_name = 'MyApp.model.Labores';
    this.form_name  = 'MyApp.view.LaboresForm';
    var store = Ext.getStore(this.store_name);
    f_crud.load_store(this.store_name, 'cod_lote_actividad = ' + component.parent.codigo);
    f_crud.load_store('Tareas');
    var st_insumos    = Ext.getStore('Labores_insumos');
    var st_personal   = Ext.getStore('Labores_personal');
    var st_maquinaria = Ext.getStore('Labores_maquinaria');
    this.form_store_array = [store,st_insumos,st_personal,st_maquinaria];

  },

  onGridpanelAfterRender: function(component, eOpts) {
    this.setTitle("Labores en  " + component.parent.nombre);
  }

});