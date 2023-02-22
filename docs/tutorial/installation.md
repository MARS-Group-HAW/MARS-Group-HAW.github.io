---
sidebar_position: 2
sidebar_label: Installation
---

# Installation

The MARS framework is written in C#/.NET, so you need to install the [.NET-SDK](https://dotnet.microsoft.com/en-us/download) on your computer to develop MARS models.

The easiest way is to install [JetBrains Rider](https://www.jetbrains.com/rider/) as an Integrated Development Environment (IDE). This will handle the installation of .NET for you and give an easy way to execute and debug your models. Though a license is required for using Rider, which is [free for students](https://www.jetbrains.com/community/education/#students).


## NuGet Packages

The MARS framework is organized in [NuGet packages](https://www.nuget.org/packages/Mars.Life.Simulations/). To install the framework in your application, use the public `nuget` feed from Microsoft and make your you app is compatible with `netstandard2.0`.

The runtime system is available as a public NuGet package and can simply be added to your project using the `dotnet` CLI with:

```bash
dotnet add package Mars.Life.Simulations
```

Or if you are using an IDE:

- For Visual Studio, right-click on the **References** item in your solution folder, and select **Manage NuGet Packages**.
- For JetBrains Rider, click on NuGet package management below.

Search for `Mars.Life.Simulations` and select <kbd>Install</kbd>.

