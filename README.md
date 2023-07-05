# Traver Mobile App
- This app is a travel app, is built by React Native.
## 🏃 Quick Setup

1. Setup [Android](#android)
2. Setup [iOS](#ios)
3. Clone repo and `make setup`

### Yarn

With node (and by extension, npm) installed, you simply:

```sh
npm install -g yarn
```

### React Native

Facebook recommends using `watchman` for watching changes in the filesystem

```sh
brew install watchman
```

For more info see https://reactnative.dev/docs/environment-setup

## Firebase
This app use Firebase as backend.
### Set up

#### android
- Download the google-services.json at Firebase console. 
- Place it inside of your project at the following location: `/android/app/google-services.json`.
#### ios
- Download `GoogleService-Info.plist` file.
- Using Xcode, open the projects /ios/{projectName}.xcodeproj file (or /ios/{projectName}.xcworkspace if using Pods).
- Add file into `ios` folder directory

See more info: https://rnfirebase.io/


## INSTALL DEPENDENCIES AND RUN
### Install libraries
```
$ yarn
$ cd ios
$ pod install

```
### Run on ios devices or simulators
```
$ yarn ios 
```
### Run on android
```
$ yarn android
```