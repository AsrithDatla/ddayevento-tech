import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  AlertTriangle,
  Target,
  Mic,
  Settings,
  Smile,
  Award,
} from 'lucide-react';

const EventPlanningPage: React.FC = () => {
  const kebabCase = (str: string) =>
    str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase();

  const sections = [
    {
      icon: <CheckCircle className="h-8 w-8 text-teal-500" />,
      title: 'Why Every Detail Counts',
      content: [
        'Every event is a story waiting to be told. Planning & Management is the narrator.',
        'It makes sure guests arrive on time, food is served hot, décor looks perfect, and the music never misses a beat.',
        'It controls chaos in the background while guests see only elegance.',
        'It saves clients from the stress of micromanaging 100 little things.',
        'It ensures the money spent on the event actually creates memories, not regrets.',
        'Without strong planning, events become a burden. With strong management, they become a celebration.',
      ],
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-amber-500" />,
      title: 'The Reality',
      content: [
        'Today, the event industry is flooded with coordinators who call themselves “planners.” In reality:',
        'Many lack professional systems — resulting in missed deadlines, vendor confusion, and last-minute disasters.',
        'Budget overshooting is common because hidden costs are not managed.',
        'Miscommunication between vendors and clients leads to frustration.',
        'Clients are often left running around, solving problems that should have been handled.',
        'Sadly, many events look glamorous on the outside but behind the scenes, panic, disorganization, and compromise dominate.',
      ],
    },
    {
      icon: <Target className="h-8 w-8 text-sky-500" />,
      title: 'Our Signature Approach',
      content: [
        'At D DAY Evento, Event Planning & Management is not just coordination — it’s orchestration.',
        'We design a step-by-step roadmap for every event.',
        'Every vendor, every activity, every delivery is tracked in real-time.',
        'Budgets are transparent — no hidden shocks.',
        'We anticipate problems before they appear.',
        'Our admin and on-ground crew work as a single synchronized force.',
        'Where others react, we prepare. Where others panic, we perform. That is the D DAY Evento difference.',
      ],
    },
    {
      icon: <Mic className="h-8 w-8 text-purple-500" />,
      title: 'Events That Speak',
      content: [
        'Weddings: From sangeet rehearsals to mandap timings, every moment runs smoothly.',
        'Corporate Events: Guest check-ins, stage management, and tech setups without downtime.',
        'Birthday Parties: Surprise elements, cake timing, and activity flow managed flawlessly.',
        'Cultural Celebrations: Rituals and traditions respected while ensuring modern comforts.',
      ],
    },
    {
      icon: <Settings className="h-8 w-8 text-slate-500" />,
      title: 'Behind the Scenes',
      content: [
        'Vendor negotiations that take hours to balance cost and quality.',
        'Contingency planning for power cuts, weather changes, and guest delays.',
        'Minute-by-minute scheduling to prevent clashes.',
        'Emergency replacements when vendors fail last minute.',
        'Coordinating 20–30 parallel activities without dropping a single detail.',
        'This is the unseen battlefield. But we handle it quietly so clients only see beauty.',
      ],
    },
    {
      icon: <Smile className="h-8 w-8 text-rose-500" />,
      title: 'Our Client Experience With D-DAY EVENTO',
      content: [
        'Clients with D DAY Evento never say, “We were stressed.” Instead, they say:',
        '“We enjoyed our event like guests.”',
        '“We didn’t even realize when things shifted — it was so smooth.”',
        '“It felt effortless, but we know the effort behind it was massive.”',
        'The hallmark of good planning is when clients don’t feel the pressure — they feel the joy.',
      ],
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: 'Why Choose D DAY Evento',
      content: [
        '4+ years of expertise in managing diverse events.',
        'A dual-force team: admin excellence + ground execution.',
        'Professional vendor network ensuring quality & reliability.',
        'Stress-free guarantee — you celebrate, we manage.',
        'Transparent costs & smart solutions.',
        'With us, every detail has a place, every task has a time, and every event has a soul.',
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gray-50 font-sans" style={{ scrollBehavior: 'smooth' }}>
      <section className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            Event Planning & Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-cyan-100"
          >
            From dream to reality, we orchestrate unforgettable moments with precision and passion.
            Our job is to handle every detail, so you can enjoy the celebration without a worry.
          </motion.p>
        </div>
      </section>
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        <div className="grid gap-12">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              id={kebabCase(section.title)}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl scroll-mt-24"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  {section.icon}
                  <h2 className="text-3xl font-bold text-gray-800 ml-4">
                    {section.title}
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {section.title === 'Why Choose D DAY Evento' && (
                  <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xl italic text-teal-700 font-serif">
                    “Events don’t just happen — they are managed into perfection. Let D DAY EVENTO be the manager of your memories.”
                  </div>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPlanningPage;
