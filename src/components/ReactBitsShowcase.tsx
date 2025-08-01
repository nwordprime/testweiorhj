import { 
  GlitchText, 
  ShinyText, 
  RotatingText,
  CircularText,
  ScrambledText,
  GradientText,
  TrueFocus,
  VariableProximity,
  SpotlightCard,
  MagicBento,
  Counter,
  Dock,
  Folder,
  AnimatedList,
  BlobCursor,
  StarBorder,
  Noise,
  MetaBalls,
  DotGrid,
  Particles,
  Waves
} from '../lib/components/react-bits';
import { CodeModal } from './CodeModal';
import { Home, Settings, User, Mail, Heart, Star } from 'lucide-react';

interface ReactBitsShowcaseProps {
  onNavigate: (view: string) => void;
}

export function ReactBitsShowcase({ onNavigate }: ReactBitsShowcaseProps) {
  const showcaseComponents = [
    // Text Animations
    {
      id: 'glitch-text',
      name: 'Glitch Text',
      description: 'Cyberpunk-style glitch effect with customizable colors and intensity',
      category: 'text-animations',
      component: GlitchText,
      props: {
        text: 'GLITCH EFFECT',
        fontSize: '2.5rem',
        fontWeight: '900',
        color: '#ffffff',
        glitchColor1: '#ff0080',
        glitchColor2: '#00ff80',
        intensity: 0.8
      },
      code: `import { GlitchText } from '@/lib/components/react-bits';

<GlitchText 
  text="GLITCH EFFECT"
  fontSize="2.5rem"
  fontWeight="900"
  color="#ffffff"
  glitchColor1="#ff0080"
  glitchColor2="#00ff80"
  intensity={0.8}
/>`
    },
    {
      id: 'shiny-text',
      name: 'Shiny Text',
      description: 'Metallic shine effect that sweeps across text',
      category: 'text-animations',
      component: ShinyText,
      props: {
        text: 'SHINY TEXT',
        fontSize: '2.5rem',
        fontWeight: '900',
        color: '#ffffff',
        shineColor: '#ffd700',
        duration: 2000
      },
      code: `import { ShinyText } from '@/lib/components/react-bits';

<ShinyText 
  text="SHINY TEXT"
  fontSize="2.5rem"
  fontWeight="900"
  color="#ffffff"
  shineColor="#ffd700"
  duration={2000}
/>`
    },
    {
      id: 'rotating-text',
      name: 'Rotating Text',
      description: 'Smooth word rotation with customizable timing',
      category: 'text-animations',
      component: RotatingText,
      props: {
        words: ['AMAZING', 'BEAUTIFUL', 'STUNNING', 'INCREDIBLE'],
        duration: 2000,
        fontSize: '3rem',
        fontWeight: '900',
        color: '#ffffff'
      },
      code: `import { RotatingText } from '@/lib/components/react-bits';

<RotatingText 
  words={['AMAZING', 'BEAUTIFUL', 'STUNNING', 'INCREDIBLE']}
  duration={2000}
  fontSize="3rem"
  fontWeight="900"
  color="#ffffff"
/>`
    },
    {
      id: 'circular-text',
      name: 'Circular Text',
      description: 'Text arranged in a rotating circle with customizable radius',
      category: 'text-animations',
      component: CircularText,
      props: {
        text: 'CIRCULAR TEXT ANIMATION',
        radius: 80,
        fontSize: '16px',
        fontWeight: '900',
        color: '#ffffff',
        animationSpeed: 10
      },
      code: `import { CircularText } from '@/lib/components/react-bits';

<CircularText 
  text="CIRCULAR TEXT ANIMATION"
  radius={80}
  fontSize="16px"
  fontWeight="900"
  color="#ffffff"
  animationSpeed={10}
/>`
    },
    {
      id: 'scrambled-text',
      name: 'Scrambled Text',
      description: 'Matrix-style character scrambling effect on click or hover',
      category: 'text-animations',
      component: ScrambledText,
      props: {
        text: 'SCRAMBLED TEXT',
        fontSize: '2rem',
        fontWeight: '900',
        color: '#00ff00',
        scrambleSpeed: 50,
        scrambleChars: '!@#$%^&*()_+-=[]{}|;:,.<>?',
        triggerOnHover: true
      },
      code: `import { ScrambledText } from '@/lib/components/react-bits';

<ScrambledText 
  text="SCRAMBLED TEXT"
  fontSize="2rem"
  fontWeight="900"
  color="#00ff00"
  scrambleSpeed={50}
  scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
  triggerOnHover={true}
/>`
    },
    {
      id: 'gradient-text',
      name: 'Gradient Text',
      description: 'Animated gradient background with text overlay',
      category: 'text-animations',
      component: GradientText,
      props: {
        text: 'GRADIENT TEXT',
        fontSize: '2.5rem',
        fontWeight: '900',
        gradientColors: ['#ff0080', '#7928ca', '#0070f3', '#00ff80'],
        animationSpeed: 4,
        backgroundColor: '#000000'
      },
      code: `import { GradientText } from '@/lib/components/react-bits';

<GradientText 
  text="GRADIENT TEXT"
  fontSize="2.5rem"
  fontWeight="900"
  gradientColors={['#ff0080', '#7928ca', '#0070f3', '#00ff80']}
  animationSpeed={4}
  backgroundColor="#000000"
/>`
    },
    {
      id: 'true-focus',
      name: 'True Focus',
      description: 'Focus effect with corner highlights on hover',
      category: 'text-animations',
      component: TrueFocus,
      props: {
        text: 'FOCUS ON ME',
        fontSize: '2rem',
        fontWeight: '900',
        color: '#ffffff',
        borderColor: '#3b82f6',
        blurAmount: 2
      },
      code: `import { TrueFocus } from '@/lib/components/react-bits';

<TrueFocus 
  text="FOCUS ON ME"
  fontSize="2rem"
  fontWeight="900"
  color="#ffffff"
  borderColor="#3b82f6"
  blurAmount={2}
/>`
    },
    {
      id: 'variable-proximity',
      name: 'Variable Proximity',
      description: 'Font weight changes based on mouse proximity',
      category: 'text-animations',
      component: VariableProximity,
      props: {
        text: 'VARIABLE WEIGHT',
        fontSize: '2rem',
        fontWeight: '400',
        color: '#ffffff',
        maxDistance: 100
      },
      code: `import { VariableProximity } from '@/lib/components/react-bits';

<VariableProximity 
  text="VARIABLE WEIGHT"
  fontSize="2rem"
  fontWeight="400"
  color="#ffffff"
  maxDistance={100}
/>`
    },
    // Components
    {
      id: 'spotlight-card',
      name: 'Spotlight Card',
      description: 'Interactive card with mouse-following spotlight effect',
      category: 'components',
      component: SpotlightCard,
      props: {
        className: 'w-64 h-40 bg-gray-900 border border-gray-700 rounded-lg p-6',
        spotlightColor: 'rgba(255, 255, 255, 0.1)',
        children: (
          <div>
            <h3 className="text-white font-bold mb-2">Spotlight Card</h3>
            <p className="text-gray-300 text-sm">Hover to see the spotlight effect</p>
          </div>
        )
      },
      code: `import { SpotlightCard } from '@/lib/components/react-bits';

<SpotlightCard 
  className="w-64 h-40 bg-gray-900 border border-gray-700 rounded-lg p-6"
  spotlightColor="rgba(255, 255, 255, 0.1)"
>
  <h3 className="text-white font-bold mb-2">Spotlight Card</h3>
  <p className="text-gray-300 text-sm">Hover to see the spotlight effect</p>
</SpotlightCard>`
    },
    {
      id: 'magic-bento',
      name: 'Magic Bento',
      description: 'Bento grid with magical hover effects and smooth animations',
      category: 'components',
      component: MagicBento,
      props: {
        items: [
          { id: '1', title: 'Card 1', content: 'First card content', className: 'col-span-2' },
          { id: '2', title: 'Card 2', content: 'Second card content' },
          { id: '3', title: 'Card 3', content: 'Third card content' },
          { id: '4', title: 'Card 4', content: 'Fourth card content', className: 'col-span-2' }
        ],
        className: 'w-full max-w-2xl',
        globalSpotlight: true
      },
      code: `import { MagicBento } from '@/lib/components/react-bits';

<MagicBento 
  items={[
    { id: '1', title: 'Card 1', content: 'First card content', className: 'col-span-2' },
    { id: '2', title: 'Card 2', content: 'Second card content' },
    { id: '3', title: 'Card 3', content: 'Third card content' }
  ]}
  className="w-full max-w-2xl"
  globalSpotlight={true}
/>`
    },
    {
      id: 'counter',
      name: 'Animated Counter',
      description: 'Smooth number counting animation with easing',
      category: 'components',
      component: Counter,
      props: {
        value: 12345,
        duration: 2000,
        fontSize: '3rem',
        fontWeight: '700',
        color: '#ffffff'
      },
      code: `import { Counter } from '@/lib/components/react-bits';

<Counter 
  value={12345}
  duration={2000}
  fontSize="3rem"
  fontWeight="700"
  color="#ffffff"
/>`
    },
    {
      id: 'dock',
      name: 'Dock Navigation',
      description: 'macOS-style dock with hover magnification effect',
      category: 'components',
      component: Dock,
      props: {
        items: [
          { id: 'home', icon: <Home size={24} color="#fff" />, label: 'Home' },
          { id: 'settings', icon: <Settings size={24} color="#fff" />, label: 'Settings' },
          { id: 'user', icon: <User size={24} color="#fff" />, label: 'Profile' },
          { id: 'mail', icon: <Mail size={24} color="#fff" />, label: 'Mail' },
          { id: 'heart', icon: <Heart size={24} color="#fff" />, label: 'Favorites' }
        ],
        size: 48
      },
      code: `import { Dock } from '@/lib/components/react-bits';
import { Home, Settings, User, Mail, Heart } from 'lucide-react';

<Dock 
  items={[
    { id: 'home', icon: <Home size={24} />, label: 'Home' },
    { id: 'settings', icon: <Settings size={24} />, label: 'Settings' },
    { id: 'user', icon: <User size={24} />, label: 'Profile' }
  ]}
  size={48}
/>`
    },
    {
      id: 'folder',
      name: 'Interactive Folder',
      description: 'Animated folder that opens to reveal papers inside',
      category: 'components',
      component: Folder,
      props: {
        isOpen: false,
        folderColor: '#70a1ff',
        folderBackColor: '#4785ff',
        paperColors: ['#e6e6e6', '#f2f2f2', '#ffffff'],
        size: 120
      },
      code: `import { Folder } from '@/lib/components/react-bits';

<Folder 
  folderColor="#70a1ff"
  folderBackColor="#4785ff"
  paperColors={['#e6e6e6', '#f2f2f2', '#ffffff']}
  size={120}
/>`
    },
    {
      id: 'animated-list',
      name: 'Animated List',
      description: 'Scrollable list with gradient overlays and smooth animations',
      category: 'components',
      component: AnimatedList,
      props: {
        items: [
          { id: '1', content: 'First Item' },
          { id: '2', content: 'Second Item' },
          { id: '3', content: 'Third Item' },
          { id: '4', content: 'Fourth Item' },
          { id: '5', content: 'Fifth Item' },
          { id: '6', content: 'Sixth Item' }
        ],
        itemHeight: 80,
        maxHeight: 300,
        showScrollbar: false
      },
      code: `import { AnimatedList } from '@/lib/components/react-bits';

<AnimatedList 
  items={[
    { id: '1', content: 'First Item' },
    { id: '2', content: 'Second Item' },
    { id: '3', content: 'Third Item' }
  ]}
  itemHeight={80}
  maxHeight={300}
  showScrollbar={false}
/>`
    },
    // Animations
    {
      id: 'blob-cursor',
      name: 'Blob Cursor',
      description: 'Smooth blob that follows your cursor with customizable colors',
      category: 'animations',
      component: BlobCursor,
      props: {
        size: 40,
        color: '#3b82f6',
        opacity: 0.6,
        blur: 20
      },
      code: `import { BlobCursor } from '@/lib/components/react-bits';

<BlobCursor 
  size={40}
  color="#3b82f6"
  opacity={0.6}
  blur={20}
/>`
    },
    {
      id: 'star-border',
      name: 'Star Border',
      description: 'Animated star-shaped border with gradient colors',
      category: 'animations',
      component: StarBorder,
      props: {
        children: <span className="text-white font-bold p-4">Star Border Content</span>,
        speed: 5,
        gradientColors: ['#ff0080', '#7928ca', '#0070f3']
      },
      code: `import { StarBorder } from '@/lib/components/react-bits';

<StarBorder 
  speed={5}
  gradientColors={['#ff0080', '#7928ca', '#0070f3']}
>
  <span>Your content here</span>
</StarBorder>`
    },
    {
      id: 'noise',
      name: 'Noise Overlay',
      description: 'Animated noise texture overlay effect',
      category: 'animations',
      component: Noise,
      props: {
        opacity: 0.1,
        scale: 1,
        speed: 1
      },
      code: `import { Noise } from '@/lib/components/react-bits';

<Noise 
  opacity={0.1}
  scale={1}
  speed={1}
/>`
    },
    {
      id: 'metaballs',
      name: 'MetaBalls',
      description: 'Fluid metaball animation with organic blob shapes',
      category: 'animations',
      component: MetaBalls,
      props: {
        ballCount: 4,
        ballColor: '#8b5cf6',
        ballSize: 40,
        speed: 1,
        threshold: 0.6
      },
      code: `import { MetaBalls } from '@/lib/components/react-bits';

<MetaBalls 
  ballCount={4}
  ballColor="#8b5cf6"
  ballSize={40}
  speed={1}
  threshold={0.6}
/>`
    },
    // Backgrounds
    {
      id: 'dot-grid',
      name: 'Dot Grid',
      description: 'Animated dot grid background with customizable spacing and colors',
      category: 'backgrounds',
      component: DotGrid,
      props: {
        dotSize: 2,
        dotColor: '#ffffff',
        spacing: 30,
        opacity: 0.3,
        className: 'w-full h-64'
      },
      code: `import { DotGrid } from '@/lib/components/react-bits';

<DotGrid 
  dotSize={2}
  dotColor="#ffffff"
  spacing={30}
  opacity={0.3}
  className="w-full h-64"
/>`
    },
    {
      id: 'particles',
      name: 'Particles Background',
      description: 'Floating particles with customizable movement',
      category: 'backgrounds',
      component: Particles,
      props: {
        particleCount: 50,
        particleColor: '#ffffff',
        particleSize: 2,
        speed: 1,
        opacity: 0.6
      },
      code: `import { Particles } from '@/lib/components/react-bits';

<Particles 
  particleCount={50}
  particleColor="#ffffff"
  particleSize={2}
  speed={1}
  opacity={0.6}
/>`
    },
    {
      id: 'waves',
      name: 'Animated Waves',
      description: 'Smooth wave animation background',
      category: 'backgrounds',
      component: Waves,
      props: {
        waveColor: '#3b82f6',
        waveHeight: 50,
        waveSpeed: 0.02,
        waveCount: 3,
        opacity: 0.6
      },
      code: `import { Waves } from '@/lib/components/react-bits';

<Waves 
  waveColor="#3b82f6"
  waveHeight={50}
  waveSpeed={0.02}
  waveCount={3}
  opacity={0.6}
/>`
    }
  ];

  const [selectedComponent, setSelectedComponent] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Components', count: showcaseComponents.length },
    { id: 'text-animations', name: 'Text Animations', count: showcaseComponents.filter(c => c.category === 'text-animations').length },
    { id: 'components', name: 'Components', count: showcaseComponents.filter(c => c.category === 'components').length },
    { id: 'animations', name: 'Animations', count: showcaseComponents.filter(c => c.category === 'animations').length },
    { id: 'backgrounds', name: 'Backgrounds', count: showcaseComponents.filter(c => c.category === 'backgrounds').length }
  ];

  const filteredComponents = activeCategory === 'all' 
    ? showcaseComponents 
    : showcaseComponents.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onNavigate('home')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back
              </button>
              <div>
                <h1 className="text-2xl font-bold">React Bits</h1>
                <p className="text-gray-400 text-sm">Copy-paste React components</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              {filteredComponents.length} components
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Beautiful React Components
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            A collection of modern, animated React components that you can copy and paste into your projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-300">
            <div>
              <h3 className="font-medium text-white mb-2">🎨 Text Animations ({showcaseComponents.filter(c => c.category === 'text-animations').length})</h3>
              <p>Advanced text effects including glitch, shine, rotation, scrambling, gradients, and interactive focus effects.</p>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">🧩 Interactive Components ({showcaseComponents.filter(c => c.category === 'components').length})</h3>
              <p>Cards, grids, counters, docks, folders, lists and UI elements with mouse interactions and smooth animations.</p>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">🌟 Animations & Backgrounds ({showcaseComponents.filter(c => c.category === 'animations').length + showcaseComponents.filter(c => c.category === 'backgrounds').length})</h3>
              <p>Cursor effects, borders, noise overlays, metaballs, particles, waves and background patterns to enhance your designs.</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Components Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
              </div>
              
              {/* Component Preview */}
              <div className="bg-black rounded-lg p-4 mb-4 min-h-[120px] flex items-center justify-center relative overflow-hidden">
                <item.component {...item.props} />
              </div>
              
              <button
                onClick={() => setSelectedComponent(item)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
              >
                View Code
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Code Modal */}
      {selectedComponent && (
        <CodeModal
          component={selectedComponent}
          onClose={() => setSelectedComponent(null)}
        />
      )}
    </div>
  );
}