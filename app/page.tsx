"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import {
  Leaf,
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Beaker,
  Thermometer,
  Activity,
  BarChart3,
  Settings,
  Eye,
} from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{t.home.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">{t.home.description}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 text-primary mr-2" />
                {t.home.features.monitoring.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.home.features.monitoring.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 text-primary mr-2" />
                {t.home.features.control.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.home.features.control.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 text-primary mr-2" />
                {t.home.features.education.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.home.features.education.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* System Specifications */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Zap className="h-6 w-6 text-primary mr-3" />
              {t.home.specifications.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{t.home.specifications.items.towers}</p>
                  <p className="text-sm text-muted-foreground">Vertical Growing</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{t.home.specifications.items.plants}</p>
                  <p className="text-sm text-muted-foreground">Maximum Capacity</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{t.home.specifications.items.sensors}</p>
                  <p className="text-sm text-muted-foreground">Data Collection</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{t.home.specifications.items.automation}</p>
                  <p className="text-sm text-muted-foreground">Smart Control</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{t.home.specifications.items.monitoring}</p>
                  <p className="text-sm text-muted-foreground">Continuous Tracking</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{t.home.specifications.items.control}</p>
                  <p className="text-sm text-muted-foreground">Web Interface</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Construction Documentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                {t.home.construction.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {t.home.construction.phases.map((phase, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{phase}</p>
                      <Progress value={100} className="h-2 mt-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Beaker className="h-5 w-5 text-primary mr-2" />
                {t.home.documentation.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {t.home.documentation.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 aspect-video bg-muted rounded-lg flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Construction Timelapse"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="text-center">
          <CardContent className="py-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">{t.hydroponics.cta.title}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Explore our real-time monitoring dashboard to see live data from the hydroponic system, or try the control
              interface to interact with the system components.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/monitoring">
                <Button size="lg">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t.hydroponics.cta.viewData}
                </Button>
              </Link>
              <Link href="/control">
                <Button variant="outline" size="lg">
                  <Zap className="h-4 w-4 mr-2" />
                  {t.hydroponics.cta.controlSystem}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
