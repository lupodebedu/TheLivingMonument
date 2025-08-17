"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import {
  Droplets,
  Leaf,
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Beaker,
  Thermometer,
  Sun,
  Wind,
  Sprout,
  BarChart3,
  Settings,
  Eye,
  MousePointer,
} from "lucide-react"

export default function HydroponicsGuide() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">{t.hydroponics.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">{t.hydroponics.subtitle}</p>
        </div>

        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <MousePointer className="h-6 w-6 text-primary mr-3" />
              {t.hydroponics.siteGuide.title}
            </CardTitle>
            <CardDescription>{t.hydroponics.siteGuide.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t.hydroponics.siteGuide.features.monitoring.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t.hydroponics.siteGuide.features.monitoring.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t.hydroponics.siteGuide.features.control.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t.hydroponics.siteGuide.features.control.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t.hydroponics.siteGuide.features.education.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t.hydroponics.siteGuide.features.education.description}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What is Hydroponics */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Leaf className="h-6 w-6 text-primary mr-3" />
              {t.hydroponics.whatIs.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t.hydroponics.whatIs.description}</p>

                <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {t.hydroponics.whatIs.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Hydroponic System Diagram"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">30-50%</p>
                    <p className="text-sm text-muted-foreground">Faster Growth</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Droplets className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">90%</p>
                    <p className="text-sm text-muted-foreground">Less Water</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hydroponic Systems Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t.hydroponics.systemTypes.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wind className="h-5 w-5 text-primary mr-2" />
                  {t.hydroponics.systemTypes.types.nft.title}
                </CardTitle>
                <CardDescription>{t.hydroponics.systemTypes.types.nft.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="NFT System"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-3">{t.hydroponics.systemTypes.types.nft.details}</p>
                <Badge variant="secondary">{t.hydroponics.systemTypes.types.nft.badge}</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Droplets className="h-5 w-5 text-primary mr-2" />
                  {t.hydroponics.systemTypes.types.dwc.title}
                </CardTitle>
                <CardDescription>{t.hydroponics.systemTypes.types.dwc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="DWC System"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-3">{t.hydroponics.systemTypes.types.dwc.details}</p>
                <Badge variant="outline">{t.hydroponics.systemTypes.types.dwc.badge}</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sprout className="h-5 w-5 text-primary mr-2" />
                  {t.hydroponics.systemTypes.types.ebbFlow.title}
                </CardTitle>
                <CardDescription>{t.hydroponics.systemTypes.types.ebbFlow.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Ebb and Flow System"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-3">{t.hydroponics.systemTypes.types.ebbFlow.details}</p>
                <Badge variant="outline">{t.hydroponics.systemTypes.types.ebbFlow.badge}</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Tower System */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Zap className="h-6 w-6 text-primary mr-3" />
              {t.hydroponics.towerSystem.title}
            </CardTitle>
            <CardDescription>{t.hydroponics.towerSystem.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">{t.hydroponics.towerSystem.components.title}</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-4">
                      <Droplets className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Nutrient Reservoir</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t.hydroponics.towerSystem.components.items.reservoir}
                      </p>
                      <Progress value={85} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">Current Level: 85%</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-4">
                      <Sun className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">LED Lighting Array</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t.hydroponics.towerSystem.components.items.lighting}
                      </p>
                      <div className="flex space-x-2">
                        <Badge variant="outline">Red: 660nm</Badge>
                        <Badge variant="outline">Blue: 450nm</Badge>
                        <Badge variant="outline">White: 5000K</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg mr-4">
                      <Thermometer className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Environmental Control</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t.hydroponics.towerSystem.components.items.controller}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Temp: 22-26°C</div>
                        <div>Humidity: 60-70%</div>
                        <div>pH: 5.5-6.5</div>
                        <div>EC: 1.2-2.0</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Vertical Tower System"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-primary">6</p>
                    <p className="text-sm text-muted-foreground">Growing Levels</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-primary">48</p>
                    <p className="text-sm text-muted-foreground">Plant Sites</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-primary">2.5m</p>
                    <p className="text-sm text-muted-foreground">Tower Height</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-primary">0.5m²</p>
                    <p className="text-sm text-muted-foreground">Footprint</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Beaker className="h-6 w-6 text-primary mr-3" />
              {t.hydroponics.howItWorks.title}
            </CardTitle>
            <CardDescription>{t.hydroponics.howItWorks.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">{t.hydroponics.howItWorks.steps.mixing.title}</h3>
                <p className="text-sm text-muted-foreground">{t.hydroponics.howItWorks.steps.mixing.description}</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">{t.hydroponics.howItWorks.steps.circulation.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.hydroponics.howItWorks.steps.circulation.description}
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">{t.hydroponics.howItWorks.steps.gravityFlow.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.hydroponics.howItWorks.steps.gravityFlow.description}
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">{t.hydroponics.howItWorks.steps.recirculation.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.hydroponics.howItWorks.steps.recirculation.description}
                </p>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">{t.hydroponics.howItWorks.advantages.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">{t.hydroponics.howItWorks.advantages.yields.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.hydroponics.howItWorks.advantages.yields.description}
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Droplets className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">{t.hydroponics.howItWorks.advantages.waterEfficiency.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.hydroponics.howItWorks.advantages.waterEfficiency.description}
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <Leaf className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">{t.hydroponics.howItWorks.advantages.yearRoundGrowing.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.hydroponics.howItWorks.advantages.yearRoundGrowing.description}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="text-center">
          <CardContent className="py-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">{t.hydroponics.cta.title}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t.hydroponics.cta.description}</p>
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
