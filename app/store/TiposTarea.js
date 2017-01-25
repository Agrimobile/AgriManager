/*
 * File: app/store/TiposTarea.js
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

Ext.define('MyApp.store.TiposTarea', {
  extend: 'Ext.data.Store',

  requires: [
    'Ext.data.field.String',
    'Ext.data.field.Integer'
  ],

  constructor: function(cfg) {
    var me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'TiposTarea',
      data: [
        {
          nombre: 'Maquinaria',
          valor: 'M',
          id: 1
        },
        {
          nombre: 'Riego',
          valor: 'R',
          id: 2
        },
        {
          nombre: 'Personal',
          valor: 'P',
          id: 3
        }
      ],
      fields: [
        {
          type: 'string',
          name: 'nombre'
        },
        {
          type: 'string',
          name: 'valor'
        },
        {
          type: 'int',
          name: 'id'
        }
      ]
    }, cfg)]);
  }
});