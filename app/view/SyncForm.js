/*
 * File: app/view/SyncForm.js
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

Ext.define('MyApp.view.SyncForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.syncform',

  requires: [
    'MyApp.view.LotesFormViewModel6',
    'Ext.button.Button',
    'Ext.form.FieldSet',
    'Ext.form.field.Text'
  ],

  viewModel: {
    type: 'syncform'
  },
  itemId: 'sincronizar',
  scrollable: true,
  bodyPadding: 10,
  title: 'Sincronizacion',
  defaultListenerScope: true,

  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  dockedItems: [
    {
      xtype: 'container',
      dock: 'bottom',
      layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'center'
      },
      items: [
        {
          xtype: 'button',
          handler: function(button, e) {
            var panel = this.up('#sincronizar');

            if (button.getText() === 'Cerrar') {
              MyApp.screen_count-- ;
              MyApp.main.setActiveItem( MyApp.screen_name[MyApp.screen_count] );
              return;
            }
            button.setText('Cerrar');
            panel.down('#tabla').setValue('Descargando...');

            panel.f_sincronizar();
            panel.down('#iniciar').setDisabled(true);
            panel.down('#cancelar').setDisabled(true);
          },
          margins: '',
          itemId: 'iniciar',
          margin: 10,
          iconCls: 'x-fa fa-check',
          text: 'Aceptar'
        },
        {
          xtype: 'button',
          handler: function(button, e) {
            f_crud.close_form(this.up("#form"));
          },
          itemId: 'cancelar',
          margin: 10,
          iconCls: 'x-fa fa-remove',
          text: 'Cancelar'
        }
      ]
    }
  ],
  listeners: {
    activate: 'onFormActivate',
    render: 'onFormRender',
    hide: 'onFormHide'
  },
  items: [
    {
      xtype: 'fieldset',
      flex: 1,
      title: 'Sincronizando tablas',
      items: [
        {
          xtype: 'textfield',
          itemId: 'tabla',
          width: '100%',
          fieldLabel: 'Tabla',
          blankText: 'Este campo es obligatorio',
          editable: false
        }
      ]
    }
  ],

  onFormActivate: function(component, eOpts) {
    var item = component.header.title.text;
    if(component.action === 'ADD') {
      component.setTitle('Nuevo ' + item);
    }
    else if(component.action === 'EDIT') {
      component.setTitle('Editar ' + item);
    }
    else {
      component.setTitle(item);
    }
  },

  onFormRender: function(component, eOpts) {
    var panel = this;
    var button = this.down('#iniciar');
    if (MyApp.sinc_type === 'SILENT') {

      if (button.getText() === 'Cerrar') {
        MyApp.screen_count-- ;
        MyApp.main.setActiveItem( MyApp.screen_name[MyApp.screen_count] );
        return;
      }
      button.setText('Cerrar');
      panel.down('#tabla').setValue('Descargando...');

      panel.f_sincronizar();

    }
  },

  onFormHide: function(component, eOpts) {
    /*
    // below code should refresh the panel-grid
    var panel = MyApp.main.getActiveItem();
    var grid = panel.down('#grid');
    if (grid){ grid.refresh(); }*/
  },

  f_sincronizar: function() {
    f_sinc.agregar_todas();
    f_sinc.sincronizar(this);
  }

});