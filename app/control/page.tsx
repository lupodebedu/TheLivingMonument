"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Lightbulb,
  Droplets,
  Camera,
  Power,
  Settings,
  Clock,
  AlertTriangle,
  CheckCircle,
  Zap,
  Gauge,
  Timer,
  Pause,
  RotateCcw,
  HelpCircle,
  Info,
  Play,
} from "lucide-react"

interface ControlState {
  lights: {
    enabled: boolean
    intensity: number
    mode: string
    schedule: boolean
  }
  waterPump: {
    enabled: boolean
    flowRate: number
    mode: string
    schedule: boolean
  }
  system: {
    autoMode: boolean
    emergencyStop: boolean
  }
}

export default function ControlInterface() {
  const [controlState, setControlState] = useState<ControlState>({
    lights: {
      enabled: true,
      intensity: 75,
      mode: "auto",
      schedule: true,
    },
    waterPump: {
      enabled: true,
      flowRate: 60,
      mode: "continuous",
      schedule: false,
    },
    system: {
      autoMode: true,
      emergencyStop: false,
    },
  })

  const [lastCommand, setLastCommand] = useState<string>("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [webcamRefresh, setWebcamRefresh] = useState(0)
  const [showGettingStarted, setShowGettingStarted] = useState(true)

  // Simulate command execution
  const executeCommand = (command: string) => {
    setLastCommand(command)
    setCommandHistory((prev) => [`${new Date().toLocaleTimeString()}: ${command}`, ...prev.slice(0, 9)])
  }

  const updateLights = (field: keyof typeof controlState.lights, value: any) => {
    setControlState((prev) => ({
      ...prev,
      lights: { ...prev.lights, [field]: value },
    }))
    executeCommand(`Light ${field} set to ${value}`)
  }

  const updateWaterPump = (field: keyof typeof controlState.waterPump, value: any) => {
    setControlState((prev) => ({
      ...prev,
      waterPump: { ...prev.waterPump, [field]: value },
    }))
    executeCommand(`Water pump ${field} set to ${value}`)
  }

  const updateSystem = (field: keyof typeof controlState.system, value: any) => {
    setControlState((prev) => ({
      ...prev,
      system: { ...prev.system, [field]: value },
    }))
    executeCommand(`System ${field} set to ${value}`)
  }

  const emergencyStop = () => {
    setControlState((prev) => ({
      ...prev,
      lights: { ...prev.lights, enabled: false },
      waterPump: { ...prev.waterPump, enabled: false },
      system: { ...prev.system, emergencyStop: true },
    }))
    executeCommand("EMERGENCY STOP ACTIVATED")
  }

  const resetSystem = () => {
    setControlState({
      lights: {
        enabled: true,
        intensity: 75,
        mode: "auto",
        schedule: true,
      },
      waterPump: {
        enabled: true,
        flowRate: 60,
        mode: "continuous",
        schedule: false,
      },
      system: {
        autoMode: true,
        emergencyStop: false,
      },
    })
    executeCommand("System reset to default settings")
  }

  const refreshWebcam = () => {
    setWebcamRefresh((prev) => prev + 1)
    executeCommand("Webcam feed refreshed")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">System Control</h1>
            <p className="text-muted-foreground">Interactive control interface for hydroponic system</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Badge variant={controlState.system.autoMode ? "default" : "secondary"}>
              {controlState.system.autoMode ? "Auto Mode" : "Manual Mode"}
            </Badge>
            <Badge variant={controlState.system.emergencyStop ? "destructive" : "default"}>
              {controlState.system.emergencyStop ? "Emergency Stop" : "Normal Operation"}
            </Badge>
          </div>
        </div>

        {showGettingStarted && (
          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-primary mr-2" />
                  Getting Started - Exhibition Visitors
                </div>
                <Button variant="ghost" size="sm" onClick={() => setShowGettingStarted(false)}>
                  ×
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Try the Quick Actions</h3>
                    <p className="text-sm text-muted-foreground">
                      Start with the preset buttons below like "Growth Boost" or "Night Mode" to see immediate changes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adjust Light & Water</h3>
                    <p className="text-sm text-muted-foreground">
                      Use the sliders to control light intensity (0-100%) and water flow rate. Watch the live effects!
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Monitor Changes</h3>
                    <p className="text-sm text-muted-foreground">
                      Check the webcam feed and command history to see how your actions affect the system.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Emergency Controls */}
        {controlState.system.emergencyStop && (
          <Alert className="mb-6 border-destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Emergency stop is active. All systems are disabled. Click "Reset System" to resume normal operation.
            </AlertDescription>
          </Alert>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="h-5 w-5 text-primary mr-2" />
              System Controls
            </CardTitle>
            <CardDescription>Global system settings and emergency controls - Safe to experiment!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto Mode</p>
                  <p className="text-sm text-muted-foreground">Let the system manage itself automatically</p>
                  <div className="flex items-center mt-1">
                    <Info className="h-3 w-3 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">Recommended for beginners</span>
                  </div>
                </div>
                <Switch
                  checked={controlState.system.autoMode}
                  onCheckedChange={(value) => updateSystem("autoMode", value)}
                  disabled={controlState.system.emergencyStop}
                />
              </div>

              <Button
                variant="destructive"
                onClick={emergencyStop}
                disabled={controlState.system.emergencyStop}
                className="flex items-center justify-center"
              >
                <Power className="h-4 w-4 mr-2" />
                Emergency Stop
                <div className="ml-2 text-xs opacity-75">(Safe to try!)</div>
              </Button>

              <Button
                variant="outline"
                onClick={resetSystem}
                className="flex items-center justify-center bg-transparent"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset System
                <div className="ml-2 text-xs opacity-75">(Back to defaults)</div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Control Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Light Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="h-5 w-5 text-primary mr-2" />
                LED Lighting Control
              </CardTitle>
              <CardDescription>
                Control lighting intensity, mode, and scheduling - Plants need light to grow!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Light Power */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Light Power</p>
                  <p className="text-sm text-muted-foreground">Turn the grow lights on or off</p>
                  <div className="flex items-center mt-1">
                    <Info className="h-3 w-3 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">Plants need 12-16 hours of light daily</span>
                  </div>
                </div>
                <Switch
                  checked={controlState.lights.enabled}
                  onCheckedChange={(value) => updateLights("enabled", value)}
                  disabled={controlState.system.emergencyStop}
                />
              </div>

              <Separator />

              {/* Light Intensity */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-medium">Light Intensity</p>
                    <p className="text-sm text-muted-foreground">Brighter = faster growth, but uses more energy</p>
                  </div>
                  <Badge variant="outline">{controlState.lights.intensity}%</Badge>
                </div>
                <Slider
                  value={[controlState.lights.intensity]}
                  onValueChange={(value) => updateLights("intensity", value[0])}
                  max={100}
                  step={5}
                  disabled={!controlState.lights.enabled || controlState.system.emergencyStop}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Dim (0%)</span>
                  <span>Medium (50%)</span>
                  <span>Bright (100%)</span>
                </div>
              </div>

              <Separator />

              {/* Light Mode */}
              <div>
                <p className="font-medium mb-2">Light Mode</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Different light spectrums for different growth stages
                </p>
                <Select
                  value={controlState.lights.mode}
                  onValueChange={(value) => updateLights("mode", value)}
                  disabled={!controlState.lights.enabled || controlState.system.emergencyStop}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto (Schedule Based) - Recommended</SelectItem>
                    <SelectItem value="manual">Manual Control - Full control</SelectItem>
                    <SelectItem value="growth">Growth Phase - Blue light for leaves</SelectItem>
                    <SelectItem value="flowering">Flowering Phase - Red light for fruits</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Light Schedule */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Schedule Active</p>
                  <p className="text-sm text-muted-foreground">Automatic day/night cycle (16h on / 8h off)</p>
                  <div className="flex items-center mt-1">
                    <Info className="h-3 w-3 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">Mimics natural sunlight patterns</span>
                  </div>
                </div>
                <Switch
                  checked={controlState.lights.schedule}
                  onCheckedChange={(value) => updateLights("schedule", value)}
                  disabled={!controlState.lights.enabled || controlState.system.emergencyStop}
                />
              </div>

              {/* Light Status */}
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  {controlState.lights.enabled ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <Power className="h-4 w-4 text-red-600" />
                  )}
                  <span className="font-medium">Status: {controlState.lights.enabled ? "Active" : "Disabled"}</span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    Power Usage:{" "}
                    {controlState.lights.enabled ? (controlState.lights.intensity * 2.4).toFixed(1) : "0.0"}W
                  </p>
                  <p>Runtime Today: 12h 34m</p>
                  <p>Next Schedule: {controlState.lights.schedule ? "06:00 ON" : "Manual Control"}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Water Pump Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Droplets className="h-5 w-5 text-primary mr-2" />
                Water Pump Control
              </CardTitle>
              <CardDescription>
                Control water circulation and nutrient delivery - Plants need water and nutrients!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Pump Power */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Pump Power</p>
                  <p className="text-sm text-muted-foreground">Turn water circulation on or off</p>
                  <div className="flex items-center mt-1">
                    <Info className="h-3 w-3 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">Delivers nutrients directly to plant roots</span>
                  </div>
                </div>
                <Switch
                  checked={controlState.waterPump.enabled}
                  onCheckedChange={(value) => updateWaterPump("enabled", value)}
                  disabled={controlState.system.emergencyStop}
                />
              </div>

              <Separator />

              {/* Flow Rate */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-medium">Flow Rate</p>
                    <p className="text-sm text-muted-foreground">How fast water flows through the system</p>
                  </div>
                  <Badge variant="outline">{controlState.waterPump.flowRate}%</Badge>
                </div>
                <Slider
                  value={[controlState.waterPump.flowRate]}
                  onValueChange={(value) => updateWaterPump("flowRate", value[0])}
                  max={100}
                  min={20}
                  step={5}
                  disabled={!controlState.waterPump.enabled || controlState.system.emergencyStop}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Slow (20%)</span>
                  <span>Normal (60%)</span>
                  <span>Fast (100%)</span>
                </div>
              </div>

              <Separator />

              {/* Pump Mode */}
              <div>
                <p className="font-medium mb-2">Pump Mode</p>
                <p className="text-sm text-muted-foreground mb-3">Different watering patterns for optimal growth</p>
                <Select
                  value={controlState.waterPump.mode}
                  onValueChange={(value) => updateWaterPump("mode", value)}
                  disabled={!controlState.waterPump.enabled || controlState.system.emergencyStop}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="continuous">Continuous Flow - Always running</SelectItem>
                    <SelectItem value="interval">Interval - 15min on, 5min off</SelectItem>
                    <SelectItem value="timed">Timed Cycles - Scheduled watering</SelectItem>
                    <SelectItem value="demand">On-Demand - Water when needed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pump Schedule */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Schedule Active</p>
                  <p className="text-sm text-muted-foreground">Automated watering timing</p>
                  <div className="flex items-center mt-1">
                    <Info className="h-3 w-3 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">Prevents over/under watering</span>
                  </div>
                </div>
                <Switch
                  checked={controlState.waterPump.schedule}
                  onCheckedChange={(value) => updateWaterPump("schedule", value)}
                  disabled={!controlState.waterPump.enabled || controlState.system.emergencyStop}
                />
              </div>

              {/* Pump Status */}
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  {controlState.waterPump.enabled ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <Power className="h-4 w-4 text-red-600" />
                  )}
                  <span className="font-medium">Status: {controlState.waterPump.enabled ? "Running" : "Stopped"}</span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>
                    Flow Rate:{" "}
                    {controlState.waterPump.enabled ? (controlState.waterPump.flowRate * 0.8).toFixed(1) : "0.0"} L/min
                  </p>
                  <p>Runtime Today: 18h 12m</p>
                  <p>Total Volume Pumped: {controlState.waterPump.enabled ? "847" : "0"} L</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Webcam and Command History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Webcam Control */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="h-5 w-5 text-primary mr-2" />
                System Camera
              </CardTitle>
              <CardDescription>Live view of the hydroponic system - See your changes in real-time!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={`/placeholder.svg?height=300&width=400&query=hydroponic system live view&refresh=${webcamRefresh}`}
                  alt="Live System View"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Live Feed Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{new Date().toLocaleTimeString()}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" onClick={refreshWebcam} className="flex-1 bg-transparent">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Refresh View
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Camera className="h-4 w-4 mr-2" />
                  Take Photo
                </Button>
              </div>

              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-1">Camera Info</p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>Resolution: 1920x1080 HD</p>
                  <p>Frame Rate: 30 FPS</p>
                  <p>Night Vision: Auto-enabled</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Command History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Timer className="h-5 w-5 text-primary mr-2" />
                Command History
              </CardTitle>
              <CardDescription>Track your control actions - See what you've changed!</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {commandHistory.length === 0 ? (
                  <div className="text-center py-8">
                    <Play className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      No commands yet! Try adjusting the controls above to see your actions logged here.
                    </p>
                  </div>
                ) : (
                  commandHistory.map((command, index) => (
                    <div key={index} className="p-2 bg-muted rounded text-sm font-mono">
                      {command}
                    </div>
                  ))
                )}
              </div>

              {lastCommand && (
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium text-primary mb-1">Latest Action</p>
                  <p className="text-sm font-mono">{lastCommand}</p>
                </div>
              )}

              <div className="mt-4 flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => setCommandHistory([])} className="flex-1">
                  Clear History
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  Export Log
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 text-primary mr-2" />
              Quick Actions - Try These First!
            </CardTitle>
            <CardDescription>
              Preset control configurations for common scenarios - Perfect for beginners
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button
                variant="outline"
                className="h-24 flex flex-col items-center justify-center bg-transparent hover:bg-primary/5"
                onClick={() => {
                  updateLights("intensity", 100)
                  updateWaterPump("flowRate", 80)
                  executeCommand("Growth boost mode activated")
                }}
                disabled={controlState.system.emergencyStop}
              >
                <Gauge className="h-6 w-6 mb-2 text-primary" />
                <span className="text-sm font-medium">Growth Boost</span>
                <span className="text-xs text-muted-foreground">Max light & water</span>
              </Button>

              <Button
                variant="outline"
                className="h-24 flex flex-col items-center justify-center bg-transparent hover:bg-primary/5"
                onClick={() => {
                  updateLights("intensity", 40)
                  updateWaterPump("flowRate", 40)
                  executeCommand("Night mode activated")
                }}
                disabled={controlState.system.emergencyStop}
              >
                <Timer className="h-6 w-6 mb-2 text-primary" />
                <span className="text-sm font-medium">Night Mode</span>
                <span className="text-xs text-muted-foreground">Low light & water</span>
              </Button>

              <Button
                variant="outline"
                className="h-24 flex flex-col items-center justify-center bg-transparent hover:bg-primary/5"
                onClick={() => {
                  updateLights("intensity", 75)
                  updateWaterPump("flowRate", 60)
                  executeCommand("Standard operation mode activated")
                }}
                disabled={controlState.system.emergencyStop}
              >
                <Settings className="h-6 w-6 mb-2 text-primary" />
                <span className="text-sm font-medium">Standard</span>
                <span className="text-xs text-muted-foreground">Normal operation</span>
              </Button>

              <Button
                variant="outline"
                className="h-24 flex flex-col items-center justify-center bg-transparent hover:bg-primary/5"
                onClick={() => {
                  updateLights("enabled", false)
                  updateWaterPump("enabled", false)
                  executeCommand("Maintenance mode activated")
                }}
                disabled={controlState.system.emergencyStop}
              >
                <Pause className="h-6 w-6 mb-2 text-primary" />
                <span className="text-sm font-medium">Maintenance</span>
                <span className="text-xs text-muted-foreground">Turn everything off</span>
              </Button>
            </div>

            <div className="mt-4 p-3 bg-primary/5 rounded-lg">
              <div className="flex items-center mb-2">
                <HelpCircle className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Tip for Exhibition Visitors</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Try clicking "Growth Boost" to see maximum performance, then "Night Mode" to see the difference. Watch
                the webcam and command history to see the changes happen in real-time!
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
