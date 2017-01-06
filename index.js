#! /usr/local/bin/node
var orbis = process.env['PS4_ORBIS_RUN_PATH'] ||'C:\\Program Files (x86)\\SCE\\ORBIS\\Tools\\Target Manager Server\\bin\\orbis-run.exe';
var vm_name = process.env['PS4_VM_NAME'] || 'Win10';
var spawn = require('child_process').spawn;
var exec = require('child_process').execSync;

// Get shared folder mount data
var share_folder_name = 'SharedFolderNameMachineMapping1';
var share_folder_path = 'SharedFolderPathMachineMapping1';
var cmd = "VBoxManage showvminfo 'Win10' --machinereadable | grep {value} | cut -d'=' -f 2";

var execFn = str => exec(cmd.replace('{value}', str), { encoding: 'utf8' }).replace(/"/g, '').trim();
var sfn = execFn(share_folder_name);
var sfp = execFn(share_folder_path);

// Build file path
var executable = process.cwd().replace(sfp, '//VBOXSVR/' + sfn) + '/lithium_ps4.self';
executable = executable.replace(/\//g, '\\\\');

var child = spawn('VBoxManage', [
  'guestcontrol',
  '--username', process.env['PS4_LAUNCH_USER'],
  '--password', process.env['PS4_LAUNCH_PASS'],
  vm_name, 'run', '--exe', orbis, '--', 'orbis-run', executable
]);

child.stdout.on( 'data', data => {
    console.log( `stdout: ${data}` );
});

child.stderr.on( 'data', data => {
    console.log( `stderr: ${data}` );
});

child.on( 'close', code => {
    console.log( `child process exited with code ${code}` );
});

