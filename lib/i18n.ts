export type Language = "en" | "it"

export interface Translations {
  // Navigation
  nav: {
    projectOverview: string
    hydroponics: string
    monitoring: string
    control: string
  }

  // Common
  common: {
    loading: string
    error: string
    success: string
    cancel: string
    confirm: string
    save: string
    reset: string
    back: string
    next: string
    previous: string
    close: string
  }

  // Home page
  home: {
    title: string
    subtitle: string
    description: string
    features: {
      monitoring: {
        title: string
        description: string
      }
      control: {
        title: string
        description: string
      }
      education: {
        title: string
        description: string
      }
    }
    specifications: {
      title: string
      items: {
        towers: string
        plants: string
        sensors: string
        automation: string
        monitoring: string
        control: string
      }
    }
    construction: {
      title: string
      phases: string[]
    }
    documentation: {
      title: string
      items: string[]
    }
  }

  // Hydroponics page
  hydroponics: {
    title: string
    subtitle: string
    whatIs: {
      title: string
      description: string
      benefits: string[]
    }
    systemTypes: {
      title: string
      types: {
        nft: {
          title: string
          description: string
          details: string
          badge: string
        }
        dwc: {
          title: string
          description: string
          details: string
          badge: string
        }
        ebbFlow: {
          title: string
          description: string
          details: string
          badge: string
        }
      }
    }
    towerSystem: {
      title: string
      description: string
      components: {
        title: string
        items: {
          reservoir: string
          pump: string
          towers: string
          lighting: string
          sensors: string
          controller: string
        }
      }
    }
    howItWorks: {
      title: string
      description: string
      steps: {
        mixing: {
          title: string
          description: string
        }
        circulation: {
          title: string
          description: string
        }
        gravityFlow: {
          title: string
          description: string
        }
        recirculation: {
          title: string
          description: string
        }
      }
      advantages: {
        title: string
        yields: {
          title: string
          description: string
        }
        waterEfficiency: {
          title: string
          description: string
        }
        yearRoundGrowing: {
          title: string
          description: string
        }
      }
    }
    siteGuide: {
      title: string
      description: string
      features: {
        monitoring: {
          title: string
          description: string
        }
        control: {
          title: string
          description: string
        }
        education: {
          title: string
          description: string
        }
      }
    }
    cta: {
      title: string
      description: string
      viewData: string
      controlSystem: string
    }
  }

  // Monitoring page
  monitoring: {
    title: string
    subtitle: string
    sections: {
      environmental: string
      water: string
      lighting: string
      system: string
      webcam: string
    }
    metrics: {
      extTemp: string
      waterTemp: string
      ph: string
      tds: string
      lightLevel: string
      systemStatus: string
      pumpStatus: string
      lightStatus: string
    }
    status: {
      optimal: string
      warning: string
      critical: string
      offline: string
      online: string
      active: string
      inactive: string
    }
    actions: {
      exportData: string
      refreshData: string
      viewHistory: string
    }
  }

  // Control page
  control: {
    title: string
    subtitle: string
    gettingStarted: {
      title: string
      description: string
      steps: string[]
    }
    lighting: {
      title: string
      description: string
      controls: {
        power: string
        intensity: string
        schedule: string
        mode: string
      }
      modes: {
        manual: string
        auto: string
        schedule: string
      }
    }
    pumps: {
      title: string
      description: string
      controls: {
        power: string
        flowRate: string
        schedule: string
        mode: string
      }
    }
    webcam: {
      title: string
      description: string
      status: string
    }
    quickActions: {
      title: string
      actions: {
        morning: {
          title: string
          description: string
        }
        evening: {
          title: string
          description: string
        }
        maintenance: {
          title: string
          description: string
        }
        demo: {
          title: string
          description: string
        }
      }
    }
    emergency: {
      title: string
      description: string
      stopAll: string
      restart: string
    }
    commandHistory: {
      title: string
      noCommands: string
    }
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      projectOverview: "Project Overview",
      hydroponics: "Hydroponics Guide",
      monitoring: "Data Monitoring",
      control: "System Control",
    },
    common: {
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      reset: "Reset",
      back: "Back",
      next: "Next",
      previous: "Previous",
      close: "Close",
    },
    home: {
      title: "Hydroponic Tower System",
      subtitle: "Advanced Automated Growing Solution",
      description:
        "An innovative hydroponic tower system featuring automated monitoring, environmental control, and real-time data acquisition for optimal plant growth in vertical farming applications.",
      features: {
        monitoring: {
          title: "Real-time Monitoring",
          description:
            "Continuous tracking of environmental parameters, water quality, and system performance with data logging capabilities.",
        },
        control: {
          title: "Automated Control",
          description:
            "Intelligent automation of lighting, irrigation, and environmental systems with manual override capabilities.",
        },
        education: {
          title: "Educational Interface",
          description:
            "Interactive learning platform demonstrating hydroponic principles and sustainable agriculture technologies.",
        },
      },
      specifications: {
        title: "System Specifications",
        items: {
          towers: "4 Vertical Growing Towers",
          plants: "48 Plant Capacity",
          sensors: "12 Environmental Sensors",
          automation: "Full System Automation",
          monitoring: "24/7 Data Monitoring",
          control: "Remote Control Interface",
        },
      },
      construction: {
        title: "Construction Documentation",
        phases: [
          "System Design & Planning",
          "Tower Construction & Assembly",
          "Sensor Integration & Wiring",
          "Control System Programming",
          "Testing & Calibration",
          "Final Assembly & Documentation",
        ],
      },
      documentation: {
        title: "Project Documentation",
        items: [
          "Technical Specifications",
          "Construction Timelapse",
          "System Schematics",
          "Component List",
          "Assembly Instructions",
          "Maintenance Guide",
        ],
      },
    },
    hydroponics: {
      title: "Understanding Hydroponics",
      subtitle: "Soilless Growing Technology",
      whatIs: {
        title: "What is Hydroponics?",
        description:
          "Hydroponics is a method of growing plants without soil, using nutrient-rich water solutions to deliver essential minerals directly to plant roots. This innovative approach offers precise control over growing conditions and typically results in faster growth and higher yields compared to traditional soil-based agriculture.",
        benefits: [
          "Faster plant growth and higher yields",
          "Precise nutrient control and monitoring",
          "Water conservation through recirculation",
          "Elimination of soil-borne diseases and pests",
          "Year-round growing capability",
          "Space-efficient vertical growing systems",
        ],
      },
      systemTypes: {
        title: "Hydroponic System Types",
        types: {
          nft: {
            title: "NFT System",
            description: "Nutrient Film Technique",
            details:
              "A continuous flow of nutrient solution flows through channels, providing constant nutrition to plant roots.",
            badge: "Most Popular",
          },
          dwc: {
            title: "DWC System",
            description: "Deep Water Culture",
            details: "Plant roots are suspended directly in oxygenated nutrient solution for maximum nutrient uptake.",
            badge: "High Yield",
          },
          ebbFlow: {
            title: "Ebb & Flow",
            description: "Flood and Drain System",
            details: "Periodic flooding of the growing medium with nutrient solution, then draining back to reservoir.",
            badge: "Versatile",
          },
        },
      },
      towerSystem: {
        title: "Tower System Technology",
        description:
          "Our vertical tower system maximizes growing space while minimizing water usage through an efficient recirculating design. Each tower supports multiple plants in a compact footprint, making it ideal for urban agriculture and educational demonstrations.",
        components: {
          title: "System Components",
          items: {
            reservoir: "Nutrient reservoir with automated mixing and pH control",
            pump: "Variable-speed circulation pumps with flow monitoring",
            towers: "Modular growing towers with integrated plant sites",
            lighting: "Full-spectrum LED arrays with programmable schedules",
            sensors: "Environmental monitoring sensors for optimal conditions",
            controller: "Automated control system with web interface",
          },
        },
      },
      howItWorks: {
        title: "How Our System Works",
        description: "Understanding the complete nutrient delivery cycle in our vertical tower system.",
        steps: {
          mixing: {
            title: "Nutrient Mixing",
            description: "Precise nutrient solutions are automatically mixed and pH balanced in the reservoir.",
          },
          circulation: {
            title: "Pump Circulation",
            description: "Variable-speed pumps deliver nutrient solution to the top of each tower.",
          },
          gravityFlow: {
            title: "Gravity Flow",
            description: "Solution flows down through each growing level, feeding plants along the way.",
          },
          recirculation: {
            title: "Recirculation",
            description: "Excess solution returns to the reservoir for continuous recycling and monitoring.",
          },
        },
        advantages: {
          title: "System Advantages",
          yields: {
            title: "Higher Yields",
            description: "Up to 30% faster growth compared to traditional soil methods",
          },
          waterEfficiency: {
            title: "Water Efficient",
            description: "Uses 90% less water through precise delivery and recirculation",
          },
          yearRoundGrowing: {
            title: "Year-Round Growing",
            description: "Controlled environment allows continuous production regardless of season",
          },
        },
      },
      siteGuide: {
        title: "What You Can Do on This Site",
        description:
          "This interactive exhibition website allows you to explore and control our hydroponic system in real-time. Here's what you can experience:",
        features: {
          monitoring: {
            title: "Monitor Live Data",
            description:
              "View real-time sensor readings including temperature, pH, light levels, and water quality. Watch live charts and export data for analysis.",
          },
          control: {
            title: "Control the System",
            description:
              "Interact with the hydroponic system by adjusting lighting, controlling water pumps, and testing different growing scenarios safely.",
          },
          education: {
            title: "Learn About Hydroponics",
            description:
              "Discover how hydroponic systems work, their benefits, and the technology behind sustainable vertical farming.",
          },
        },
      },
      cta: {
        title: "Ready to See It in Action?",
        description:
          "Explore our interactive monitoring dashboard and control interface to experience the system firsthand.",
        viewData: "View Live Data",
        controlSystem: "Control System",
      },
    },
    monitoring: {
      title: "System Monitoring",
      subtitle: "Real-time Data Dashboard",
      sections: {
        environmental: "Environmental Conditions",
        water: "Water Quality",
        lighting: "Lighting System",
        system: "System Status",
        webcam: "Live Camera Feed",
      },
      metrics: {
        extTemp: "External Temperature",
        waterTemp: "Water Temperature",
        ph: "pH Level",
        tds: "Total Dissolved Solids",
        lightLevel: "Light Level",
        systemStatus: "System Status",
        pumpStatus: "Pump Status",
        lightStatus: "Light Status",
      },
      status: {
        optimal: "Optimal",
        warning: "Warning",
        critical: "Critical",
        offline: "Offline",
        online: "Online",
        active: "Active",
        inactive: "Inactive",
      },
      actions: {
        exportData: "Export Data",
        refreshData: "Refresh Data",
        viewHistory: "View History",
      },
    },
    control: {
      title: "System Control",
      subtitle: "Interactive Control Interface",
      gettingStarted: {
        title: "Getting Started",
        description:
          "Welcome to the hydroponic system control interface! This panel allows you to safely interact with the growing system. All changes are monitored and logged for safety.",
        steps: [
          "Start with the Quick Actions below for common scenarios",
          "Use individual controls to fine-tune specific components",
          "Monitor the webcam feed to see real-time effects",
          "Check the command history to see what actions have been taken",
        ],
      },
      lighting: {
        title: "LED Lighting Control",
        description: "Control the full-spectrum LED arrays that provide optimal light conditions for plant growth.",
        controls: {
          power: "Power",
          intensity: "Light Intensity",
          schedule: "Schedule",
          mode: "Control Mode",
        },
        modes: {
          manual: "Manual Control",
          auto: "Automatic",
          schedule: "Scheduled",
        },
      },
      pumps: {
        title: "Water Pump System",
        description: "Manage the circulation pumps that deliver nutrient solution throughout the tower system.",
        controls: {
          power: "Pump Power",
          flowRate: "Flow Rate",
          schedule: "Pump Schedule",
          mode: "Operation Mode",
        },
      },
      webcam: {
        title: "Live System View",
        description: "Monitor the hydroponic system in real-time to observe plant growth and system operation.",
        status: "Camera Status",
      },
      quickActions: {
        title: "Quick Actions",
        actions: {
          morning: {
            title: "Morning Routine",
            description: "Activate full lighting and increase pump circulation for daytime growing conditions",
          },
          evening: {
            title: "Evening Routine",
            description: "Reduce lighting intensity and adjust pump schedule for nighttime conditions",
          },
          maintenance: {
            title: "Maintenance Mode",
            description: "Safely shut down pumps and reduce lighting for system maintenance",
          },
          demo: {
            title: "Demo Mode",
            description: "Activate demonstration lighting sequence to showcase system capabilities",
          },
        },
      },
      emergency: {
        title: "Emergency Controls",
        description: "Use these controls only in case of emergency or system malfunction.",
        stopAll: "Emergency Stop All",
        restart: "Restart System",
      },
      commandHistory: {
        title: "Command History",
        noCommands: "No commands executed yet",
      },
    },
  },
  it: {
    nav: {
      projectOverview: "Panoramica Progetto",
      hydroponics: "Guida Idroponica",
      monitoring: "Monitoraggio Dati",
      control: "Controllo Sistema",
    },
    common: {
      loading: "Caricamento...",
      error: "Errore",
      success: "Successo",
      cancel: "Annulla",
      confirm: "Conferma",
      save: "Salva",
      reset: "Ripristina",
      back: "Indietro",
      next: "Avanti",
      previous: "Precedente",
      close: "Chiudi",
    },
    home: {
      title: "Sistema Torre Idroponica",
      subtitle: "Soluzione di Coltivazione Automatizzata Avanzata",
      description:
        "Un innovativo sistema di torri idroponiche con monitoraggio automatizzato, controllo ambientale e acquisizione dati in tempo reale per una crescita ottimale delle piante in applicazioni di agricoltura verticale.",
      features: {
        monitoring: {
          title: "Monitoraggio in Tempo Reale",
          description:
            "Tracciamento continuo dei parametri ambientali, qualità dell'acqua e prestazioni del sistema con capacità di registrazione dati.",
        },
        control: {
          title: "Controllo Automatizzato",
          description:
            "Automazione intelligente di illuminazione, irrigazione e sistemi ambientali con capacità di controllo manuale.",
        },
        education: {
          title: "Interfaccia Educativa",
          description:
            "Piattaforma di apprendimento interattiva che dimostra i principi idroponici e le tecnologie di agricoltura sostenibile.",
        },
      },
      specifications: {
        title: "Specifiche del Sistema",
        items: {
          towers: "4 Torri di Coltivazione Verticali",
          plants: "Capacità 48 Piante",
          sensors: "12 Sensori Ambientali",
          automation: "Automazione Completa del Sistema",
          monitoring: "Monitoraggio Dati 24/7",
          control: "Interfaccia di Controllo Remoto",
        },
      },
      construction: {
        title: "Documentazione Costruzione",
        phases: [
          "Progettazione e Pianificazione del Sistema",
          "Costruzione e Assemblaggio Torri",
          "Integrazione Sensori e Cablaggio",
          "Programmazione Sistema di Controllo",
          "Test e Calibrazione",
          "Assemblaggio Finale e Documentazione",
        ],
      },
      documentation: {
        title: "Documentazione Progetto",
        items: [
          "Specifiche Tecniche",
          "Timelapse Costruzione",
          "Schemi del Sistema",
          "Lista Componenti",
          "Istruzioni di Assemblaggio",
          "Guida Manutenzione",
        ],
      },
    },
    hydroponics: {
      title: "Comprendere l'Idroponica",
      subtitle: "Tecnologia di Coltivazione Senza Suolo",
      whatIs: {
        title: "Cos'è l'Idroponica?",
        description:
          "L'idroponica è un metodo di coltivazione delle piante senza suolo, utilizzando soluzioni acquose ricche di nutrienti per fornire minerali essenziali direttamente alle radici delle piante. Questo approccio innovativo offre un controllo preciso delle condizioni di crescita e tipicamente risulta in una crescita più rapida e rese più elevate rispetto all'agricoltura tradizionale basata sul suolo.",
        benefits: [
          "Crescita più rapida delle piante e rese più elevate",
          "Controllo e monitoraggio preciso dei nutrienti",
          "Conservazione dell'acqua attraverso il ricircolo",
          "Eliminazione di malattie e parassiti del suolo",
          "Capacità di coltivazione tutto l'anno",
          "Sistemi di coltivazione verticale efficienti nello spazio",
        ],
      },
      systemTypes: {
        title: "Tipi di Sistemi Idroponici",
        types: {
          nft: {
            title: "Sistema NFT",
            description: "Tecnica del Film Nutritivo",
            details:
              "Un flusso continuo di soluzione nutritiva scorre attraverso canali, fornendo nutrizione costante alle radici delle piante.",
            badge: "Più Popolare",
          },
          dwc: {
            title: "Sistema DWC",
            description: "Coltura in Acqua Profonda",
            details:
              "Le radici delle piante sono sospese direttamente nella soluzione nutritiva ossigenata per il massimo assorbimento di nutrienti.",
            badge: "Alta Resa",
          },
          ebbFlow: {
            title: "Flusso e Riflusso",
            description: "Sistema di Allagamento e Drenaggio",
            details:
              "Allagamento periodico del substrato di crescita con soluzione nutritiva, poi drenaggio di ritorno al serbatoio.",
            badge: "Versatile",
          },
        },
      },
      towerSystem: {
        title: "Tecnologia del Sistema Torre",
        description:
          "Il nostro sistema di torri verticali massimizza lo spazio di coltivazione minimizzando l'uso dell'acqua attraverso un design di ricircolo efficiente. Ogni torre supporta più piante in un'impronta compatta, rendendola ideale per l'agricoltura urbana e le dimostrazioni educative.",
        components: {
          title: "Componenti del Sistema",
          items: {
            reservoir: "Serbatoio nutrienti con miscelazione automatica e controllo pH",
            pump: "Pompe di circolazione a velocità variabile con monitoraggio del flusso",
            towers: "Torri di coltivazione modulari con siti piante integrati",
            lighting: "Array LED a spettro completo con programmi programmabili",
            sensors: "Sensori di monitoraggio ambientale per condizioni ottimali",
            controller: "Sistema di controllo automatizzato con interfaccia web",
          },
        },
      },
      howItWorks: {
        title: "Come Funziona il Nostro Sistema",
        description: "Comprendere il ciclo completo di consegna dei nutrienti nel nostro sistema di torri verticali.",
        steps: {
          mixing: {
            title: "Miscelazione Nutrienti",
            description:
              "Soluzioni nutritive precise vengono automaticamente miscelate e bilanciate per pH nel serbatoio.",
          },
          circulation: {
            title: "Circolazione Pompa",
            description: "Pompe a velocità variabile forniscono soluzione nutritiva alla cima di ogni torre.",
          },
          gravityFlow: {
            title: "Flusso Gravitazionale",
            description:
              "La soluzione scorre verso il basso attraverso ogni livello di crescita, alimentando le piante lungo il percorso.",
          },
          recirculation: {
            title: "Ricircolazione",
            description: "La soluzione in eccesso ritorna al serbatoio per riciclaggio continuo e monitoraggio.",
          },
        },
        advantages: {
          title: "Vantaggi del Sistema",
          yields: {
            title: "Rese Superiori",
            description: "Fino al 30% di crescita più veloce rispetto ai metodi tradizionali del suolo",
          },
          waterEfficiency: {
            title: "Efficiente nell'Acqua",
            description: "Usa il 90% meno acqua attraverso consegna precisa e ricircolazione",
          },
          yearRoundGrowing: {
            title: "Coltivazione Tutto l'Anno",
            description: "L'ambiente controllato consente produzione continua indipendentemente dalla stagione",
          },
        },
      },
      siteGuide: {
        title: "Cosa Puoi Fare su Questo Sito",
        description:
          "Questo sito web espositivo interattivo ti permette di esplorare e controllare il nostro sistema idroponico in tempo reale. Ecco cosa puoi sperimentare:",
        features: {
          monitoring: {
            title: "Monitora Dati Live",
            description:
              "Visualizza letture dei sensori in tempo reale inclusi temperatura, pH, livelli di luce e qualità dell'acqua. Guarda grafici live ed esporta dati per l'analisi.",
          },
          control: {
            title: "Controlla il Sistema",
            description:
              "Interagisci con il sistema idroponico regolando l'illuminazione, controllando le pompe dell'acqua e testando diversi scenari di crescita in sicurezza.",
          },
          education: {
            title: "Impara sull'Idroponica",
            description:
              "Scopri come funzionano i sistemi idroponici, i loro benefici e la tecnologia dietro l'agricoltura verticale sostenibile.",
          },
        },
      },
      cta: {
        title: "Pronto a Vederlo in Azione?",
        description:
          "Esplora la nostra dashboard di monitoraggio interattiva e l'interfaccia di controllo per sperimentare il sistema in prima persona.",
        viewData: "Visualizza Dati Live",
        controlSystem: "Controlla Sistema",
      },
    },
    monitoring: {
      title: "Monitoraggio Sistema",
      subtitle: "Dashboard Dati in Tempo Reale",
      sections: {
        environmental: "Condizioni Ambientali",
        water: "Qualità Acqua",
        lighting: "Sistema Illuminazione",
        system: "Stato Sistema",
        webcam: "Feed Camera Live",
      },
      metrics: {
        extTemp: "Temperatura Esterna",
        waterTemp: "Temperatura Acqua",
        ph: "Livello pH",
        tds: "Solidi Disciolti Totali",
        lightLevel: "Livello Luce",
        systemStatus: "Stato Sistema",
        pumpStatus: "Stato Pompa",
        lightStatus: "Stato Luce",
      },
      status: {
        optimal: "Ottimale",
        warning: "Avviso",
        critical: "Critico",
        offline: "Offline",
        online: "Online",
        active: "Attivo",
        inactive: "Inattivo",
      },
      actions: {
        exportData: "Esporta Dati",
        refreshData: "Aggiorna Dati",
        viewHistory: "Visualizza Cronologia",
      },
    },
    control: {
      title: "Controllo Sistema",
      subtitle: "Interfaccia di Controllo Interattiva",
      gettingStarted: {
        title: "Iniziare",
        description:
          "Benvenuto nell'interfaccia di controllo del sistema idroponico! Questo pannello ti permette di interagire in sicurezza con il sistema di coltivazione. Tutti i cambiamenti sono monitorati e registrati per sicurezza.",
        steps: [
          "Inizia con le Azioni Rapide qui sotto per scenari comuni",
          "Usa i controlli individuali per regolare componenti specifici",
          "Monitora il feed della webcam per vedere gli effetti in tempo reale",
          "Controlla la cronologia comandi per vedere quali azioni sono state prese",
        ],
      },
      lighting: {
        title: "Controllo Illuminazione LED",
        description:
          "Controlla gli array LED a spettro completo che forniscono condizioni di luce ottimali per la crescita delle piante.",
        controls: {
          power: "Alimentazione",
          intensity: "Intensità Luce",
          schedule: "Programma",
          mode: "Modalità Controllo",
        },
        modes: {
          manual: "Controllo Manuale",
          auto: "Automatico",
          schedule: "Programmato",
        },
      },
      pumps: {
        title: "Sistema Pompe Acqua",
        description:
          "Gestisci le pompe di circolazione che forniscono la soluzione nutritiva attraverso il sistema torre.",
        controls: {
          power: "Alimentazione Pompa",
          flowRate: "Velocità Flusso",
          schedule: "Programma Pompa",
          mode: "Modalità Operazione",
        },
      },
      webcam: {
        title: "Vista Sistema Live",
        description:
          "Monitora il sistema idroponico in tempo reale per osservare la crescita delle piante e il funzionamento del sistema.",
        status: "Stato Camera",
      },
      quickActions: {
        title: "Azioni Rapide",
        actions: {
          morning: {
            title: "Routine Mattutina",
            description: "Attiva illuminazione completa e aumenta circolazione pompa per condizioni di crescita diurne",
          },
          evening: {
            title: "Routine Serale",
            description: "Riduci intensità illuminazione e regola programma pompa per condizioni notturne",
          },
          maintenance: {
            title: "Modalità Manutenzione",
            description: "Spegni pompe in sicurezza e riduci illuminazione per manutenzione sistema",
          },
          demo: {
            title: "Modalità Demo",
            description: "Attiva sequenza illuminazione dimostrativa per mostrare capacità del sistema",
          },
        },
      },
      emergency: {
        title: "Controlli Emergenza",
        description: "Usa questi controlli solo in caso di emergenza o malfunzionamento del sistema.",
        stopAll: "Stop Emergenza Tutto",
        restart: "Riavvia Sistema",
      },
      commandHistory: {
        title: "Cronologia Comandi",
        noCommands: "Nessun comando eseguito ancora",
      },
    },
  },
}
