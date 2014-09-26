##Overview
This example demonstrates how to use [LoopBack](http://loopback.io) with [AngularJS](http://angularjs.org/).

##Prerequisites
Before starting, makes sure you've followed [Getting Started with LoopBack](http://docs.strongloop.com/display/LB/Getting+started+with+LoopBack) to install Node and LoopBack. You will also need a basic undertsanding of LoopBack models](http://docs.strongloop.com/display/LB/Working+with+models).


##Procedure
Follow the steps below to create the application from scratch. Doing this will give you a better understanding of how to implement AngularJS as a front-end solution to LoopBack for your own app.

- Bower

Otherwise, if you just want to see the example in action, do this:
```
git clone https://github.com/strongloop/loopback-example-angular
cd loopback-example-angular
npm install
slc run
```

1. **Create the app**.

  Run `slc loopback`, and name the app `loopback-example-angular-starter`.

2. **Configure db.json**

  Edit `server/datasources.json` to look like:
  ```
  {
    "db": {
      ...
      "file": "db.json"
    }
  }
  ```

  >This allows us to persist our model instances to a JSON file. For more information, see the [memory connector documentation](http://docs.strongloop.com/display/LB/Memory+connector#Memoryconnector-Datapersistance).

3. **Create the Task model**.

  Run `slc loopback:model Task` to create the Task model. Use the (default) memory connector, 3xpose the model via REST, leave the default plural form and give it the following property:
  |Property name|Property type|Required|
  |:-:|:-:|:-:|
  |description|string|Yes|

4. **Add in a sample model**

  Run `slc run` to start the server and go to the http://localhost:3000/explorer. Add an Task instance with the following data:
  ```
  {
    "description": "Buy eggs"
  }
  ```
  
  Verify that model has been inserted by opening `db.json` (it will be created where you ran `slc run`). You should see this:
  ```
  {
    "ids": {
      "User": 1,
      "AccessToken": 1,
      "ACL": 1,
      "RoleMapping": 1,
      "Role": 1,
      "Task": 2
    },
    "models": {
      "User": {},
      "AccessToken": {},
      "ACL": {},
      "RoleMapping": {},
      "Role": {},
      "Task": {
        "1": "{\"description\":\"Buy eggs\",\"id\":1}"
      }
    }
  }
  ```
  
  >Notice the "Task" property contains the model you just created.

5. **Configure our vendor dir**

  Create `.bowerrc` in the project root with the following contents:
  ```
  {
    "directory": "client/vendor"
  }
  ```

  >By default, Bower installs packages in `bower_components`, but we want to put them into client to make the import paths nicer in `index.html`.

5. **Install our front-end dependencies**

  Run the following:
  ```
~
~

5. 
