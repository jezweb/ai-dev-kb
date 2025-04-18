# Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day32.md
Language: markdown

## Snippet: Creating File Shares in Azure Storage Account
Description: Steps to create file shares within an Azure storage account, which provide SMB2.1 and 3.0 file sharing capabilities.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day32.md#2025-04-17_snippet_1
Language: markdown

```markdown
![](Images/Day32_Cloud6.png)

This will provide SMB2.1 and 3.0 file shares in Azure. 

Useable within the Azure and externally via SMB3 and port 445 open to the internet. 

Provides shared file storage in Azure. 

Can be mapped using standard SMB clients in addition to REST API.
```

## Snippet: Azure Cache for Redis Overview
Description: Introduction to Azure Cache for Redis, its features, and use cases as an in-memory data store.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day32.md#2025-04-17_snippet_4
Language: markdown

```markdown
![](Images/Day32_Cloud10.png)

Azure Cache for Redis provides an in-memory data store based on the Redis software. 

- It is an implementation of the open-source Redis Cache. 
    - A hosted, secure Redis cache instance.
    - Different tiers are available
    - Application must be updated to leverage the cache. 
    - Aimed for an application that has high read requirements compared to writes. 
    - Key-Value store based.
```

## Snippet: Azure Cosmos DB Features
Description: Explanation of Azure Cosmos DB's key features, including global distribution, consistency models, and supported APIs.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day32.md#2025-04-17_snippet_3
Language: markdown

```markdown
![](Images/Day32_Cloud9.png)

Azure Cosmos DB is a scheme agnostic NoSQL implementation. 

99.99% SLA 

Globally distributed database with single-digit latencies at the 99th percentile anywhere in the world with automatic homing. 

Partition key leveraged for the partitioning/sharding/distribution of data. 

Supports various data models (documents, key-value, graph, column-friendly)

Supports various APIs (DocumentDB SQL, MongoDB, Azure Table Storage and Gremlin)
```

## Snippet: Creating Azure Storage Account via Portal
Description: Instructions for creating a storage account using the Azure Portal, including naming conventions and redundancy options.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day32.md#2025-04-17_snippet_0
Language: markdown

```markdown
![](Images/Day32_Cloud1.png)

We can then run through the steps to create our storage account remembering that this name needs to be unique and it also needs to be all lower case, no spaces but can include numbers. 

![](Images/Day32_Cloud2.png)

We can also choose the level of redundancy we would like against our storage account and anything we store within here. The further down the list the more expensive option but also the spread of your data.
```

## Snippet: Azure SQL Database Options
Description: Overview of Azure SQL Database configuration options, including single database and elastic pool setups.
Source: https://github.com/MichaelCade/90DaysOfDevOps/blob/main/2022/ja/Days/day32.md#2025-04-17_snippet_2
Language: markdown

```markdown
![](Images/Day32_Cloud7.png)

Azure SQL Database provides a relational database as a service based on Microsoft SQL Server. 

This is SQL running the latest SQL branch with database compatibility level available where specific functionality version is required. 

There are a few options on how this can be configured, we can provide a single database that provides one database in the instance, while an elastic pool enables multiple databases that share a pool of capacity and collectively scale.
```