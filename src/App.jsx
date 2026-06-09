import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { LogIn } from "lucide-react";
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Home,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Shield,
  Heart,
  Users,
  Award,
  Calculator,
  MessageCircle,
  ChevronDown,
  Play,
  CheckCircle,
  TrendingUp,
  Building,
  Zap,
  Target,
  Camera
} from 'lucide-react'
import logoVertice from './assets/logo.png'
import house1 from './assets/house1.jpg'
import house2 from './assets/house2.jpg'
import house3 from './assets/house3.jpg'
import house4 from './assets/house4.jpg'
import house5 from './assets/house5.jpg'
import house6 from './assets/house6.jpg'
import './App.css'

// Componente de Partículas Flutuantes
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
      }}
      animate={{
        y: [-20, -100],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ))

  return <div className="particles-container">{particles}</div>
}

// Componente de Header Único
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logoVertice} alt="Vértice Construtora" className="h-7 w-auto" />
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Modelos', 'Galeria', 'Contato'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black hover:text-primary font-medium transition-colors relative"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="btn-accent flex items-center space-x-2"
              onClick={() => window.open('https://parceiro.verticeconstrucao.com.br/', '_blank')}
            >
              <LogIn className="w-4 h-4" />
              <span>Área do Parceiro</span>
            </Button>
          </motion.div> */}
        </div>
      </div>
    </motion.header>
  )
}

// Hero Section Único com Design Diagonal e Banner Aprimorado
const HeroSection = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero" id="início">
      <FloatingParticles />
      
      <motion.div /* style={{ y, opacity }} */ className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-2 text-sm font-semibold">
                🏠 Programa Minha Casa Minha Vida
              </Badge>
            </motion.div>

            <motion.h1
              className="text-justify md:text-left text-[55px] lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Seu Sonho da {' '}
              <span className="text-accent text-justify md:text-left">Casa&nbsp;&nbsp;Própria</span>
              <br />
              Agora ao seu{' '}
              <motion.span
                className="text-accent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Alcance!
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-ml text-white/90 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Realize o sonho da casa própria com a qualidade Vértice. 
              Casas modernas, financiamento facilitado e a melhor localização.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Button 
                size="lg" 
                className="btn-accent hover-glow group px-8 py-4 text-lg font-semibold"
              >
                <Calculator className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Simular Financiamento
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-black hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Modelos
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              {[
                { icon: Shield, text: 'Subsídio até R$ 55.000' },
                { icon: TrendingUp, text: 'Até Zero de Entrada' },
                { icon: CheckCircle, text: 'Use seu FGTS' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2 text-white/80"
                  whileHover={{ scale: 1.05, color: '#FF6B35' }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden sm:block"
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl transform rotate-6"
                animate={{ rotate: [6, -6, 6] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-6 md:mb-0"
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Extremoz em Números
                    </h3>
                    <p className="text-white/80">Sua nova casa na melhor localização</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { number: '15min', label: 'de Natal', icon: MapPin },
                      { number: '25km', label: 'do aeroporto', icon: Zap },
                      { number: '5km', label: 'das praias', icon: Heart },
                      { number: '100%', label: 'infraestrutura', icon: Building }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="text-center p-4 bg-white/10 rounded-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">{stat.number}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  )
}

// Seção MCMV com Cards Hexagonais
const MCMVSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Subsídio do Governo',
      description: 'Até R$ 55.000 de subsídio direto do governo federal para sua família',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Juros Reduzidos',
      description: 'Taxa de juros a partir de 4,25% ao ano, muito abaixo do mercado',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      title: 'Use seu FGTS',
      description: 'Utilize o FGTS como entrada ou para amortizar o financiamento',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Financiamento Longo',
      description: 'Parcelas em até 35 anos para caber no seu orçamento familiar',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="sobre">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/*
<Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Programa Minha Casa Minha Vida
          </Badge>
*/}

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher o{' '}
            <span className="text-accent">MCMV</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O programa que torna o sonho da casa própria uma realidade acessível para sua família
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="card-vertice hover-lift h-full border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Seção Extremoz com Timeline Vertical
const ExtremozSection = () => {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Viva em Extremoz: Qualidade de Vida e Localização Estratégica
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Extremoz oferece o equilíbrio perfeito entre tranquilidade e proximidade com a capital. 
                Uma cidade em crescimento com toda a infraestrutura que sua família precisa.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-accent mr-3" />
                  <span>Apenas 15 minutos de Natal</span>
                </div>
                <div className="flex items-center">
                  <Home className="w-5 h-5 text-accent mr-3" />
                  <span>Acesso às praias de Genipabu</span>
                </div>
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-accent mr-3" />
                  <span>Infraestrutura completa (escolas, hospitais, comércio)</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-accent mr-3" />
                  <span>Segurança e tranquilidade</span>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="bg-gradient-to-br from-primary to-primary rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Extremoz em Números</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">15min</div>
                    <div className="text-sm opacity-90">de Natal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">25km</div>
                    <div className="text-sm opacity-90">do aeroporto</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">5km</div>
                    <div className="text-sm opacity-90">das praias</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm opacity-90">infraestrutura</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

// Seção de Modelos com Layout Triangular
const ModelsSection = () => {
  const models = [
    {
      name: 'Modelo Compacto',
      category: 'Casa Essencial',
      area: '49m²',
      bedrooms: 2,
      bathrooms: 1,
      garage: 'Sim',
      price: 'R$ 155.000',
      financing: 'Financiamento MCMV',
      highlight: false,
      features: ['Multifamiliar', 'Cozinha americana', 'Área de serviço']
    },
    {
      name: 'Modelo Intermediário',
      category: 'Casa Confort',
      area: '49m²',
      bedrooms: '2 ',
      bathrooms: 1,
      garage: '1 vaga',
      price: 'R$ 170.000',
      financing: 'Financiamento MCMV',
      highlight: true,
      features: ['Sala ampla', 'Varanda', 'Garagem coberta', 'Quintal']
    },
    {
      name: 'Modelo Completo',
      category: 'Casa Premium',
      area: '90m²',
      bedrooms: '3 (1 suíte)',
      bathrooms: 2,
      garage: '2 vaga',
      price: 'R$ 220.000',
      financing: 'Financiamento MCMV',
      highlight: false,
      features: ['3 quartos', 'Suíte com closet', 'Área gourmet', 'Quintal amplo']
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="modelos">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        > {/*
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Nossos Modelos
          </Badge>*/}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça Nossos{' '}
            <span className="text-gradient">Modelos de Casa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projetos pensados para oferecer conforto, funcionalidade e qualidade para sua família
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${index === 1 ? 'md:-mt-8' : ''}`}
            >
              <Card className={`card-vertice hover-lift h-full ${
                model.highlight 
                  ? 'ring-2 ring-accent shadow-2xl scale-105' 
                  : 'shadow-lg'
              }`}>
                {model.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-white px-4 py-1 text-sm font-semibold">
                      Mais Vendido
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <Badge className={`mb-3 ${
                    model.category === 'Casa Essencial' ? 'bg-blue-100 text-blue-700' :
                    model.category === 'Casa Confort' ? 'bg-green-100 text-green-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {model.category}
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {model.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {model.features[0]}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Área:</span>
                      <div className="font-semibold text-gray-900">{model.area}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Quartos:</span>
                      <div className="font-semibold text-gray-900">{model.bedrooms}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Banheiros:</span>
                      <div className="font-semibold text-gray-900">{model.bathrooms}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Garagem:</span>
                      <div className="font-semibold text-gray-900">{model.garage}</div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {model.price}
                      </div>
                      <div className="text-sm text-gray-500 mb-4">
                        {model.financing}
                      </div>
                    </div>
                  </div>

                  <Button 
                    className={`w-full ${
                      model.highlight 
                        ? 'btn-accent hover-glow' 
                        : 'btn-vertice'
                    }`}
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SobreSection = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="bg-gradient-to-br from-primary to-primary rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-align-last-center">Vértice Construtora em Números</h3>
                <div className="grid grid-cols-2 gap-6">
                 {/* <div className="text-center">
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-sm opacity-90">Famílias Atendidas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">10+</div>
                    <div className="text-sm opacity-90">Anos de Experiência</div>
                  </div>*/}
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">Entregas no Prazo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">5★</div>
                    <div className="text-sm opacity-90">Avaliação Clientes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Vértice Construtora: Tradição e Qualidade
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Com anos de experiência no mercado imobiliário de Extremoz e região, a Vértice Construtora 
                se especializou em tornar o sonho da casa própria uma realidade acessível através do programa 
                Minha Casa Minha Vida.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-accent mr-3" />
                  <span>Compromisso com a qualidade e acabamento</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-accent mr-3" />
                  <span>Atendimento personalizado e humanizado</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-accent mr-3" />
                  <span>Entrega rigorosamente no prazo</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-accent mr-3" />
                  <span>Garantia e suporte pós-entrega</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

const DepoimentoSection = () => {
  return (
<section className="py-20 section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias reais de famílias que realizaram o sonho da casa própria com a Vértice
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <CardTitle className="text-primary">Maria Silva</CardTitle>
                    <CardDescription>Casa Confort - 2023</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "A Vértice tornou nosso sonho realidade! O atendimento foi excepcional e a casa 
                  foi entregue exatamente como prometido. Recomendo para todas as famílias!"
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div>
                    <CardTitle className="text-primary">João Santos</CardTitle>
                    <CardDescription>Casa Premium - 2023</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Processo muito tranquilo do início ao fim. A equipe da Vértice nos acompanhou 
                  em cada etapa. A qualidade da construção superou nossas expectativas!"
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <CardTitle className="text-primary">Ana Costa</CardTitle>
                    <CardDescription>Casa Essencial - 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Finalmente consegui minha casa própria! O programa MCMV com a Vértice foi 
                  a melhor decisão. Agora minha família tem um lar de verdade em Extremoz."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

const ContatoSection = () => {
  return (
    <section id="simulacao" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Simule seu Financiamento
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e receba uma simulação personalizada em minutos
              </p>
            </div>
            <Card className="card-hover">
              <CardContent className="p-8">
                <form className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input id="nome" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone/WhatsApp</Label>
                    <Input id="telefone" placeholder="(84) 99999-9999" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="renda">Renda Familiar</Label>
                    <Input id="renda" placeholder="R$ 0,00" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="modelo">Modelo de Casa de Interesse</Label>
                    <select className="w-full p-3 border border-input rounded-md bg-background">
                      <option value="">Selecione um modelo</option>
                      <option value="essencial">Casa Essencial - R$ 155.000</option>
                      <option value="confort">Casa Confort - R$ 170.000</option>
                      <option value="premium">Casa Premium - R$ 220.000</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                    <Textarea id="mensagem" placeholder="Conte-nos mais sobre suas necessidades..." />
                  </div>
                  <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="button" 
                      className="btn-primary flex-1"
                      onClick={() => openWhatsApp('Gostaria de fazer uma simulação de financiamento')}
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Simular Agora
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => openWhatsApp()}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Falar no WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}

const LocalizacaoSection = () => {
  return (
    <section id="contato" className="py-20 section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Onde Estamos
            </h2>
            <p className="text-lg text-muted-foreground">
              Visite nosso stand de vendas e conheça nossos projetos pessoalmente
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-primary">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <div>
                      <div className="font-semibold">Endereço</div>
                      <div className="text-muted-foreground">Av. Senador Salgado Filho, 1718 - Tirol, Natal/RN</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <div>
                      <div className="font-semibold">Celular</div>
                      <div className="text-muted-foreground">(84) 999927-0167</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-accent" />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-muted-foreground">(84) 99927-0167</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <div>
                      <div className="font-semibold">E-mail</div>
                      <div className="text-muted-foreground">contato@verticeconstrucao.com.br</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <div className="font-semibold">Horário de Funcionamento</div>
                      <div className="text-muted-foreground">Segunda a Sexta: 8h às 18h</div>
                      <div className="text-muted-foreground">Sábado: 8h às 12h</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <CardContent className="p-0 h-full">
                <div className="h-full min-h-[370px]">
                  <iframe
                    src="https://maps.google.com/maps?q=-5.702637,-35.303871&z=15&output=embed"
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </div>
          </div>
        </div>
      </section>
  )
}

const FooterSection = () => {
  return (
    <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logoVertice} alt="Vértice Construtora" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-sm opacity-90">
                Realizando sonhos e construindo o futuro das famílias através do programa Minha Casa Minha Vida.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('inicio')} className="block hover:text-accent transition-colors">
                  Início
                </button>
                <button onClick={() => scrollToSection('sobre')} className="block hover:text-accent transition-colors">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('empreendimentos')} className="block hover:text-accent transition-colors">
                  Empreendimentos
                </button>
                <button onClick={() => scrollToSection('contato')} className="block hover:text-accent transition-colors">
                  Contato
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Nossos Modelos</h4>
              <div className="space-y-2 text-sm">
                <div className="hover:text-accent transition-colors cursor-pointer">Casa Essencial</div>
                <div className="hover:text-accent transition-colors cursor-pointer">Casa Confort</div>
                <div className="hover:text-accent transition-colors cursor-pointer">Casa Premium</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm">
                {/* <div>(84) 3279-0000</div> */}
                <div>(84) 99927-0167</div>
                <div>contato@verticeconstrucao.com.br</div>
                <div>Natal/RN</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
            <p>&copy; 2024 Vértice Construtora e Incorporadora. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
  )
}

// Nova Seção de Galeria de Fotos
const GallerySection = () => {
  const images = [
    { src: house1, alt: 'Casa Modelo Essencial' },
    { src: house2, alt: 'Casa Modelo Confort' },
    { src: house3, alt: 'Casa Modelo Premium' },
    { src: house4, alt: 'Interior da Casa' },
    { src: house5, alt: 'Fachada Moderna' },
    { src: house6, alt: 'Área Externa' },
  ]

  return (
    <section className="py-20 bg-white" id="galeria">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/*<Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            Nossa Galeria
          </Badge>*/}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça Nossos{' '}
            <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a qualidade e o design das casas Vértice através de nossa galeria de fotos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-12 h-12 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold text-lg">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const openWhatsApp = (message = '') => {
  const phone = '5584999270167'; // Substitua pelo número real
  const encodedMessage = encodeURIComponent(message || 'Olá! Gostaria de saber mais sobre os imóveis da Vértice Construtora.');
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
};

// Componente principal da aplicação
function App() {
  
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <MCMVSection />
      {/* <ExtremozSection /> */}
      <ModelsSection />
      <GallerySection /> {/* Nova seção de galeria */}
      <SobreSection />
      <DepoimentoSection />
      <ContatoSection />
      <LocalizacaoSection />
      <FooterSection />
      
      {/* WhatsApp Button Flutuante */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          className="btn-accent hover-glow rounded-full w-16 h-16 shadow-2xl"
          aria-label="Falar no WhatsApp"
          onClick={() =>
            window.open('https://wa.me/5584999270167', '_blank')
          }
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </motion.div>
    </div>
  )
}

export default App

