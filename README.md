# Online ATM 
This system is build using Express.js as back end and React.js as front end. 

All interaction between back end and front end is done via API calls. 

## Installation 
### Dependencies outside of package.json 
* yarn
* NodeJS 

#### Back end installation
From root folder run `yarn` 

#### Front end installation
From client folder run `yarn` 

## Notes 
If getting `"Node.JS: Getting error : [nodemon] Internal watch failed: watch ENOSPC"` in Linux (possibly MacOS but not tested) run 
`echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` from the terminal.
