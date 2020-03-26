cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-first-plugin/www/CustomPlugin.js",
        "id": "cordova-plugin-first-plugin.CustomPlugin",
        "pluginId": "cordova-plugin-first-plugin",
        "clobbers": [
            "cordova.plugins.CustomPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-first-plugin": "0.0.1"
}
// BOTTOM OF METADATA
});