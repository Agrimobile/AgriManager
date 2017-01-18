/*
 * File: app/view/InsumosForm.js
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

Ext.define('MyApp.view.InsumosForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.insumosform',

  requires: [
    'MyApp.view.LotesFormViewModel11',
    'Ext.container.Container',
    'Ext.button.Button',
    'Ext.form.field.Number',
    'Ext.form.field.ComboBox'
  ],

  viewModel: {
    type: 'insumosform'
  },
  cls: 'form',
  itemId: 'form',
  scrollable: true,
  bodyPadding: 10,
  title: 'Insumos',
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
      fieldLabel: 'Descripcion',
      name: 'descripcion',
      allowBlank: false,
      blankText: 'Este campo es obligatorio'
    },
    {
      xtype: 'numberfield',
      fieldLabel: 'Precio',
      name: 'precio',
      allowBlank: false,
      blankText: 'Este campo es obligatorio'
    },
    {
      xtype: 'textfield',
      fieldLabel: 'Unidad de Medida',
      name: 'um',
      allowBlank: false,
      blankText: 'Este campo es obligatorio'
    },
    {
      xtype: 'numberfield',
      fieldLabel: 'Dias de Carencia',
      name: 'dias_carencia',
      allowBlank: false,
      blankText: 'Este campo es obligatorio'
    },
    {
      xtype: 'container',
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      items: [
        {
          xtype: 'combobox',
          itemId: 'fieldRubro',
          width: '80%',
          fieldLabel: 'Rubro',
          name: 'cod_rubro',
          allowBlank: false,
          blankText: 'Este campo es obligatorio. Puedes agregar nuevos rubros ingresando en el item Rubros del menu principal',
          displayField: 'descripcion',
          forceSelection: true,
          queryMode: 'local',
          store: 'Rubros',
          valueField: 'codigo'
        },
        {
          xtype: 'button',
          handler: function(button, e) {
            /*var formWrapper = this.up('#form');
            if(formWrapper.getForm().isValid()) {
            f_crud.save_form(formWrapper);
            }*/

            var pantalla = Ext.create('MyApp.view.RubrosPanel');
            pantalla.fireEvent("render",pantalla);
            f_crud.form_open(pantalla,'ADD');
          },
          margins: '',
          margin: '0 10',
          width: '10%',
          iconCls: 'x-fa fa-plus',
          text: ''
        }
      ]
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