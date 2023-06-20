# Traver Mobile App
- This app is a travel app, is built by React Native.

## 🏃 Quick Setup

1. Setup [Android](#android)
2. Setup [iOS](#ios)
3. Clone repo and `make setup`

## 📦 Prerequisites

To contribute to this project you will need to prepare your environment with some dependencies.

There is a setup script available from the Makefile for your convenience to check and setup your system:

```sh
make setup
```

> Note that the setup script will warn if `code` is note available in the shell.
> You are free to ignore that warning and use any IDE / code editor you prefer, although Visual Studio Code is recommended.

If you are missing any prerequisite libraries, the script will exit and they will be listed out.

You can provide these libraries however you prefer but it is recommended to go through the following steps to have a consistent developer experience.

### Android

<details>
<summary><strong>Android Studio</strong></summary>

1. You will need to download a copy of [Android Studio](https://developer.android.com/studio) for your system.

2. Once that is installed, open it and click **More Actions > SDK Manager**

3. Go to **SDK Tools** tab and click:

- [x] Android SDK Command-line Tools (latest)
- [x] Android Emulator
- [x] Android SDK Platform-Tools

4. You will also need to add the following exports to your `.bash_profile` (or `.zshrc`) to expose android tools to the shell

```sh
export ANDROID_AVD_HOME=$HOME/.android/avd
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export ANDROID_HOME=$HOME/Library/Android/sdk

export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

5. [optional] Add `studio` command-line launcher

- Launch Android Studio and click **Open**
- Navigate to `dc-mobile/android` and open the project folder
- Click **Tools > Create Command-line Launcher** and **OK**
- You can now open the Android project using `yarn studio`

6. Configure an Android emulator for debugging

- Launch Android Studio and click **More Actions > Virtual Device Manager**
- Delete the existing Devices **If any exist**
- Click create device
- Accept the recommended devide and system images or pick one that suits your testing
- In the verify configuration screen, click advanced settings and set the following;
  - RAM : 2048 MB
  - VM Heam : 512 MB
  - Internal Storage : 4096 MB
  - SD Card - Studio Managed : 4096 MB
- Click Finish
- Running `yarn android` will use this configured emulator and boot correctly. If you have storage installation issues, you need to increase the amount of internal storage on the device.

Any issues see the Android section under https://reactnative.dev/docs/environment-setup

</details>

<details>
<summary><strong>Java 11</strong></summary>

Java version 8 is also required to support Android development in React Native.

Easiest way to get that is with Homebrew:

```sh
brew install java11
```

Any issues see the Android section under https://reactnative.dev/docs/environment-setup

</details>

### iOS

<details>
<summary><strong>Xcode</strong></summary>

1. Download [Xcode from the App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12) and open it
2. Accept the license agreement
3. Go to **Preferences > Locations**
4. Click **Command Line Tools** dropdown and select `Xcode 13.2` (or whatever version you have installed)

Any issues see the iOS section under https://reactnative.dev/docs/environment-setup

</details>

### Ruby

Ruby is best installed with a version manager. [Rbenv](https://github.com/rbenv/rbenv) is a very solid solution for that

<details>
<summary>Setup rbenv</summary>

```sh
brew install rbenv
rbenv init

# Verify the install is successful
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash


# Install ruby version for project
rbenv install
```

</details>

### Pod

Cocoapods is used to manage ios dependencies. With ruby installed you can simply:

```sh
gem install cocoapods
```

### Node

Similar to ruby, you will need a version manager for node. [NVM](https://github.com/nvm-sh/nvm) does the job very well.

<details>
<summary>Setup NVM</summary>

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reload your shell and install node version for the project
nvm install
```

</details>

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

## RUN

```
yarn ios 
yarn android
```