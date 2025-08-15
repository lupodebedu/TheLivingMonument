"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import {
  Thermometer,
  Droplets,
  Sun,
  Beaker,
  Activity,
  Camera,
  Download,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"

// Mock data generator for demonstration
const generateMockData = () => {
  const now = new Date()
  const data = []

  for (let i = 23; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000)
    data.push({
      time: time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      timestamp: time.toISOString(),
      externalTemp: 18 + Math.random() * 8 + Math.sin(i * 0.5) * 3,
      waterTemp: 20 + Math.random() * 4 + Math.sin(i * 0.3) * 2,
      pH: 6.0 + Math.random() * 1.0,
      tds: 800 + Math.random() * 400,
      lightLevel1: 300 + Math.random() * 200 + Math.sin(i * 0.8) * 100,
      lightLevel2: 280 + Math.random() * 180 + Math.sin(i * 0.7) * 90,
      lightLevel3: 320 + Math.random() * 220 + Math.sin(i * 0.9) * 110,
      lightLevel4: 290 + Math.random() * 190 + Math.sin(i * 0.6) * 95,
    })
  }
  return data
}

export default function MonitoringDashboard() {
  const { t } = useLanguage()
  const [data, setData] = useState(generateMockData())
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [isLive, setIsLive] = useState(true)

  // Simulate real-time updates
  useEffect(() => {
    if (!isLive) return

    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData.slice(1)]
        const now = new Date()
        const latest = prevData[prevData.length - 1]

        newData.push({
          time: now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
          timestamp: now.toISOString(),
          externalTemp: latest.externalTemp + (Math.random() - 0.5) * 2,
          waterTemp: latest.waterTemp + (Math.random() - 0.5) * 1,
          pH: Math.max(5.5, Math.min(7.0, latest.pH + (Math.random() - 0.5) * 0.2)),
          tds: Math.max(600, Math.min(1400, latest.tds + (Math.random() - 0.5) * 50)),
          lightLevel1: Math.max(0, latest.lightLevel1 + (Math.random() - 0.5) * 30),
          lightLevel2: Math.max(0, latest.lightLevel2 + (Math.random() - 0.5) * 25),
          lightLevel3: Math.max(0, latest.lightLevel3 + (Math.random() - 0.5) * 35),
          lightLevel4: Math.max(0, latest.lightLevel4 + (Math.random() - 0.5) * 28),
        })

        return newData
      })
      setLastUpdate(new Date())
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [isLive])

  const currentData = data[data.length - 1]

  const exportData = () => {
    const csvContent = [
      "timestamp,external_temp,water_temp,ph,tds,light_level_1,light_level_2,light_level_3,light_level_4",
      ...data.map(
        (row) =>
          `${row.timestamp},${row.externalTemp.toFixed(2)},${row.waterTemp.toFixed(2)},${row.pH.toFixed(2)},${row.tds.toFixed(0)},${row.lightLevel1.toFixed(0)},${row.lightLevel2.toFixed(0)},${row.lightLevel3.toFixed(0)},${row.lightLevel4.toFixed(0)}`,
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `hydroponic_data_${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{t.monitoring.title}</h1>
            <p className="text-muted-foreground">{t.monitoring.subtitle}</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isLive ? "bg-green-500" : "bg-red-500"}`} />
              <span className="text-sm text-muted-foreground">
                {isLive ? t.monitoring.status.online : t.monitoring.status.offline}
              </span>
            </div>
            <Button variant="outline" size="sm" onClick={() => setIsLive(!isLive)}>
              {isLive ? "Pause" : "Resume"}
            </Button>
            <Button variant="outline" size="sm" onClick={exportData}>
              <Download className="h-4 w-4 mr-2" />
              {t.monitoring.actions.exportData}
            </Button>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t.monitoring.metrics.extTemp}</p>
                  <p className="text-2xl font-bold text-foreground">{currentData?.externalTemp.toFixed(1)}°C</p>
                </div>
                <Thermometer className="h-8 w-8 text-chart-1" />
              </div>
              <div className="mt-4">
                <Progress value={(currentData?.externalTemp || 0) * 2.5} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Range: 15-35°C</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t.monitoring.metrics.waterTemp}</p>
                  <p className="text-2xl font-bold text-foreground">{currentData?.waterTemp.toFixed(1)}°C</p>
                </div>
                <Droplets className="h-8 w-8 text-chart-2" />
              </div>
              <div className="mt-4">
                <Progress value={(currentData?.waterTemp || 0) * 3.33} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Optimal: 18-24°C</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t.monitoring.metrics.ph}</p>
                  <p className="text-2xl font-bold text-foreground">{currentData?.pH.toFixed(2)}</p>
                </div>
                <Beaker className="h-8 w-8 text-chart-3" />
              </div>
              <div className="mt-4">
                <Progress value={((currentData?.pH || 0) - 5) * 50} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Target: 5.5-6.5</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{t.monitoring.metrics.tds}</p>
                  <p className="text-2xl font-bold text-foreground">{currentData?.tds.toFixed(0)} ppm</p>
                </div>
                <Activity className="h-8 w-8 text-chart-4" />
              </div>
              <div className="mt-4">
                <Progress value={(currentData?.tds || 0) / 20} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">Range: 800-1200 ppm</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Temperature Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Thermometer className="h-5 w-5 text-primary mr-2" />
                {t.monitoring.sections.environmental}
              </CardTitle>
              <CardDescription>External and water temperature over 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis domain={["dataMin - 2", "dataMax + 2"]} />
                  <Tooltip
                    formatter={(value: number, name: string) => [
                      `${value.toFixed(1)}°C`,
                      name === "externalTemp" ? "External" : "Water",
                    ]}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="externalTemp"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    name="External Temp"
                  />
                  <Line
                    type="monotone"
                    dataKey="waterTemp"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                    name="Water Temp"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* pH and TDS Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Beaker className="h-5 w-5 text-primary mr-2" />
                {t.monitoring.sections.water}
              </CardTitle>
              <CardDescription>pH levels and total dissolved solids</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis yAxisId="left" domain={[5, 7]} />
                  <YAxis yAxisId="right" orientation="right" domain={[600, 1400]} />
                  <Tooltip
                    formatter={(value: number, name: string) => [
                      name === "pH" ? value.toFixed(2) : `${value.toFixed(0)} ppm`,
                      name === "pH" ? "pH Level" : "TDS",
                    ]}
                  />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="pH"
                    stroke="hsl(var(--chart-3))"
                    strokeWidth={2}
                    name="pH Level"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="tds"
                    stroke="hsl(var(--chart-4))"
                    strokeWidth={2}
                    name="TDS (ppm)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Light Levels and Webcam */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Light Levels Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sun className="h-5 w-5 text-primary mr-2" />
                {t.monitoring.sections.lighting}
              </CardTitle>
              <CardDescription>Light intensity at different tower positions</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip
                    formatter={(value: number, name: string) => [
                      `${value.toFixed(0)} lux`,
                      `Position ${name.slice(-1)}`,
                    ]}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="lightLevel1"
                    stackId="1"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.6}
                    name="Position 1"
                  />
                  <Area
                    type="monotone"
                    dataKey="lightLevel2"
                    stackId="2"
                    stroke="hsl(var(--chart-2))"
                    fill="hsl(var(--chart-2))"
                    fillOpacity={0.6}
                    name="Position 2"
                  />
                  <Area
                    type="monotone"
                    dataKey="lightLevel3"
                    stackId="3"
                    stroke="hsl(var(--chart-3))"
                    fill="hsl(var(--chart-3))"
                    fillOpacity={0.6}
                    name="Position 3"
                  />
                  <Area
                    type="monotone"
                    dataKey="lightLevel4"
                    stackId="4"
                    stroke="hsl(var(--chart-4))"
                    fill="hsl(var(--chart-4))"
                    fillOpacity={0.6}
                    name="Position 4"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Webcam Feed */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="h-5 w-5 text-primary mr-2" />
                {t.monitoring.sections.webcam}
              </CardTitle>
              <CardDescription>Real-time webcam feed of the hydroponic system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Live Webcam Feed"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm text-muted-foreground">Live Feed {t.monitoring.status.active}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{lastUpdate.toLocaleTimeString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 text-primary mr-2" />
              {t.monitoring.sections.system}
            </CardTitle>
            <CardDescription>Current operational status and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Water Pump</p>
                  <p className="text-sm text-green-600 dark:text-green-400">{t.monitoring.status.optimal}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">LED Lighting</p>
                  <p className="text-sm text-green-600 dark:text-green-400">{t.monitoring.status.active}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-200">pH Adjustment</p>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">{t.monitoring.status.warning}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Sensors</p>
                  <p className="text-sm text-green-600 dark:text-green-400">{t.monitoring.status.online}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Data Logging</p>
                  <p className="text-sm text-green-600 dark:text-green-400">{t.monitoring.status.active}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Network</p>
                  <p className="text-sm text-green-600 dark:text-green-400">{t.monitoring.status.online}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
