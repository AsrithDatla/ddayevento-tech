"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../../lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  autoPlayInterval = 3000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
            Wedding Events &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary block sm:inline">
              Days We Curate
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every wedding is a collection of special days, each carrying its own beauty and meaning.
          </p>
        </motion.div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-brand-primary border-brand-primary text-white scale-110"
                      : "bg-gray-100 border-gray-300",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {feature.title || feature.step}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-600 mb-4">
                    {feature.content}
                  </p>
                  {index === currentFeature && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 text-sm"
                    >
                      Learn More
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="order-1 md:order-2 space-y-6">
            {/* Image Section */}
            <div className="relative h-[200px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                {features.map(
                  (feature, index) =>
                    index === currentFeature && (
                      <motion.div
                        key={index}
                        className="absolute inset-0 rounded-lg overflow-hidden"
                        initial={{ y: 100, opacity: 0, rotateX: -20 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -100, opacity: 0, rotateX: 20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <img
                          src={feature.image}
                          alt={feature.step}
                          className="w-full h-full object-cover transition-transform transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>

            {/* Quote and Info Section */}
            <div className="bg-gradient-to-br from-brand-primary-50 to-brand-accent-50 rounded-xl p-6 border border-brand-primary/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">"</span>
                </div>
                <div>
                  <p className="text-gray-700 italic leading-relaxed mb-2">
                    "Every culture has its own unique rituals, and at D DAY EVENTO, we ensure every moment is celebrated beautifully."
                  </p>
                  <p className="text-brand-primary font-semibold text-sm">
                    — D Day Evento Team
                  </p>
                </div>
              </div>
              
              {/* Current Event Highlight */}
              <div className="border-t border-brand-primary/20 pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{currentFeature + 1}</span>
                  </div>
                  <h4 className="font-bold text-gray-900">
                    {features[currentFeature]?.title || features[currentFeature]?.step}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {features[currentFeature]?.content}
                </p>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">Progress</span>
                    <span className="text-xs text-brand-primary font-semibold">
                      {currentFeature + 1} of {features.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-brand-primary h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentFeature + 1) / features.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}