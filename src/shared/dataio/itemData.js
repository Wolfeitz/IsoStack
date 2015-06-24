
{/*https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux*/}
module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();  //careful with this line
    localStorage.setItem('product', JSON.stringify([
      {"NIIN":"015126362","NSN":"2040-01-512-6362","NAME":"MONITORING SYSTEM,RESERVOIR","HMIC":"N","ESDC":"A","ENAC":null,"FSC":"2040","HMIC_Description":"There is no data in the HMIRS and the NSN is in an FSC not generally suspected of containing hazardous materials.","ESDC_Description":"No known Electrostatic Discharge (ESD) or Electromagnetic Interference (EMI) sensitivity","FSC_Description":"2040 - Marine Hardware and Hull Items","NCB":"01","INC":"77777","CNTXREF":2,"CONT":null,"MRC_3445":null,"REQUIRE_TE":null,"DECODED_CH":null,"PMIC":null,"CRITICALITY":null,"ADPE":null,"DEML":null,"DEML_Description":null,"PMIC_Description":null,"Criticality_Description":null,"ADPE_Description":null,"Country":"United States","ENAC_Description":"","Story_Short":null,"Story_Long":"National Stock Number (NSN) 2040-01-512-6362, or NIIN 015126362, (monitoring system,reservoir) was assigned September 5, 2003 in the Federal Logistics Information System (FLIS).   This NSN does not replace any other NSNs. There are 2 manufacture part numbers associated with this NSN. None of the associated part number(s) are considered obsolete. The manufacture part numbers were originally supplied by one supplier. Today, one supplier is listed as an Active supplier for this NSN. Of the active suppliers, only one supplier is deemed design controlled or valid supply parts.  This part number has not been procured by the US Government in over 5 years.     This NSN is assigned to Item Name Code (INC) 77777. This item does not have a nuclear hardened feature or any other critical feature such as tolerance, fit restriction or application. There is no data in the HMIRS and the NSN is in an FSC not generally suspected of containing hazardous materials. NSN 2040015126362 does not contain precious metals. This information was last updated on Dec 01, 2014."}
    ]));
  }

};