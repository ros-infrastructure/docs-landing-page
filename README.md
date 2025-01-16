# Landing Page for docs.ros.org

This is a static landing page for docs.ros.org. This page has multiple goals, in order of importance

* Allow users to select the documentation for their active ROS Distro.
* Provide helpful information on the ROS community (Q&A, events, etc).
* Provide a simplified guide for REP-2000.
* Point to legacy ROS documentation.

## Testing Your Changes

To test your changes run the following command:

`python3 -m http.server `

The page should appear at `localhost:8000` in your web browser. 

## Notification Banner

To enable the notification banner find `<!-- Desktop banner-->` in the `index.html` source and uncomment the section. 
