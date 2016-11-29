/*
 * File: app/view/TareasForm.js
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

Ext.define('MyApp.view.TareasForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.tareasform',

  requires: [
    'MyApp.view.LotesFormViewModel3',
    'Ext.container.Container',
    'Ext.button.Button',
    'Ext.form.field.Number'
  ],

  viewModel: {
    type: 'tareasform'
  },
  itemId: 'form',
  bodyPadding: 10,
  title: 'Tarea',
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
            var lotesForm = this.up('#form');
            f_crud.save_form(lotesForm);
          },
          margins: '',
          margin: 10,
          iconCls: 'x-fa fa-check',
          text: 'Aceptar'
        },
        {
          xtype: 'button',
          handler: function(button, e) {
            f_crud.close_form(this.up("#form"));
          },
          margin: 10,
          iconCls: 'x-fa fa-remove',
          text: 'Cancelar'
        }
      ]
    }
  ],
  items: [
    {
      xtype: 'numberfield',
      fieldLabel: 'Codigo',
      name: 'codigo'
    },
    {
      xtype: 'textfield',
      fieldLabel: 'Descripcion',
      name: 'descripcion'
    },
    {
      xtype: 'textfield',
      fieldLabel: 'Tipo',
      name: 'tipo'
    },
    {
      xtype: 'textfield',
      fieldLabel: 'Unidad de medida',
      name: 'um'
    },
    {
      xtype: 'numberfield',
      fieldLabel: 'Precio',
      name: 'precio'
    }
  ],
  listeners: {
    activate: 'onFormActivate'
  },

  onFormActivate: function(component, eOpts) {
    var item = component.header.title.text;
    if(component.action === 'ADD') {
      component.setTitle('Nueva ' + item);
    }
    else if(component.action === 'EDIT') {
      component.setTitle('Editar ' + item);
    }
    else {
      component.setTitle(item);
    }
  }

});