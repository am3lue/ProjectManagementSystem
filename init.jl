using Pkg
Pkg.activate(@__DIR__)
Pkg.instantiate()

for i in readlines(joinpath(@__DIR__, "req.txt"))
    Pkg.add(i)
end