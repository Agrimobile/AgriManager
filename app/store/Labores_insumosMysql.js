/*
 * File: app/store/Labores_insumosMysql.js
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

Ext.define('MyApp.store.Labores_insumosMysql', {
  extend: 'Ext.data.Store',

  requires: [
    'MyApp.model.Labores_insumos',
    'Ext.data.proxy.Ajax',
    'Ext.data.reader.Json'
  ],

  config: {
    sql: 'select id, id_labores,cod_insumo, cantidad, dosis, cod_deposito from labores_insumos'
  },

  constructor: function(cfg) {
    var me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'Labores_insumosMysql',
      model: 'MyApp.model.Labores_insumos',
      proxy: {
        type: 'ajax',
        reader: {
          type: 'json',
          rootProperty: 'Labores_insumos'
        }
      }
    }, cfg)]);
  }
});