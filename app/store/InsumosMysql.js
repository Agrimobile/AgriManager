/*
 * File: app/store/InsumosMysql.js
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

Ext.define('MyApp.store.InsumosMysql', {
  extend: 'Ext.data.Store',

  requires: [
    'MyApp.model.Insumos',
    'Ext.data.proxy.Ajax',
    'Ext.data.reader.Json'
  ],

  config: {
    sql: 'SELECT id,cod_articulo as codigo,descripcion,precio_compra as precio,uni_medida as um,cod_rubro,carencia as dias_carencia FROM articulos'
  },

  constructor: function(cfg) {
    var me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'InsumosMysql',
      model: 'MyApp.model.Insumos',
      proxy: {
        type: 'ajax',
        reader: {
          type: 'json',
          rootProperty: 'Insumos'
        }
      }
    }, cfg)]);
  }
});