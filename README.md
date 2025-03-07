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

## EOL Distros

EOL distro links can be set in `/js/data.js`.


## Deployment

The included `build.sh` and `deploy.sh` scripts can be used to deploy updated contents to docs.ros.org.
For contributors: After a pull request is merged, the changes will be automatically deployed and you do not need to use these files.

There is a set list of files and directories sent to the host during deployment.
See [build.sh](./build.sh) for the full list.
Update that list if you add new files or directories which need to be deployed.

To deploy changes when running locally run:
```
./build.sh
./deploy.sh
```
The script in deploy.sh assumes that your local ssh configuration or environment is set up to work with the docs host.
If not, you can customize it using the `SSH_ARGS` environment variable.

For example
```
env SSH_ARGS="-i /path/to/my/deploy-key" ./deploy.sh
```
