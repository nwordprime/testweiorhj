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
  const [selectedComponent, setSelectedComponent] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const components = [
    // Text Animations
    {
      id: 'glitch-text',
      name: 'Glitch Text',
      description: 'Cyberpunk-style glitch effect with customizable colors',
      category: 'text-animations',
      component: GlitchText,
      props: {
        text: 'GLITCH EFFECT',
        fontSize: '2rem',
        fontWeight: '900',
        color: '#ffffff',
        glitchColor1: '#ff0080',
        glitchColor2: '#00ff80',
        animationSpeed: 2
      },
      code: `import { GlitchText } from '@/lib/components/react-bits';

<GlitchText 
  text="GLITCH EFFECT"
  fontSize="2rem"
  fontWeight="900"
  color="#ffffff"
  glitchColor1="#ff0080"
  glitchColor2="#00ff80"
  animationSpeed={2}
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
        animationSpeed: 3
      },
      code: `import { ShinyText } from '@/lib/components/react-bits';

<ShinyText 
  text="SHINY TEXT"
  fontSize="2.5rem"
  fontWeight="900"
  color="#ffffff"
  shineColor="#ffd700"
  animationSpeed={3}
/>`
    },
    {
      id: 'rotating-text',
      name: 'Rotating Text',
      description: 'Smooth word rotation with fade transitions',
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
      description: 'Interactive card with spotlight effect that follows cursor',
      category: 'components',
      component: SpotlightCard,
      props: {
        className: 'w-64 h-40 bg-gray-800 border border-gray-700 rounded-lg p-6',
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
  className="w-64 h-40 bg-gray-800 border border-gray-700 rounded-lg p-6"
  spotlightColor="rgba(255, 255, 255, 0.1)"
>
  <h3 className="text-white font-bold mb-2">Spotlight Card</h3>
  <p className="text-gray-300 text-sm">Hover to see the spotlight effect</p>
</SpotlightCard>`
    },
    {
      id: 'magic-bento',
      name: 'Magic Bento',
      description: 'Animated bento grid with hover effects and smooth transitions',
      category: 'components',
      component: MagicBento,
      props: {
        items: [
          { id: '1', title: 'Item 1', content: 'Content 1', color: '#ff6b6b' },
          { id: '2', title: 'Item 2', content: 'Content 2', color: '#4ecdc4' },
          { id: '3', title: 'Item 3', content: 'Content 3', color: '#45b7d1' },
          { id: '4', title: 'Item 4', content: 'Content 4', color: '#96ceb4' }
        ],
        columns: 2,
        gap: 16,
        borderRadius: 12,
        globalSpotlight: true
      },
      code: `import { MagicBento } from '@/lib/components/react-bits';

<MagicBento 
  items={[
    { id: '1', title: 'Item 1', content: 'Content 1', color: '#ff6b6b' },
    { id: '2', title: 'Item 2', content: 'Content 2', color: '#4ecdc4' }
  ]}
  columns={2}
  gap={16}
  borderRadius={12}
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
      description: 'Animated blob that follows the cursor with smooth trailing',
      category: 'animations',
      component: BlobCursor,
      props: {
        size: 40,
        color: '#3b82f6',
        opacity: 0.6,
        blur: 20,
        trail: true
      },
      code: `import { BlobCursor } from '@/lib/components/react-bits';

<BlobCursor 
  size={40}
  color="#3b82f6"
  opacity={0.6}
  blur={20}
  trail={true}
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
      description: 'Animated dot grid background with customizable spacing',
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

  const categories = [
    { id: 'all', name: 'All Components' },
    { id: 'text-animations', name: 'Text Animations' },
    { id: 'components', name: 'Components' },
    { id: 'animations', name: 'Animations' },
    { id: 'backgrounds', name: 'Backgrounds' }
  ];

  const filteredComponents = components.filter(comp => {
    const matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         comp.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || comp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">React Bits Showcase</h1>
            <p className="text-gray-400">Beautiful, reusable React components and animations</p>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            ← Back to Home
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredComponents.map((comp) => {
            const Component = comp.component;
            return (
              <div key={comp.id} className="bg-gray-800 rounded-xl overflow-hidden">
                {/* Preview */}
                <div className="bg-gray-900 rounded-xl p-6 mb-4 min-h-[200px] flex items-center justify-center overflow-hidden">
                  {comp.id === 'noise' ? (
                    <div className="relative w-full h-full bg-gray-800 rounded-lg overflow-hidden">
                      <Component {...comp.props} />
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                        Noise Overlay Effect
                      </div>
                    </div>
                  ) : comp.id === 'metaballs' ? (
                    <div className="w-full h-full bg-black rounded-lg overflow-hidden">
                      <Component {...comp.props} />
                    </div>
                  ) : comp.id === 'waves' ? (
                    <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden">
                      <Component {...comp.props} />
                    </div>
                  ) : comp.id === 'particles' ? (
                    <div className="w-full h-full bg-gray-900 rounded-lg overflow-hidden">
                      <Component {...comp.props} />
                    </div>
                  ) : comp.id === 'animated-list' ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <Component {...comp.props} />
                    </div>
                  ) : (
                    <Component {...comp.props} />
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{comp.name}</h3>
                    <span className="px-2 py-1 bg-blue-600 text-xs rounded-full">
                      {categories.find(c => c.id === comp.category)?.name}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{comp.description}</p>
                  <button
                    onClick={() => setSelectedComponent(comp)}
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    View Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No components found matching your search.</p>
          </div>
        )}
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