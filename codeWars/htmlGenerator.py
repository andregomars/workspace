class HTMLGen(object):

  def comment(self, s):
      return '<!--{}-->'.format(s)
  
  def __getattr__(self, name):
      return lambda s: '<{0}>{1}</{0}>'.format(name, s)
'''
	def a(self, v):
		return "<a>%s</a>" % (v)
	def b(self, v):
		return "<b>%s</b>" % (v)
	def p(self, v):
		return "<p>%s</p>" % (v)
	def body(self, v):
		return "<body>%s</body>" % (v)
	def div(self, v):
		return "<div>%s</div>" % (v)
	def span(self, v):
		return "<span>%s</span>" % (v)
	def title(self, v):
		return "<title>%s</title>" % (v)
	def comment(self, v):
		return "<!--%s-->" % (v)

g=HTMLGen()
print g.a("hello")
print g.body("hello")
print g.comment("hello")
'''
