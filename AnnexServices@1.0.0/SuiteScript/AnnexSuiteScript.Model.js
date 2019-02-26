define('AnnexSuiteScript.Model'
, [
    'Models.Init'
  , 'SC.Model'
  ]
, function
  (
    CommerceAPI
  , SCModel
  )
{

  'use strict';

  return SCModel.extend({
    name: 'AnnexSuiteScript'

  , get: function (id,n)
    {
      var page=id;

      try {
        // var request = 
                 // nlapiLogExecution('DEBUG', 'ID', JSON.stringify(id));
// var page  = request.getParameter("page")
          var columns=[];
columns.push(new nlobjSearchColumn('custrecord_annexcloud_siteid'));
columns.push(new nlobjSearchColumn('custrecord_annexcloud_templateid'));
columns.push(new nlobjSearchColumn('custrecord_page_id_product'));
columns.push(new nlobjSearchColumn('custrecord_page_id_category'));
columns.push(new nlobjSearchColumn('custrecord_page_id_home'));
columns.push(new nlobjSearchColumn('custrecord_access_token'));

var results=nlapiSearchRecord('customrecord_annexcloud', null, ['internalid','anyof',1], columns);
var data={};
data.siteId=results[0].getValue('custrecord_annexcloud_siteid');//  4487980;
data.templateId=results[0].getValue('custrecord_annexcloud_templateid') ;//254;
data.accesstoken = results[0].getValue('custrecord_access_token');
// data.page=id;
// data.test="test";
if(page=='pdp'){
data.pageId = results[0].getValue('custrecord_page_id_product') ;
}else if(page=='category'){
data.pageId = results[0].getValue('custrecord_page_id_category') ;

}else{
  data.pageId = results[0].getValue('custrecord_page_id_home') ;

}
                return JSON.stringify(data);
      } catch (e) {
          nlapiLogExecution('DEBUG', 'Error In SuiteScript', JSON.stringify(e));
      }
    }

  , update: function (id, data)
    {
      return JSON.stringify(data)
    }

  , create: function (data)
    {
      return null
    }

  , remove: function (id)
    {
      return null
    }
  })
});
