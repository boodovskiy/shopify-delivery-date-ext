import {register} from "@shopify/web-pixels-extension";

register(({ analytics, browser, init, settings }) => {
    // Bootstrap and insert pixel script tag here
    console.log('alex pixel')
    // Sample subscribe to page view
    analytics.subscribe('all_events', (event) => {
      console.log('Page viewed', event);
    });
});
