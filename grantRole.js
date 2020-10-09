admin = db.getSiblingDB("admin")

admin.grantRolesToUser( "max", [ "root" , { role: "root", db: "admin" } ] )
