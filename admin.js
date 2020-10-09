// admin.js
admin = db.getSiblingDB("admin")
// creation of the admin user
admin.createUser(
  {
    user: "max",
    pwd: "maxPassword2020",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
// let's authenticate to create the other user
db.getSiblingDB("admin").auth("max", "maxPassword2020" )
// creation of the replica set admin user
db.getSiblingDB("admin").createUser(
  {
    "user" : "replicaAdmin",
    "pwd" : "replicaAdminPassword2020",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)
