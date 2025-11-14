(pwd() != @__DIR__) && cd(@__DIR__) # allow starting app from bin/ dir

using ProjectManagementSystem
const UserApp = ProjectManagementSystem
ProjectManagementSystem.main()
