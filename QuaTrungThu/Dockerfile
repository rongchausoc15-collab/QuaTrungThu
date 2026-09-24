FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["QuaTrungThu/QuaTrungThu.csproj", "QuaTrungThu/"]
RUN dotnet restore "QuaTrungThu/QuaTrungThu.csproj"

COPY . .
WORKDIR "/src/QuaTrungThu"
RUN dotnet publish "QuaTrungThu.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

ENV ASPNETCORE_HTTP_PORTS=8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "QuaTrungThu.dll"]