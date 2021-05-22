---
layout: layouts/post.njk
title: From Containers to Servless
description: Thoughts about moving from Containers to Servless
date: 2020-08-28
---

Pros:
* May Save Costs (must check), especially with unpredictable traffic
* Unit testing
* Scale automatically
* No Ops, just Dev
* Very modular architecture
* Event driven

Cons:
* Integration Testing: No local testing environment. Testing in Production (e.g. with preview features)
* On-Premises: Harder to deploy to Edge Devices
* No long running operations

Developer Guidance:
https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference

