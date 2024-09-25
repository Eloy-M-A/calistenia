'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Dumbbell, HelpCircle, Lightbulb, Zap } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

const heroImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1626889304881-c01184afa347?auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1616279969096-54b228f5f124?auto=format&fit=crop&w=1920&h=1080",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1920&h=1080"
]

export function CalisteniaCatalogComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("iniciacion")
  const { toast } = useToast()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Cambia la imagen cada 5 segundos

    return () => clearInterval(intervalId)
  }, [])

  const showToast = () => {
    toast({
      variant: "destructive",
      title: "SITIO WEB EN CONSTRUCCIÓN",
      description: "Este sitio no es real, es un experimento para crear una página web",
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Dumbbell className="mr-2 text-yellow-400" />
            <span className="text-yellow-400">Calistenia</span>Pro
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Button
              variant="link"
              onClick={() => {
                setActiveTab("iniciacion")
                showToast()
              }}
              className={`text-gray-100 hover:text-yellow-400 ${activeTab === "iniciacion" ? "text-yellow-400" : ""}`}
            >
              Iniciación
            </Button>
            <Button
              variant="link"
              onClick={() => {
                setActiveTab("entrenamiento")
                showToast()
              }}
              className={`text-gray-100 hover:text-yellow-400 ${activeTab === "entrenamiento" ? "text-yellow-400" : ""}`}
            >
              Entrenamiento
            </Button>
            <Button
              variant="link"
              onClick={() => {
                setActiveTab("dudas")
                showToast()
              }}
              className={`text-gray-100 hover:text-yellow-400 ${activeTab === "dudas" ? "text-yellow-400" : ""}`}
            >
              Dudas y Consultas
            </Button>
          </nav>
          <Button 
            variant="outline" 
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-800"
            onClick={showToast}
          >
            Contacto
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          {heroImages.map((img, index) => (
            <div
              key={img}
              className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center"
              style={{
                backgroundImage: `url(${img})`,
                opacity: index === currentImageIndex ? 1 : 0,
              }}
              aria-hidden={index !== currentImageIndex}
            />
          ))}
          <div className="absolute inset-0 bg-gray-800 bg-opacity-60"></div>
          <div className="relative z-10 text-center text-gray-100">
            <h1 className="text-5xl font-bold mb-4">Domina la Calistenia</h1>
            <p className="text-xl mb-8">Entrena tu cuerpo, desafía tus límites</p>
            <Button 
              size="lg" 
              className="bg-yellow-400 text-gray-800 hover:bg-yellow-500"
              onClick={showToast}
            >
              Empieza Ahora
              <ChevronRight className="ml-2" />
            </Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="iniciacion" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-800" onClick={showToast}>Iniciación</TabsTrigger>
              <TabsTrigger value="entrenamiento" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-800" onClick={showToast}>Entrenamiento</TabsTrigger>
              <TabsTrigger value="dudas" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-gray-800" onClick={showToast}>Dudas y Consultas</TabsTrigger>
            </TabsList>
            <TabsContent value="iniciacion">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ActivityCard
                  title="Fundamentos de la Calistenia"
                  description="La calistenia es el arte de usar el peso corporal para desarrollar fuerza, flexibilidad y control. En este módulo, explorarás los principios básicos que sustentan esta disciplina. Aprenderás sobre la importancia de la forma correcta, la progresión gradual y la consistencia en tu práctica. Descubrirás cómo movimientos simples como flexiones, sentadillas y dominadas pueden transformar tu cuerpo y mente, sentando las bases para hazañas más avanzadas en el futuro."
                  icon={<Lightbulb className="text-yellow-400" />}
                  showToast={showToast}
                />
                <ActivityCard
                  title="Rutina para Principiantes"
                  description="Embárcate en un viaje de 4 semanas diseñado para introducirte gradualmente en el mundo de la calistenia. Esta rutina equilibrada combina ejercicios de empuje, tracción y core para desarrollar una base sólida de fuerza y resistencia. Comenzarás con variaciones accesibles de ejercicios clásicos, aumentando progresivamente la dificultad a medida que ganes confianza y capacidad. Al final de este programa, notarás mejoras significativas en tu fuerza, resistencia y control corporal."
                  icon={<Zap className="text-yellow-400" />}
                  showToast={showToast}
                />
                <ActivityCard
                  title="Flexibilidad y Movilidad"
                  description="La flexibilidad y la movilidad son componentes cruciales pero a menudo descuidados en el fitness. Este módulo te guiará a través de rutinas de estiramiento y movilidad diseñadas específicamente para complementar tu entrenamiento de calistenia. Aprenderás técnicas para mejorar tu rango de movimiento, reducir el riesgo de lesiones y optimizar tu rendimiento en ejercicios más avanzados. Descubre cómo una mayor flexibilidad puede desbloquear nuevas posibilidades en tu práctica de calistenia."
                  icon={<Dumbbell className="text-yellow-400" />}
                  showToast={showToast}
                />
              </div>
            </TabsContent>
            <TabsContent value="entrenamiento">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ActivityCard
                  title="Rutina de Fuerza Avanzada"
                  description="Lleva tu entrenamiento al siguiente nivel con nuestra rutina de fuerza avanzada de 6 semanas. Este programa intensivo está diseñado para aquellos que ya dominan los fundamentos y buscan desafíos mayores. Incorporarás variaciones más difíciles de ejercicios clásicos, junto con movimientos isométricos y dinámicos avanzados. Aprenderás a manipular variables como el tiempo bajo tensión y la velocidad de ejecución para maximizar tus ganancias de fuerza. Prepárate para superar tus límites y alcanzar nuevos hitos en tu viaje de calistenia."
                  icon={<Dumbbell className="text-yellow-400" />}
                  showToast={showToast}
                />
                <ActivityCard
                  title="Entrenamiento de Habilidades"
                  description="Domina movimientos icónicos de la calistenia como el muscle-up, la bandera humana y el planche. Este módulo desglosa estas habilidades avanzadas en progresiones manejables, permitiéndote construir la fuerza y técnica necesarias de manera segura y efectiva. Aprenderás sobre la importancia de la paciencia y la práctica consistente en el dominio de estas habilidades. Además, descubrirás cómo integrar el entrenamiento de habilidades en tu rutina regular para un desarrollo equilibrado y continuo."
                  icon={<Zap className="text-yellow-400" />}
                  showToast={showToast}
                />
                <ActivityCard
                  title="Periodización del Entrenamiento"
                  description="La periodización es la clave para un progreso continuo y la prevención de mesetas. En este módulo, aprenderás a estructurar tu entrenamiento a lo largo del tiempo para maximizar tus resultados. Descubrirás cómo alternar fases de volumen, intensidad y recuperación para optimizar tu rendimiento y prevenir el sobreentrenamiento. Explorarás diferentes modelos de periodización y aprenderás a adaptar tu entrenamiento a tus metas específicas, ya sea fuerza, resistencia o habilidades avanzadas."
                  icon={<Lightbulb className="text-yellow-400" />}
                  showToast={showToast}
                />
              </div>
            </TabsContent>
            <TabsContent value="dudas">
              <div className="grid md:grid-cols-1 gap-6">
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-800">
                      <HelpCircle className="text-yellow-400 mr-2" />
                      <span>Preguntas Frecuentes</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-bold text-gray-800">Usuario: ¿Qué es la calistenia y en qué se diferencia del gimnasio?</p>
                        <p className="mt-2 text-gray-600">Experto: La calistenia es un método de entrenamiento físico que utiliza el peso corporal como resistencia. A diferencia del gimnasio, no requiere de máquinas o pesas externas, y se enfoca en el desarrollo de la fuerza funcional, la flexibilidad y la coordinación a través de ejercicios como flexiones, dominadas y fondos.</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-bold text-gray-800">Usuario: ¿Necesito algún equipo especial para empezar?</p>
                        <p className="mt-2 text-gray-600">Experto: Básicamente, no necesitas más que tu propio cuerpo y un espacio adecuado. Sin embargo, algunos accesorios como las anillas o las barras de dominadas pueden ampliar el rango de ejercicios y facilitar la progresión.</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-bold text-gray-800">Usuario: ¿Puedo ganar músculo haciendo calistenia?</p>
                        <p className="mt-2 text-gray-600">Experto: Absolutamente. La calistenia es una forma efectiva de hipertrofia muscular, especialmente cuando se aplican principios de sobrecarga progresiva, como aumentar el número de repeticiones, series o la dificultad de los ejercicios.</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-bold text-gray-800">Usuario: ¿Es la calistenia mejor que levantar pesas?</p>
                        <p className="mt-2 text-gray-600">Experto: No existe una respuesta única. Ambos métodos tienen sus ventajas. La calistenia destaca en el desarrollo de fuerza funcional y patrones de movimiento naturales, mientras que el levantamiento de pesas permite un control más preciso sobre la carga y el aislamiento muscular.</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-bold text-gray-800">Usuario: ¿Cuánto tiempo debo entrenar para ver resultados?</p>
                        <p className="mt-2 text-gray-600">Experto: La progresión es individual y depende de factores como la genética, la nutrición y la frecuencia de entrenamiento. Sin embargo, con una rutina consistente y una dieta adecuada, puedes empezar a notar mejoras en fuerza y resistencia en pocas semanas.</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-bold text-gray-800">Usuario: ¿Me puedo lesionar haciendo calistenia?</p>
                        <p className="mt-2 text-gray-600">Experto: Al igual que en cualquier otra actividad física, el riesgo de lesiones existe. Es fundamental calentar antes de cada sesión, prestar atención a la técnica y progresión, y descansar adecuadamente para evitar el sobreentrenamiento.</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-bold text-gray-800">Usuario: ¿Qué músculos trabajo con la calistenia?</p>
                        <p className="mt-2 text-gray-600">Experto: La calistenia trabaja prácticamente todos los grupos musculares del cuerpo, con énfasis en los compuestos, como el tren superior (pectorales, deltoides, tríceps, bíceps, dorsal ancho) y el tren inferior (cuádriceps, glúteos, isquiotibiales).</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-bold text-gray-800">Usuario: ¿Puedo hacer calistenia en casa?</p>
                        <p className="mt-2 text-gray-600">Experto: Sí, la calistenia es una disciplina muy versátil que se puede practicar en cualquier lugar con un mínimo de espacio. Existen innumerables rutinas y ejercicios adaptables a entornos domésticos.</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-bold text-gray-800">Usuario: ¿Cómo puedo aumentar mi fuerza en dominadas?</p>
                        <p className="mt-2 text-gray-600">Experto: Para aumentar la fuerza en dominadas, puedes utilizar progresiones como las dominadas asistidas (con banda elástica), negativas o parciales. Además, ejercicios complementarios como los remo con barra o las filas isométricas pueden fortalecer los músculos involucrados.</p>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <p className="font-bold text-gray-800">Usuario: ¿Qué es la sobrecarga progresiva y por qué es importante?</p>
                        <p className="mt-2 text-gray-600">Experto: La sobrecarga progresiva consiste en aumentar gradualmente la demanda física sobre los músculos a lo largo del tiempo. Esto es esencial para estimular el crecimiento muscular y evitar estancamientos en el entrenamiento.</p>
                      </div>
                    </div>
                    <Button 
                      className="mt-6 bg-gray-800 text-gray-100 hover:bg-yellow-400 hover:text-gray-800"
                      onClick={showToast}
                    >
                      Más Preguntas
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 CalisteniaPro. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

interface ActivityCardProps {
  title: string;
  description: string; 
  icon: React.ReactNode; // Or the specific type of your icon component
  showToast: ()=> void;
}

function ActivityCard({ title, description, icon, showToast }:ActivityCardProps) {
  return (
    <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center text-gray-800">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
        <Button 
          className="mt-4 bg-gray-800 text-gray-100 hover:bg-yellow-400 hover:text-gray-800"
          onClick={showToast}
        >
          Más Información
        </Button>
      </CardContent>
    </Card>
  )
}