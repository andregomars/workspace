FROM microsoft/dotnet
WORKDIR /ConsoleApp
COPY project.json .
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o out
ENTRYPOINT ["dotnet", "out/ConsoleApp.dll"]
