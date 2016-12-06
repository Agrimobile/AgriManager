/*
 * File: app/model/Actividades.js
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

Ext.define('MyApp.model.Actividades', {
  extend: 'Ext.data.Model',

  requires: [
    'Ext.data.field.String',
    'Ext.data.field.Integer',
    'Ext.data.field.Date'
  ],

  identifier: 'uuid',

  fields: [
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
      name: 'uid'
    },
    {
      type: 'int',
      name: 'codigo'
    },
    {
      type: 'string',
      name: 'nombre'
    },
    {
      type: 'date',
      field_alias: 'fecha_desde',
      name: 'desde'
    },
    {
      type: 'date',
      field_alias: 'fecha_hasta',
      name: 'hasta'
    }
  ]
});