/*
 * File: app/model/Insumos.js
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

Ext.define('MyApp.model.Insumos', {
  extend: 'Ext.data.Model',

  requires: [
    'Ext.data.field.String',
    'Ext.data.field.Number'
  ],

  aliasSQL: 'articulos',
  identifier: {
    type: 'uuid'
  },

  fields: [
    {
      type: 'int',
      aliasSQL: 'cod_articulo',
      name: 'codigo'
    },
    {
      type: 'string',
      name: 'descripcion'
    },
    {
      type: 'string',
      name: 'estado_registro'
    },
    {
      type: 'int',
      name: 'id'
    },
    {
      type: 'int',
      sincronizar: false,
      name: 'uid'
    },
    {
      type: 'float',
      aliasSQL: 'precio_compra',
      name: 'precio'
    },
    {
      type: 'string',
      aliasSQL: 'uni_medida',
      name: 'um'
    },
    {
      type: 'int',
      name: 'cod_rubro'
    },
    {
      type: 'int',
      aliasSQL: 'carencia',
      name: 'dias_carencia'
    }
  ]
});