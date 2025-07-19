import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, ArrowRight, Check, X, Eye, EyeOff, Globe, Palette, Monitor, MapPin, Users, Calendar, Zap, Sparkles, Instagram, Facebook, Linkedin, Mail, Phone, MessageCircle, Code, PenTool, Lightbulb, Target, Rocket, DollarSign, Clock, Shield, Info } from 'lucide-react'
import './App.css'

// Import assets
import heroMockup from './assets/hero-composite-mockup.png'
import painPointIcons from './assets/pain-point-icons.png'
import serviceIcons from './assets/service-feature-icons.png'
import entrepreneur1 from './assets/entrepreneur-1.jpg'
import entrepreneur2 from './assets/entrepreneur-2.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('')
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
    package: ''
  })

  // Service descriptions data
  const serviceDescriptions = {
    'Website Copywriting': {
      price: '$150/page',
      what: 'Polished, professional copy for your Home, About, Services, FAQ, or Contact page — custom-tailored to your brand voice.',
      whatYouGet: [
        'One full webpage (up to ~400–600 words)',
        'Clear, modern, and conversion-friendly tone',
        'SEO-conscious without being robotic',
        'Written to sound like you, not a template'
      ],
      turnaround: '48–72 hours per page',
      whyWorthIt: 'Your website is your first impression. Let\'s make it sound like someone you\'d trust with your money.'
    },
    'Landing Page Copy': {
      price: '$250',
      what: 'Longform, high-converting copy designed to sell one thing really well — a product, app, course, or service.',
      whatYouGet: [
        'Full landing page (~800–1,200 words)',
        'Hook, story, problem/solution, features, social proof, CTA',
        'Tailored to your audience\'s pain and goals'
      ],
      turnaround: '3–4 days',
      whyWorthIt: 'You only launch once. Get copy that converts — not just fills space.'
    },
    'Pitch Deck Copy Only': {
      price: '$300',
      what: 'Crisp, smart copy for 10–12 slides that explain and sell your startup or idea to investors, partners, or press.',
      whatYouGet: [
        'Full slide text (Problem, Solution, Market, Traction, Team, Vision, Ask)',
        'Clear storytelling + investor-minded positioning',
        'Delivered in a clean doc or slide notes'
      ],
      turnaround: '3–5 days',
      whyWorthIt: 'Don\'t sound like a TED Talk. Sound like someone who\'s been in the dirt.'
    },
    'Pitch Deck (Copy + Design)': {
      price: '$500',
      what: 'Your full pitch deck — written, designed, and delivered ready to present.',
      whatYouGet: [
        'All pitch deck copy (see above)',
        'Clean, modern design (Google Slides or Canva)',
        'Optional brand touch (color/font selection)'
      ],
      turnaround: '4–6 days',
      whyWorthIt: 'A polished, professional deck tells people you\'re serious — even if you\'re just starting.'
    },
    'Blog Post (SEO or storytelling)': {
      price: '$150',
      what: 'A 1,000–1,500 word blog post that teaches, ranks, or connects — written in a natural, readable tone.',
      whatYouGet: [
        'One long-form post',
        'SEO keyword targeting if needed',
        'Story-driven if you want brand voice + trust',
        'Call-to-action suggestions'
      ],
      turnaround: '2–3 days',
      whyWorthIt: 'Blogs aren\'t dead. Bad blogs are. Get one worth sharing.'
    },
    'Video Script (1–2 min)': {
      price: '$100',
      what: 'Scriptwriting for short videos — explainer, promo, skit, or social. Written for clarity and rhythm.',
      whatYouGet: [
        '1 full-length script (60–90 seconds)',
        'Includes visual cues, voice tone, and flow',
        'Can be skit-style, animated explainer, or emotional/educational'
      ],
      turnaround: '2 days',
      whyWorthIt: 'Every second counts on screen. Let\'s make them feel it.'
    },
    'Social Media Thread (10-tweet)': {
      price: '$75',
      what: 'A 10-tweet thread that teaches, tells a story, or builds your brand — written to get engagement.',
      whatYouGet: [
        '10 connected tweets with hooks and flow',
        'Optimized for retweets and replies',
        'Can be educational, story-driven, or promotional'
      ],
      turnaround: '24–48 hours',
      whyWorthIt: 'Threads build your audience. Good threads build your business.'
    },
    'Single Social Banger': {
      price: '$25',
      what: 'One killer social media post (X/LinkedIn) designed to get attention, engagement, or clicks.',
      whatYouGet: [
        'One polished post with hook and CTA',
        'Platform-optimized (X or LinkedIn)',
        'Written for your voice and goals'
      ],
      turnaround: '24 hours',
      whyWorthIt: 'Sometimes you just need one post that hits. Let\'s make it count.'
    },
    'MVP Planning + AI Prompt Package': {
      price: '$200',
      what: 'Strategic planning doc + AI prompts to help you build your MVP faster and smarter.',
      whatYouGet: [
        'MVP scope and feature prioritization',
        'Technical approach recommendations',
        'Custom AI prompts for development',
        'Timeline and milestone suggestions'
      ],
      turnaround: '2–3 days',
      whyWorthIt: 'Don\'t build the wrong thing. Plan it right, then build it fast.'
    },
    'Custom MVP Build (50–60% built with Replit & AI)': {
      price: '$500',
      what: 'A working MVP built with modern tools — functional, testable, and ready to iterate on.',
      whatYouGet: [
        'Full backend logic + working frontend',
        'Validated and testable',
        'Ready to hand off or launch',
        'Built with Replit & AI for speed'
      ],
      turnaround: '5–7 days',
      whyWorthIt: 'Get to market fast with something that actually works.'
    },
    'Brand Name + Tagline Combo': {
      price: '$100',
      what: 'A memorable brand name + tagline that positions you clearly in the market.',
      whatYouGet: [
        '3–5 name options with rationale',
        'Matching tagline for each',
        'Domain availability check',
        'Trademark guidance'
      ],
      turnaround: '2–3 days',
      whyWorthIt: 'Your name is your first impression. Make it memorable.'
    },
    'Logo (AI-guided + refined)': {
      price: '$150',
      what: 'A clean, professional logo created with AI tools and refined by human design sense.',
      whatYouGet: [
        'Primary logo + variations',
        'Multiple file formats (PNG, SVG, etc.)',
        'Basic usage guidelines',
        'Color and black/white versions'
      ],
      turnaround: '2–3 days',
      whyWorthIt: 'Look professional from day one without designer prices.'
    },
    'Logo + Brand Kit (colors/fonts)': {
      price: '$250',
      what: 'Complete visual identity — logo, colors, fonts, and basic guidelines.',
      whatYouGet: [
        'Everything from Logo package above',
        'Color palette (primary + secondary)',
        'Font recommendations',
        'Simple brand guidelines doc'
      ],
      turnaround: '3–4 days',
      whyWorthIt: 'Consistent branding builds trust. This gives you everything to stay consistent.'
    },
    'Creative Skit Ideas (3-pack)': {
      price: '$50',
      what: '3 creative video/content concepts that showcase your product or service in an engaging way.',
      whatYouGet: [
        '3 detailed skit concepts',
        'Setup, conflict, resolution for each',
        'Platform recommendations (TikTok, Instagram, etc.)'
      ],
      turnaround: '1–2 days',
      whyWorthIt: 'Stand out with content that entertains while it sells.'
    },
    'Naming a Weird Thing': {
      price: '$50',
      what: 'Need to name a feature, product, or service that doesn\'t fit normal categories? I\'ll figure it out.',
      whatYouGet: [
        '3–5 name options',
        'Rationale for each choice',
        'Positioning suggestions'
      ],
      turnaround: '1–2 days',
      whyWorthIt: 'Sometimes the weird thing becomes the memorable thing.'
    },
    'Content Strategy Pack (10 blog/social ideas)': {
      price: '$100',
      what: '10 blog or social content ideas based on your brand, audience, and goals.',
      whatYouGet: [
        'Titles, hooks, and angles',
        'Format suggestions (thread, post, video, etc.)'
      ],
      turnaround: '2 days',
      whyWorthIt: 'Never wonder what to post again.'
    },
    'One-Pager (Investor / Product / Grant)': {
      price: '$150',
      what: 'One-page document that pitches, explains, or summarizes your business or product.',
      whatYouGet: [
        'Copywriting + layout (Google Doc or Notion)',
        'Designed for pitching, sharing, or closing'
      ],
      turnaround: '2–3 days',
      whyWorthIt: 'Your idea, cleanly presented in one page that gets read.'
    },
    'SOP or Internal Doc (1–2 pages)': {
      price: '$100',
      what: 'Operational docs that teach or systematize something inside your business.',
      whatYouGet: [
        '1–2 page SOP, how-to, or guide',
        'Clear, skimmable, usable immediately'
      ],
      turnaround: '2 days',
      whyWorthIt: 'Don\'t repeat yourself. Write it once, hand it off forever.'
    }
  }

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle contact form
  const handleContactSubmit = async (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `New Inquiry: ${formData.package || 'General Inquiry'}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Business: ${formData.business}
Package: ${formData.package || 'General Inquiry'}

Message:
${formData.message}
    `.trim()
    
    const mailtoLink = `mailto:josh@tenlifecreatives.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
    
    // Reset form and close modal
    setFormData({ name: '', email: '', phone: '', business: '', message: '', package: '' })
    setShowContactModal(false)
    setSelectedPackage('')
  }

  // Handle package selection
  const handlePackageSelect = (packageName, price) => {
    setSelectedPackage(packageName)
    setFormData(prev => ({ ...prev, package: `${packageName} - ${price}` }))
    setShowContactModal(true)
  }

  // Handle service info click
  const handleServiceInfo = (serviceName) => {
    setSelectedService(serviceDescriptions[serviceName])
    setShowServiceModal(true)
  }

  // Handle service selection from modal
  const handleServiceSelect = (serviceName, price) => {
    setShowServiceModal(false)
    handlePackageSelect(serviceName, price)
  }

  // Handle main CTA buttons
  const handleGetStarted = () => {
    setSelectedPackage('Starter Brand Kit')
    setFormData(prev => ({ ...prev, package: 'Starter Brand Kit - $1,500' }))
    setShowContactModal(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <span className="text-xl font-bold text-slate-800">Starter Brand Kit</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('social')} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Social</button>
              <button onClick={() => scrollToSection('alacarte')} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">À La Carte</button>
              <button onClick={() => scrollToSection('pricing')} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Pricing</button>
              <button onClick={() => scrollToSection('faq')} className="text-slate-600 hover:text-blue-600 transition-colors font-medium">FAQ</button>
              <Button onClick={handleGetStarted} className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
                <button onClick={() => { scrollToSection('services'); setIsMenuOpen(false); }} className="block px-3 py-2 text-slate-600 hover:text-blue-600">Services</button>
                <button onClick={() => { scrollToSection('social'); setIsMenuOpen(false); }} className="block px-3 py-2 text-slate-600 hover:text-blue-600">Social</button>
                <button onClick={() => { scrollToSection('alacarte'); setIsMenuOpen(false); }} className="block px-3 py-2 text-slate-600 hover:text-blue-600">À La Carte</button>
                <button onClick={() => { scrollToSection('pricing'); setIsMenuOpen(false); }} className="block px-3 py-2 text-slate-600 hover:text-blue-600">Pricing</button>
                <button onClick={() => { scrollToSection('faq'); setIsMenuOpen(false); }} className="block px-3 py-2 text-slate-600 hover:text-blue-600">FAQ</button>
                <Button onClick={() => { handleGetStarted(); setIsMenuOpen(false); }} className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <Rocket className="w-4 h-4 mr-1" />
              Launch Your Business in 7-10 Days
            </Badge>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Look Legit.<br />
              <span className="text-blue-600">Get Clients.</span><br />
              Launch Fast.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              A complete brand identity, professional website, and Google Business setup—done-for-you. 
              Everything you need to start attracting clients and growing your business today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                onClick={handleGetStarted}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4"
              >
                Get Started for $1,500
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center text-orange-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="font-medium">Only 2 spots open this week</span>
              </div>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-8 text-slate-600">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <img src={entrepreneur1} alt="Client" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src={entrepreneur2} alt="Client" className="w-8 h-8 rounded-full border-2 border-white" />
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">+12</div>
                </div>
                <span className="text-sm">Trusted by 50+ entrepreneurs</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={heroMockup} 
              alt="Brand Kit Mockup" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Starting a business is hard.<br />
              Looking professional shouldn't be.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">"My logo looks like I made it in Word."</h3>
              <p className="text-slate-600">Amateur designs hurt your credibility before you even get a chance to prove yourself.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">"I still don't have a website."</h3>
              <p className="text-slate-600">Without a professional online presence, potential clients question your legitimacy.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">"Nobody can find me on Google."</h3>
              <p className="text-slate-600">Being invisible online means missing out on local customers actively searching for your services.</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-slate-700 max-w-4xl mx-auto">
              That's why we created the <strong>Starter Brand Kit</strong>—to give ambitious entrepreneurs a clean, credible foundation that gets you noticed, trusted, and paid.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              One Flat Price. Zero Guesswork.<br />
              Everything You Need.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three essential pillars to launch your business with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">🎨 Brand Starter Kit</h3>
                <ul className="text-left space-y-3 text-slate-600 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom logo (icon + wordmark) <em>OR logo refresh if you have one</em></span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional fonts + color palette</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete brand guide PDF</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>5 ready-to-use Canva templates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">🌐 Professional Website</h3>
                <ul className="text-left space-y-3 text-slate-600 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Mobile-optimized, custom-built</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Home, About, Services, Contact pages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional copy written for you</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Booking/contact form included</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">📍 Google Business Setup</h3>
                <ul className="text-left space-y-3 text-slate-600 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Verified Google Business Profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>SEO-optimized description + services</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Hours, location, contact optimized</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional photos uploaded</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Packages */}
      <section id="social" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">Social Media Packages</h2>
            <p className="text-xl text-slate-600">Ready-to-post content that keeps your brand active and engaging</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Mini Social Pack</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">$500</div>
                <p className="text-slate-600 mb-6">For clients who want a strong start without the overwhelm</p>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>12 branded social posts (3 per week for 4 weeks)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Image + caption for Instagram/Facebook</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>1 platform cover image</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Editable Canva files</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePackageSelect('Mini Social Pack', '$500')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Add Mini Pack
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-400 hover:border-purple-600 transition-colors relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                Most Popular
              </Badge>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Full Content Kickstart</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">$750</div>
                <p className="text-slate-600 mb-6">For clients who want to show up every single day</p>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>30 branded social posts (1 per day for 4 weeks)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Promotional, educational, testimonial & CTA content</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cover photos for 2 platforms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>IG highlight icons (up to 5)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Scheduling tutorial or template</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePackageSelect('Full Content Kickstart', '$750')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Add Kickstart Pack
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Social Engine Pro</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">$1,000</div>
                <p className="text-slate-600 mb-6">Full plug-and-play system that keeps your socials humming</p>
                <ul className="space-y-3 text-slate-600 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>60 total posts (30 + 30 variations = 2 months)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Alternative captions & formats included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cover images for all major platforms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Highlight icons + 2 bonus reels templates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Done-for-you scheduling setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>PDF calendar for VA handoff</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePackageSelect('Social Engine Pro', '$1,000')}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Add Pro Pack
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-slate-600">
              <strong>Perfect add-on:</strong> Social packages work seamlessly with your new brand identity
            </p>
          </div>
        </div>
      </section>

      {/* À La Carte Section */}
      <section id="alacarte" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-600 text-white border-orange-500">
              <Zap className="w-4 h-4 mr-1" />
              For Solo Founders & Indie Hackers
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              No retainers. No fluff.<br />
              <span className="text-orange-400">No agency markup.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Just real work — fast, cheap, and good. All handcrafted by one experienced founder who's been in the trenches.
            </p>
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-6 max-w-4xl mx-auto shadow-lg">
              <p className="text-lg">
                <span className="text-orange-400 font-semibold">"You don't need a full team.</span> You need one person who can build, write, and ship for less."
              </p>
            </div>
          </div>

          {/* Writing & Copy */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-400">✍️ Writing & Copy</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Website Copywriting', price: '$150/page' },
                { name: 'Landing Page Copy', price: '$250' },
                { name: 'Pitch Deck Copy Only', price: '$300' },
                { name: 'Pitch Deck (Copy + Design)', price: '$500' },
                { name: 'Blog Post (SEO or storytelling)', price: '$150' },
                { name: 'Video Script (1–2 min)', price: '$100' },
                { name: 'Social Media Thread (10-tweet)', price: '$75' },
                { name: 'Single Social Banger', price: '$25' }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer group relative shadow-lg"
                  onClick={() => handleServiceInfo(service.name)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 group-hover:text-white transition-colors">{service.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400 font-semibold">{service.price}</span>
                      <Info className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MVP Building */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-400">🛠 MVP Building</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div 
                className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-4 hover:border-green-500 transition-colors cursor-pointer group shadow-lg"
                onClick={() => handleServiceInfo('MVP Planning + AI Prompt Package')}
              >
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 group-hover:text-white transition-colors">MVP Planning + AI Prompt Package</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 font-semibold">$200</span>
                    <Info className="w-4 h-4 text-slate-500 group-hover:text-green-400 transition-colors" />
                  </div>
                </div>
              </div>
              <div 
                className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-4 hover:border-green-500 transition-colors cursor-pointer group shadow-lg"
                onClick={() => handleServiceInfo('Custom MVP Build (50–60% built with Replit & AI)')}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">Custom MVP Build (50–60% built with Replit & AI)</span>
                    <p className="text-sm text-slate-500 mt-1">Full backend logic + working frontend. Validated. Testable. Ready to hand off or launch.</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <span className="text-green-400 font-semibold">$500</span>
                    <Info className="w-4 h-4 text-slate-500 group-hover:text-green-400 transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Branding & Creative */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-400">🎨 Branding & Creative</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Brand Name + Tagline Combo', price: '$100' },
                { name: 'Logo (AI-guided + refined)', price: '$150' },
                { name: 'Logo + Brand Kit (colors/fonts)', price: '$250' },
                { name: 'Creative Skit Ideas (3-pack)', price: '$50' },
                { name: 'Naming a Weird Thing', price: '$50' }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-4 hover:border-purple-500 transition-colors cursor-pointer group shadow-lg"
                  onClick={() => handleServiceInfo(service.name)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 group-hover:text-white transition-colors">{service.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-purple-400 font-semibold">{service.price}</span>
                      <Info className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy & Ops */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-orange-400">📈 Strategy & Ops</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Content Strategy Pack (10 blog/social ideas)', price: '$100' },
                { name: 'One-Pager (Investor / Product / Grant)', price: '$150' },
                { name: 'SOP or Internal Doc (1–2 pages)', price: '$100' }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg p-4 hover:border-orange-500 transition-colors cursor-pointer group shadow-lg"
                  onClick={() => handleServiceInfo(service.name)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 group-hover:text-white transition-colors">{service.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-400 font-semibold">{service.price}</span>
                      <Info className="w-4 h-4 text-slate-500 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NOT OFFERED ON PURPOSE */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-700 rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-bold text-red-400 mb-4">❌ NOT OFFERED ON PURPOSE:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-slate-300">
                <div>
                  <p>❌ Email funnels</p>
                  <p>❌ SEO audits</p>
                  <p className="italic">Anything I wouldn't buy myself.</p>
                </div>
                <div>
                  <p>❌ Resumes / Cover letters</p>
                  <p>❌ Ads</p>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {[
              { icon: Rocket, title: 'Solo founders', subtitle: 'Building the next big thing' },
              { icon: Code, title: 'Indie hackers', subtitle: 'Shipping fast and lean' },
              { icon: Users, title: 'Non-technical operators', subtitle: 'Need execution, not excuses' },
              { icon: Sparkles, title: 'Creators launching products', subtitle: 'Ready to monetize' },
              { icon: DollarSign, title: 'Budget-conscious entrepreneurs', subtitle: 'Maximum value, minimum waste' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <Button 
              onClick={() => handlePackageSelect('Custom Quote', 'Custom')}
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-slate-400 mt-4">Fast turnaround • Transparent pricing • Strategic, not templated</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by ambitious entrepreneurs nationwide</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-slate-200">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-slate-700 mb-6">
                  "This saved me months of time and thousands of dollars. I went from feeling like an amateur to having a business that looks like it's been around for years."
                </blockquote>
                <div className="flex items-center">
                  <img src={entrepreneur1} alt="Sarah Chen" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold text-slate-900">Sarah Chen</div>
                    <div className="text-slate-600">Marketing Consultant</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200">
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-slate-700 mb-6">
                  "I was getting passed over for projects because I didn't look professional. Now I'm booking clients at 3x my old rates."
                </blockquote>
                <div className="flex items-center">
                  <img src={entrepreneur2} alt="Marcus Rodriguez" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold text-slate-900">Marcus Rodriguez</div>
                    <div className="text-slate-600">Freelance Designer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Perfect for:</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">First-time entrepreneurs</h3>
                <p className="text-slate-600">Ready to turn your idea into a real business</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Local service providers</h3>
                <p className="text-slate-600">Contractors, consultants, and service professionals</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Freelancers going full-time</h3>
                <p className="text-slate-600">Ready to scale beyond side-hustle status</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-orange-200 hover:border-orange-400 transition-colors">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Anyone tired of DIY'ing</h3>
                <p className="text-slate-600">Done with amateur-looking materials</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-slate-700">
              You bring the hustle—we'll make you look like a pro.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              <span className="text-blue-600">$1,500</span> flat
            </h2>
            <p className="text-xl text-slate-600">No upsells, no hourly rates, no B.S.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-400 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                Most Popular
              </Badge>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter Brand Kit</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$1,500</div>
                <p className="text-slate-600 mb-8">Everything you need to launch</p>
                <Button 
                  onClick={handleGetStarted}
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4"
                >
                  Claim Your Spot
                </Button>
                <p className="text-sm text-orange-600 font-medium">2 spots left this week</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="mb-4">
                  <span className="text-slate-600">Want more?</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro Launch Kit - $2,500</h3>
                <ul className="text-left space-y-2 text-slate-600 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>+ Multi-page website</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>+ Business cards + email signature</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>+ Full hosting + tech setup</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => handlePackageSelect('Pro Launch Kit', '$2,500')}
                  variant="outline" 
                  size="lg" 
                  className="w-full border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Learn More About Pro Kit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">You might be wondering...</h2>
          </div>

          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">How long does it take?</h3>
                <p className="text-slate-600">Usually 7–10 business days from intake to launch. We'll keep you updated every step of the way.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">What if I don't have anything yet?</h3>
                <p className="text-slate-600">Perfect! We'll help you from scratch. No logo? No domain? No problem. We've got you covered.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Can I update it later?</h3>
                <p className="text-slate-600">Absolutely. We build everything so it's easy to maintain and update. You own everything—no ongoing fees.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            You don't need to build everything yourself.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You just need to look the part, get found, and start making money.
          </p>
          <Button 
            onClick={handleGetStarted}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-4 mb-4"
          >
            Let's Launch Your Business
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-blue-100">We only take 2 new clients per week</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SB</span>
                </div>
                <span className="text-xl font-bold">Starter Brand Kit</span>
              </div>
              <p className="text-slate-400">Professional branding and websites for ambitious entrepreneurs.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Brand Kit</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Website</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Google Business</button></li>
                <li><button onClick={() => scrollToSection('social')} className="hover:text-white transition-colors">Social Media</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection('alacarte')} className="hover:text-white transition-colors">À La Carte</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>hello@starterbrandkit.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Starter Brand Kit. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900">Get Started</h3>
              <button 
                onClick={() => setShowContactModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Business/Project</label>
                <input
                  type="text"
                  value={formData.business}
                  onChange={(e) => setFormData(prev => ({ ...prev, business: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {selectedPackage && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Selected Package</label>
                  <input
                    type="text"
                    value={formData.package}
                    readOnly
                    className="w-full px-3 py-2 border border-slate-300 rounded-md bg-slate-50"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Service Modal */}
      {showServiceModal && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900">Service Details</h3>
              <button 
                onClick={() => setShowServiceModal(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="mb-6">
              <div className="text-2xl font-bold text-blue-600 mb-4">{selectedService.price}</div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 mb-2">What it is:</h4>
                <p className="text-slate-600">{selectedService.what}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 mb-2">What you get:</h4>
                <ul className="space-y-2">
                  {selectedService.whatYouGet.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 mb-2">Turnaround:</h4>
                <p className="text-slate-600">{selectedService.turnaround}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-2">Why it's worth it:</h4>
                <p className="text-slate-600">{selectedService.whyWorthIt}</p>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button 
                onClick={() => handleServiceSelect(Object.keys(serviceDescriptions).find(key => serviceDescriptions[key] === selectedService), selectedService.price)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => setShowServiceModal(false)}
                variant="outline" 
                className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

