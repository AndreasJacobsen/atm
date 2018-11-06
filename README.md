# Online ATM

This system is build using Express.js as back end and React.js as front end.

All interaction between back end and front end is done via API calls.

### Notice
This project was done as part of a school assignment, it is in not secure or robust enough to use in *any* production enviourment, please only use this for learning. 

## Installation

### Dependencies outside of package.json

- yarn
- NodeJS

#### Back end installation

From root folder run `yarn`

#### Front end installation

From client folder run `yarn`

## Running instrucions

Client and back end can run independantly and will both function on their own, how ever front end would get no data from the back end. It is a good idea to run both front end and back end at the same time, this can be done manually by running client and back end or use the included concurrency script in this project. To run the entire project, from root of this project in terminal run

`yarn dev`, see `package.json` in project root folder for more scripts.

## API points

To show form data from whidtdrawal navigate to
`http://localhost:5000/api/showFormData`

## Notes

If getting `"Node.JS: Getting error : [nodemon] Internal watch failed: watch ENOSPC"` in Linux (possibly MacOS but not tested) run
`echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p` from the terminal.
