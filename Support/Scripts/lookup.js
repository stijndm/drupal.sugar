// lookup
// Various lookup functions

var textContext = require('text_action_context').textContext;
var TextRecipe = require('text_recipe').TextRecipe;

// exports.main is your primary function
exports.main = function(site) {
  system.log(site);
  system.print(textContext);
  system.print(textContext.getFirstSelection().value());
} 