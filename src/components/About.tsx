import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Server, Database, Globe, Sparkles, CreditCard } from 'lucide-react';

const highlights = [
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Python, Django, DRF, PHP, Laravel with scalable architecture and RESTful APIs',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Vue.js, Nuxt.js, React.js, TypeScript with modern UI/UX practices',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'PAY.JP, GMO Payment with secure checkout and order workflows',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Database,
    title: 'Database & Cloud',
    description: 'MySQL, PostgreSQL, MongoDB with Docker, Nginx, and AWS',
    color: 'from-orange-500 to-red-500'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-100 dark:bg-accent-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4" />
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white">
            Passionate Full-Stack{' '}
            <span className="gradient-text">Developer</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p className="text-lg leading-relaxed">
                I'm <span className="text-gray-900 dark:text-white font-semibold">Viet Duong</span>, 
                a Full-Stack Developer with over <span className="text-primary-600 dark:text-primary-400 font-semibold">4 years of experience</span> in full-stack web development.
              </p>
              <p className="leading-relaxed">
                I specialize in building <span className="text-gray-900 dark:text-white font-medium">scalable backend systems</span>, 
                integrating <span className="text-gray-900 dark:text-white font-medium">secure payment solutions</span>, 
                and designing <span className="text-gray-900 dark:text-white font-medium">multi-tenant SaaS platforms</span>. 
                I consistently deliver end-to-end features that improve system reliability, operational efficiency, and business scalability.
              </p>
              <p className="leading-relaxed">
                My expertise includes <span className="text-gray-900 dark:text-white font-medium">Python (Django, DRF)</span> and{' '}
                <span className="text-gray-900 dark:text-white font-medium">PHP (Laravel)</span> for backend, 
                <span className="text-gray-900 dark:text-white font-medium"> Vue.js, Nuxt.js, React.js</span> for frontend, 
                and payment integrations with <span className="text-gray-900 dark:text-white font-medium">PAY.JP and GMO</span>.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Cao Thang Technical College</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Associate Degree in Information Technology • Aug 2017 - Oct 2020
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="mt-6 p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-primary-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                  🇻🇳 Vietnamese - Native
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm">
                  🇬🇧 English - Intermediate
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
