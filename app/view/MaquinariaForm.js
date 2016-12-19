/*
 * File: app/view/MaquinariaForm.js
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

Ext.define('MyApp.view.MaquinariaForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.maquinariaform',

  requires: [
    'MyApp.view.LotesFormViewModel15',
    'Ext.container.Container',
    'Ext.button.Button',
    'Ext.form.field.Text'
  ],

  viewModel: {
    type: 'maquinariaform'
  },
  itemId: 'form',
  scrollable: true,
  bodyPadding: 10,
  title: 'Maquinaria',
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
            var formWrapper = this.up('#form');
            if(formWrapper.getForm().isValid()) {
              f_crud.save_form(formWrapper);
            }
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
      xtype: 'textfield',
      fieldLabel: 'Codigo',
      name: 'codigo',
      allowBlank: false,
      blankText: 'Este campo es obligatorio',
      editable: false
    },
    {
      xtype: 'textfield',
      fieldLabel: 'Nombre',
      name: 'nombre',
      allowBlank: false,
      blankText: 'Este campo es obligatorio'
    }
  ],
  listeners: {
    activate: 'onFormActivate'
  },

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
  }

});