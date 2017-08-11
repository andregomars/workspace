USE [Blogging]
GO
/****** Object:  Table [dbo].[Blog]    Script Date: 8/10/2017 5:58:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Blog](
	[BlogId] [int] IDENTITY(1,1) NOT NULL,
	[Url] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Blog] PRIMARY KEY CLUSTERED 
(
	[BlogId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Post]    Script Date: 8/10/2017 5:58:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Post](
	[PostId] [int] IDENTITY(1,1) NOT NULL,
	[BlogId] [int] NOT NULL,
	[Content] [nvarchar](max) NULL,
	[Title] [nvarchar](max) NULL,
 CONSTRAINT [PK_Post] PRIMARY KEY CLUSTERED 
(
	[PostId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Blog] ON 

GO
INSERT [dbo].[Blog] ([BlogId], [Url]) VALUES (1, N'http://blogs.msdn.com/dotnet')
GO
INSERT [dbo].[Blog] ([BlogId], [Url]) VALUES (2, N'http://blogs.msdn.com/webdev')
GO
INSERT [dbo].[Blog] ([BlogId], [Url]) VALUES (3, N'http://blogs.msdn.com/visualstudio')
GO
SET IDENTITY_INSERT [dbo].[Blog] OFF
GO
ALTER TABLE [dbo].[Post]  WITH CHECK ADD  CONSTRAINT [FK_Post_Blog_BlogId] FOREIGN KEY([BlogId])
REFERENCES [dbo].[Blog] ([BlogId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Post] CHECK CONSTRAINT [FK_Post_Blog_BlogId]
GO
