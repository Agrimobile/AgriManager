/*
 * File: app/store/Menu.js
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

Ext.define('MyApp.store.Menu', {
  extend: 'Ext.data.TreeStore',

  constructor: function(cfg) {
    var me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'Menu',
      root: {
        expanded: true,
        children: [
          {
            text: 'Establecimientos',
            leaf: true,
            iconCls: 'x-fa fa-industry',
            panelClass: 'EstablecimientosPanel'
          },
          {
            text: 'Actividades',
            leaf: true,
            iconCls: 'x-fa fa-pagelines',
            panelClass: 'ActividadesPanel'
          },
          {
            text: 'Tareas',
            leaf: true,
            iconCls: 'x-fa fa-check-square-o',
            panelClass: 'TareasPanel'
          },
          {
            text: 'Contratistas',
            leaf: true,
            iconCls: 'x-fa fa-user custom-contratistas-icon-style',
            // fa-user-circle-o fa-address-card
            panelClass: 'ContratistasPanel'
          },
          {
            text: 'Insumos',
            leaf: true,
            iconCls: 'x-fa fa-cubes',
            // fa-envira
            panelClass: 'InsumosPanel'
          },
          {
            text: 'Personal',
            leaf: true,
            iconCls: 'x-fa fa-users',
            panelClass: 'PersonalPanel'
          },
          {
            text: 'Maquinaria',
            leaf: true,
            iconCls: 'x-fa fa-gears',
            panelClass: 'MaquinariaPanel'
          },
          {
            text: 'Rubros',
            leaf: true,
            iconCls: 'x-fa fa-tags',
            panelClass: 'RubrosPanel'
          },
          {
            text: 'Depositos',
            leaf: true,
            iconCls: 'x-fa fa-inbox',
            panelClass: 'DepositosPanel'
          }
        ]
      }
    }, cfg)]);
  }
});