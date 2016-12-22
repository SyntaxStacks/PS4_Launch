# PS4 Launch

launch application from CLI to PS4 Test Kit

## Prerequisites

1. VirtualBox needs to be installed and Windows Guest VM with PS4 dependencies needs to be created
2. Export guest vm username and password

```sh
export PS4_LAUNCH_USER=<username>
export PS4_LAUNCH_PASS=<password>
```

# Usage
The following command will launch the application passed as the first argument to the PS4.
On a UNIX based system, be sure to use `\\` for the path separator.

```sh
./ps4_launch \\path\\to\\.self\\file\\on\\windows\\vm
```
