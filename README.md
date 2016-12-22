# PS4 Launch

launch application from CLI to PS4 Test Kit

## Prerequisites

#### Configure Windows OS
0. Install VirtualBox
1. Install Windows as a guest VM
2. Ensure that your Windows User Account is password protected
> Windows → Control Panel → User Accounts → User Accounts → Manage Accounts

3. Install PS4 dependencies

#### Set Environment Variables in OSX
Add the following to `~/.bashrc`

```sh
# Guest VM username
export PS4_LAUNCH_USER=<username>

# Guest VM password
export PS4_LAUNCH_PASS=<password>

# optional:
export PS4_LAUNCH_PATH=\\VBOXSVR\code\Trilithium-PS4-SDK-2.10-344524\Samples\flickr\lithium_ps4.self
```

# Usage
The following command will launch the application passed as the first argument to the PS4.

On a UNIX based system, be sure to use `\\` for the path separator.

```sh
./ps4_launch \\path\\to\\.self\\file\\on\\windows\\vm

# if the optional PS4_LAUNCH_PATH is configured:
./ps4_launch $PS4_LAUNCH_PATH
```
