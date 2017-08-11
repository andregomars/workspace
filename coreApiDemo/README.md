# [RESTful API Best Practices and Common Pitfalls](https://medium.com/@schneidenbach/restful-api-best-practices-and-common-pitfalls-7a83ba3763b5)


### Semantic Best Practices 

1. Think nouns, not verbs.
1. Respect the change management process. Avoid introducing break changes to existing endpoints that people are using.
1. Be consistent. That means with HTTP status codes, general API structure, accepted best practices, etc.
1. Consider versioning.
1. KISS
1. Document, document, document.

### Technical best practices
1. Use DTOs to move data back and forth.
1. Validate everything.
1. Keep your controllers as thin as possible. Enforce separation of concerns. Separation of concerns means things are testable.
1. Use async/await if at all possible.
* CPU Bound applications
* I/O Bound applications
* Cancellable applications





### References


[How Raygun increased throughput by 2,000% with .NET Core (over Node.js)](https://raygun.com/blog/increased-throughput-net-core/)

[.NET Core MVC Thread Pool: Sequential vs Async Performance](https://caleblloyd.com/software/net-core-mvc-thread-pool-vs-async/)

[Async Programming : Introduction to Async/Await on ASP.NET](https://msdn.microsoft.com/en-us/magazine/dn802603.aspx)