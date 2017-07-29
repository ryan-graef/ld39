EventTracking = {
    /*  
     * Log an event to the Google Analytics page.  It will be listed under the "Game Name", 
     * which is configured in the Config.js config file.
     * PARAMETERS: 
     *   action - {String} - the event action this event is classified as.  Examples might be
     *                       "death" or "beat level".
     *   label - {String} - The description of the action.  This should provide more specific
     *                      information about what caused the action. Example: "death" and "on
     *                      level 1".
     */
    logEvent: function(action, label){
        ga('send', 'event', Config.name + " v" + Config.version + (isDev() ? "dev" : ""), action, label);
    }
}