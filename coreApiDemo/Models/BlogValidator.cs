using FluentValidation;

namespace coreApiDemo.Models
{
  public class BlogValidator: AbstractValidator<Blog>
  {
    public BlogValidator()
    {
      RuleFor(blog => blog.BlogId)
        .GreaterThan(0)
        .WithErrorCode("E1001")
        .WithMessage("Blog ID has to be positive");
      
      RuleFor(blog => blog.Url)
        .NotEmpty()
        .Matches("newegg.com")
        // .EmailAddress()
        // .When(blog => blog.Url.Contains("@"))
        .WithErrorCode("E1002")
        .WithMessage("Url can not be empty and gotta have newegg.com");
    }
  }
}