---
sidebar_position: 7
title: Twitter
---

Twitter provider can be used for both authentication and integration. In this section you learn about the steps to add providers of type Twitter to your project.

## Authentication

In order to give your users the option to sign up/in in your application with Twitter, follow these steps:

1. Start the wizard for creating a Provider to get the callback URL (the URL your users will be redirected to after successful authentication with Twitter)
2. Create a Twitter OAuth application
3. Finish the wizard you started in step 1 with the credentials created in step 2

### Get the callback URL
- Go to https://admin.dotenx.com and login to your DoTenX account
- Go to Builder Studio and select your project
- Navigate to Providers section
- Click on `New Provider`
- Enter your provider name (e.g: twitter_login)
- Select Twitter as provider type
- Copy your user management callback url (e.g: https://api.dotenx.com/user/management/project/YOUR_PROJECT_TAG/provider/YOUR_PROVIDER_NAME/callback)
### Create Twitter OAuth Application
- Go to https://developer.twitter.com.
- Click on Sign in at the top right to log in.
- Click on `+ Create Project`.
- Enter your project name, click Next.
- Select your use case, click Next.
- Enter a description for your project, click Next.
- Enter a name for your app, click Complete.
- Copy and save your API Key (this is your `client_id`).
- Copy and save your API Secret Key (this is your `client_secret`).
- At the bottom, under Next, setup your App click the link enable 3rd party authentication.
- Under App Settings, click on the gear icon next to your app name to go to App Settings.
- At the bottom, next to Authentication settings, click Edit.
- Turn Enable 3-legged OAuth ON.
- Turn Request email address from users ON.
- Paste your Callback URL. (that was copied in the last step of `Create DoTenX Provider (part 1)`)
- Enter your Website URL.
- Enter your Terms of service URL.
- Enter your Privacy policy URL.
- Click Save.
### Use the Twitter application credentials
- Back to add DoTenX Provider tab
- Paste Key of your Twitter application (`client_id`) in `Key` field.
- Paste Secret Key of your Twitter application (`client_secret`) in `Secret` field.
- Enter your front-end url that your users will redirect here (with his/her tokens as query parameter) when they was authenticated by Twitter
- Add this two scopes in `Scopes` field (`tweet.read`, `users.read`)
- Click on Add Provider
### Test functionality
- Click on name of your DoTenX Provider to see details
- Copy url that prepared for your user management (e.g: https://api.dotenx.com/user/management/project/YOUR_PROJECT_TAG/provider/YOUR_PROVIDER_NAME/authorize)
- Paste this url in new tab and give access to your Twitter app.
- You should redirect to your front-end url with some query parameters.
- Finally if all thing is good you should see your twitter account on `user management` section on DoTenX. 