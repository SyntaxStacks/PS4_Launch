VBoxManage guestcontrol --username $PS4_LAUNCH_USER --password $PS4_LAUNCH_PASS "Win10" \
run --exe \
"C:\\Program Files (x86)\\SCE\\ORBIS\\Tools\\Target Manager Server\\bin\\orbis-run.exe" -- orbis-run $1

