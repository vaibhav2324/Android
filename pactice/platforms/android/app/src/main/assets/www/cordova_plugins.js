cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-first-plugin.CustomPlugin",
      "file": "plugins/cordova-plugin-first-plugin/www/CustomPlugin.js",
      "pluginId": "cordova-plugin-first-plugin",
      "clobbers": [
        "cordova.plugins.CustomPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-first-plugin": "0.0.1"
  };
});