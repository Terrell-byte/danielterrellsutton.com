"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Database, Brain, Server, Wallpaper, ChevronDown } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-slate-900 dark:text-white">Daniel Sutton</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
                  AI & Software Engineer
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                  Building intelligent
                  <span className="text-emerald-600 dark:text-emerald-400"> systems</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                  Passionate about creating scalable backend architectures and implementing cutting-edge machine
                  learning solutions that solve real-world problems.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-3 py-1">
                  Python
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  TensorFlow
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Docker
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  PostgreSQL
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  .NET
                </Badge>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg">
                  Download CV
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              {/* Background geometric shapes */}
              <div className="absolute -inset-8 opacity-20 pointer-events-none">
                <div className="absolute top-8 right-8 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-12 left-12 w-24 h-24 bg-emerald-300 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-400 rounded-full blur-xl"></div>
              </div>

              {/* Main image container */}
              <div className="relative z-10 min-h-[400px] px-8 py-8">
                <div className="relative max-w-md mx-auto">
                  <div className="relative">
                    {/* Decorative border elements */}
                    <div className="absolute -top-4 -left-4 w-full h-full border-2 border-emerald-500/30 rounded-2xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-400/20 rounded-2xl"></div>

                    {/* Image with creative masking */}
                    <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 shadow-2xl">
                      <img
                        src="/profile.png"
                        alt="Daniel Sutton - Software Engineer"
                        className="w-full h-auto object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
                        style={{
                          filter: "grayscale(100%) contrast(1.1) brightness(1.1)",
                          transition: "filter 0.5s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.filter = "grayscale(0%) contrast(1) brightness(1)"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.filter = "grayscale(100%) contrast(1.1) brightness(1.1)"
                        }}
                      />

                      {/* Accent dot */}
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <ChevronDown className="h-6 w-6 text-slate-400 animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-300">
            <p className="text-center leading-relaxed">
              I'm a dedicated software engineer specializing in backend development and machine learning. Currently
              pursuing advanced studies at Danish Technical University, I've developed expertise in building robust,
              scalable systems and implementing AI solutions that drive business value.
            </p>
            <p className="text-center leading-relaxed mt-6">
              My experience spans from designing microservices architectures to developing deep learning models for
              computer vision and NLP applications. I'm passionate about clean code, system design, and staying at the
              forefront of technological innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Technical Expertise</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-lg">Machine Learning</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2 mb-2">
                    TensorFlow
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Deepstream
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    OpenCV
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Pandas
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Backend Development</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2 mb-2">
                    Python
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    C#/.NET
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    C/C++
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    FastAPI
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    RabbitMQ
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Data & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2 mb-2">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    MariaDB
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Redis
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Docker
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Wallpaper className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <Badge variant="outline" className="mr-2 mb-2">
                    React
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Flutter
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="mr-2 mb-2">
                    ASP.NET
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">ML-Powered Stock Analyzer</CardTitle>
                    <CardDescription className="text-base">
                      Intelligent trading system using deep learning for market prediction and automated portfolio
                      management
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      Python
                    </Badge>
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      TensorFlow
                    </Badge>
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      FastAPI
                    </Badge>
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      PostgreSQL
                    </Badge>
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                      Docker
                    </Badge>
                  </div>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• LSTM networks for time series prediction with 85% accuracy</li>
                    <li>• Real-time data processing pipeline handling 10k+ events/sec</li>
                    <li>• Microservices architecture with automated deployment</li>
                    <li>• Risk management system with dynamic position sizing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">Distributed ML Platform</CardTitle>
                    <CardDescription className="text-base">
                      Scalable platform for training and deploying machine learning models across multiple cloud
                      providers
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Go</Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Kubernetes</Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">gRPC</Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Redis</Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">AWS</Badge>
                  </div>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Auto-scaling training clusters with cost optimization</li>
                    <li>• Model versioning and A/B testing framework</li>
                    <li>• Multi-cloud deployment with 99.9% uptime</li>
                    <li>• Real-time monitoring and alerting system</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">Computer Vision Pipeline</CardTitle>
                    <CardDescription className="text-base">
                      Real-time object detection and tracking system for industrial quality control applications
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Python
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      OpenCV
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      YOLO
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      Flask
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      NVIDIA GPU
                    </Badge>
                  </div>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Custom YOLO model with 95% detection accuracy</li>
                    <li>• GPU-accelerated processing at 60 FPS</li>
                    <li>• RESTful API for integration with existing systems</li>
                    <li>• Automated defect classification and reporting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">High-Performance API Gateway</CardTitle>
                    <CardDescription className="text-base">
                      Rust-based API gateway handling millions of requests with advanced rate limiting and caching
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                      Rust
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                      Tokio
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                      Redis
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                      Prometheus
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                      Docker
                    </Badge>
                  </div>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Sub-millisecond response times under high load</li>
                    <li>• Advanced rate limiting with sliding window algorithm</li>
                    <li>• Distributed caching with automatic invalidation</li>
                    <li>• Comprehensive metrics and observability</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-900 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            I'm always interested in discussing new opportunities, challenging projects, and innovative ideas. Whether
            you're looking to build scalable systems or implement cutting-edge ML solutions, let's connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2024 Daniel Sutton.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
