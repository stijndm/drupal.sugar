// lookup
// Various lookup functions

var textContext = require('text_action_context').textContext;
var TextRecipe = require('text_recipe').TextRecipe;

// exports.main is your primary function
exports.main = function(site) {
  var url = 'http://drupal.org';
  var value = textContext.getFirstSelection().string();
  
  //search drupal.org
  if (site == "d" && value != '') {
    url = "http://drupal.org/search/apachesolr_search/" + escape(value);
  }
  
  if (site == "a") {
    if (value) {
      url = "http://api.drupal.org/api/search/6/" + escape(value);
    }
    else {
      url = "http://api.drupal.org/api/drupal/6";
    }
  }
  
  system.log("[Drupal.sugar] Open url: " + url);
  NSWorkspace.sharedWorkspace.openURL(NSURL.URLWithString(url));
  return true;
} 