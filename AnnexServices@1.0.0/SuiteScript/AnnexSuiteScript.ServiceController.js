define('AnnexSuiteScript.ServiceController'
, [
    'Application'
  , 'ServiceController'
  , 'AnnexSuiteScript.Model'
  ]
, function
  (
    Application
  , ServiceController
  , Model
  )
{
  'use strict';

  return ServiceController.extend({
    name: 'AnnexSuiteScript.ServiceController'

  , get: function ()
    {
            var id = this.request.getParameter('id');  
            var n =  this.request.getParameter('n');  
            return Model.get(id,n)
    }
  })
});
