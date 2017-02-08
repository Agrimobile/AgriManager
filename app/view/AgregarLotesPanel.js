/*
 * File: app/view/AgregarLotesPanel.js
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

Ext.define('MyApp.view.AgregarLotesPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.agregarlotespanel',

  requires: [
    'MyApp.view.AgregarLotesPanelViewModel',
    'Ext.panel.Tool',
    'Ext.grid.Panel',
    'Ext.view.Table',
    'Ext.grid.column.Number',
    'Ext.selection.CheckboxModel',
    'Ext.form.Panel',
    'Ext.button.Button'
  ],

  viewModel: {
    type: 'agregarlotespanel'
  },
  flex: 1,
  itemId: 'formseveral',
  scrollable: true,
  title: 'Asignar Lotes',
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
      cls: 'gridAddLotes',
      itemId: 'addinggrid',
      title: 'Lotes a agregar',
      store: 'Lotes',
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
          hidden: true,
          dataIndex: 'superficie',
          text: 'Superficie'
        },
        {
          xtype: 'numbercolumn',
          itemId: 'columnEstabl',
          width: '25%',
          dataIndex: 'cod_establecimiento',
          text: 'Cod Establecimiento',
          format: '00'
        }
      ],
      listeners: {
        beforerender: 'onAddinggridBeforeRender'
      },
      selModel: {
        selType: 'checkboxmodel'
      }
    }
  ],
  listeners: {
    render: 'onPanelRender',
    beforerender: 'onFormseveralBeforeRender'
  },
  dockedItems: [
    {
      xtype: 'form',
      dock: 'bottom',
      bodyPadding: 10,
      header: false,
      title: 'My Form',
      layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'center'
      },
      items: [
        {
          xtype: 'container',
          itemId: 'MoreBox',
          layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                var lotesToAdd = this.up("#formseveral");
                var config = {
                  gridRecordPK: 'cod_lote',
                  pivotPK: 'cod_actividad'
                };
                f_crud.save_several_records(lotesToAdd, config);
              },
              flex: 1,
              text: 'Agregar Lotes Seleccionados'
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

  onAddinggridBeforeRender: function(component, eOpts) {
    f_crud.renderGridWidth(component);
  },

  onPanelRender: function(component, eOpts) {
    this.store_name = 'Lotes';
    this.model_name = 'MyApp.model.Lotes';
    //var store = Ext.getStore(this.store_name);
    //var store = Ext.getStore('Lotes_actividades');
    //this.form_store_array = [store];

    //f_crud.load_store(this.store_name,'',"select *,'' as agregar from Lotes");
    f_crud.load_store(this.store_name,'',"select * from Lotes");
  },

  onFormseveralBeforeRender: function(component, eOpts) {
    f_crud.load_store("Establecimientos");
    // TODO: FIND A BETTER WAY TO FIND THE COLUMN OBJECT!
    component.items.items["0"].columns[6].renderer = function(value, metaData, record, rowIndex, colIndex, store){
      debugger;
      return f_crud.getDisplayValue('Establecimientos', value, 'nombre');
    };
    // how to get the fucking column
  }

});