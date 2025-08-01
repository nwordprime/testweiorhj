import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Type, 
  Layout, 
  Palette,
  Play,
  Pause,
  RotateCcw,
  Eye,
  Code,
  Copy,
  Check,
  Download
} from 'lucide-react';
import { 
  GlitchText, 
  ShinyText, 
  RotatingText,
  SpotlightCard,
  BentoCard,
  MagicBento,
  BlobCursor,
  StarBorder,
  DotGrid
} from '../lib/components/react-bits';
import { CodeModal } from './CodeModal';

interface ReactBitsShowcaseProps {
  onNavigate: (view: string) => void;
}

type ComponentCategory = 'all' | 'text-animations' | 'components' | 'animations' | 'backgrounds';

interface ShowcaseComponent {
  id: string;
  name: string;
  description: string;
  category: ComponentCategory;
  component: React.ComponentType<any>;
  props: any;
  code: string;
}

export const ReactBitsShowcase: React.FC<ReactBitsShowcaseProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<ComponentCategory>('all');
  const [selectedComponent, setSelectedComponent] = useState<ShowcaseComponent | null>(null);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const showcaseComponents: ShowcaseComponent[] = [
    // Text Animations
    {
      id: 'glitch-text',
      name: 'Glitch Text',
      description: 'Cyberpunk-style glitch effect with customizable colors and intensity',
      category: 'text-animations',
      component: GlitchText,
      props: {
        text: 'GLITCH EFFECT',
        fontSize: '3rem',
        fontWeight: '900',
        color: '#ffffff',
        glitchIntensity: 8,
        glitchSpeed: 2,
        glitchColors: { before: '#00ffff', after: '#ff0000' }
      },
      code: `import { GlitchText } from '@/lib/components/react-bits';

<GlitchText 
  text="GLITCH EFFECT"
  fontSize="3rem"
  fontWeight="900"
  color="#ffffff"
  glitchIntensity={8}
  glitchSpeed={2}
  glitchColors={{ before: '#00ffff', after: '#ff0000' }}
/>`
    },
    {
      id: 'shiny-text',
      name: 'Shiny Text',
      description: 'Smooth shine animation that sweeps across text',
      category: 'text-animations',
      component: ShinyText,
      props: {
        text: 'SHINY TEXT',
        fontSize: '3rem',
        fontWeight: '900',
        color: '#b5b5b5a4',
        shineColor: 'rgba(255, 255, 255, 0.8)',
        animationSpeed: 3
      },
      code: `import { ShinyText } from '@/lib/components/react-bits';

<ShinyText 
  text="SHINY TEXT"
  fontSize="3rem"
  fontWeight="900"
  color="#b5b5b5a4"
  shineColor="rgba(255, 255, 255, 0.8)"
  animationSpeed={3}
/>`
    },
    {
      id: 'rotating-text',
      name: 'Rotating Text',
      description: 'Cycle through different words with smooth transitions',
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
    // Components
    {
      id: 'spotlight-card',
      name: 'Spotlight Card',
      description: 'Interactive card with mouse-following spotlight effect',
      category: 'components',
      component: SpotlightCard,
      props: {
        children: (
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Spotlight Card</h3>
            <p className="text-gray-300">Move your mouse over this card to see the spotlight effect in action.</p>
          </div>
        ),
        spotlightColor: 'rgba(59, 130, 246, 0.1)',
        className: 'w-80 h-48'
      },
      code: `import { SpotlightCard } from '@/lib/components/react-bits';

<SpotlightCard 
  spotlightColor="rgba(59, 130, 246, 0.1)"
  className="w-80 h-48"
>
  <div className="text-white">
    <h3 className="text-xl font-bold mb-2">Spotlight Card</h3>
    <p className="text-gray-300">Content goes here</p>
  </div>
</SpotlightCard>`
    },
    {
      id: 'magic-bento',
      name: 'Magic Bento',
      description: 'Responsive bento grid with interactive glow effects',
      category: 'components',
      component: MagicBento,
      props: {
        cards: [
          {
            children: (
              <div className="text-white">
                <h3 className="text-lg font-bold">Card 1</h3>
                <p className="text-sm text-gray-300">First bento card</p>
              </div>
            ),
            borderGlow: true
          },
          {
            children: (
              <div className="text-white">
                <h3 className="text-lg font-bold">Card 2</h3>
                <p className="text-sm text-gray-300">Second bento card</p>
              </div>
            ),
            borderGlow: true
          },
          {
            children: (
              <div className="text-white">
                <h3 className="text-lg font-bold">Card 3</h3>
                <p className="text-sm text-gray-300">Third bento card</p>
              </div>
            ),
            borderGlow: true
          }
        ],
        globalSpotlight: true
      },
      code: `import { MagicBento } from '@/lib/components/react-bits';

<MagicBento 
  cards={[
    {
      children: <div>Card 1 content</div>,
      borderGlow: true
    },
    {
      children: <div>Card 2 content</div>,
      borderGlow: true
    }
  ]}
  globalSpotlight={true}
/>`
    },
    // Animations
    {
      id: 'blob-cursor',
      name: 'Blob Cursor',
      description: 'Animated blob that follows the mouse cursor',
      category: 'animations',
      component: BlobCursor,
      props: {
        size: 40,
        color: '#3b82f6',
        blur: 20,
        opacity: 0.8
      },
      code: `import { BlobCursor } from '@/lib/components/react-bits';

<BlobCursor 
  size={40}
  color="#3b82f6"
  blur={20}
  opacity={0.8}
/>`
    },
    {
      id: 'star-border',
      name: 'Star Border',
      description: 'Animated gradient border with star-like movement',
      category: 'animations',
      component: StarBorder,
      props: {
        children: <span className="text-white font-bold">Star Border Effect</span>,
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
    // Backgrounds
    {
      id: 'dot-grid',
      name: 'Dot Grid',
      description: 'Animated dot grid background pattern',
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
    }
  ];

  const categories = [
    { id: 'all', label: 'All Components', count: showcaseComponents.length },
    { id: 'text-animations', label: 'Text Animations', count: showcaseComponents.filter(c => c.category === 'text-animations').length },
    { id: 'components', label: 'Components', count: showcaseComponents.filter(c => c.category === 'components').length },
    { id: 'animations', label: 'Animations', count: showcaseComponents.filter(c => c.category === 'animations').length },
    { id: 'backgrounds', label: 'Backgrounds', count: showcaseComponents.filter(c => c.category === 'backgrounds').length }
  ];

  const filteredComponents = activeCategory === 'all' 
    ? showcaseComponents 
    : showcaseComponents.filter(c => c.category === activeCategory);

  const handleShowCode = (component: ShowcaseComponent) => {
    setSelectedComponent(component);
    setShowCodeModal(true);
  };

  const copyToClipboard = async () => {
    if (!selectedComponent) return;
    
    try {
      await navigator.clipboard.writeText(selectedComponent.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const downloadCode = () => {
    if (!selectedComponent) return;
    
    const blob = new Blob([selectedComponent.code], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedComponent.id}.tsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center space-x-2 text-gray-400 hover:text-gray-200 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">React Bits Showcase</h1>
          </div>
          
          <p className="text-gray-400 text-lg max-w-3xl">
            Explore the complete collection of animated React components from react-bits, 
            now integrated into KauryUI with full customization options.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as ComponentCategory)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredComponents.map((comp, index) => {
            const Component = comp.component;
            
            return (
              <div
                key={comp.id}
                className="group bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Component Preview */}
                <div className="bg-gray-900 rounded-xl p-6 mb-4 min-h-[200px] flex items-center justify-center overflow-hidden">
                  <Component {...comp.props} />
                </div>

                {/* Component Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{comp.name}</h3>
                    <div className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full capitalize">
                      {comp.category.replace('-', ' ')}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {comp.description}
                  </p>

                  <div className="flex items-center space-x-2 pt-2">
                    <button
                      onClick={() => handleShowCode(comp)}
                      className="flex items-center space-x-1 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
                    >
                      <Code className="w-3 h-3" />
                      <span>View Code</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setSelectedComponent(comp);
                        copyToClipboard();
                      }}
                      className="flex items-center space-x-1 bg-gray-700 text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                    >
                      {copied && selectedComponent?.id === comp.id ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                      <span>Copy</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-semibold text-white">About React Bits Integration</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-300">
            <div>
              <h3 className="font-medium text-white mb-2">🎨 Text Animations</h3>
              <p>Advanced text effects including glitch, shine, rotation, and more with full customization.</p>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">🧩 Interactive Components</h3>
              <p>Cards, grids, and UI elements with mouse interactions and smooth animations.</p>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">🌟 Animations & Backgrounds</h3>
              <p>Cursor effects, borders, and background patterns to enhance your designs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Effects */}
      <BlobCursor size={30} color="#8b5cf6" blur={15} opacity={0.6} />

      {/* Code Modal */}
      {selectedComponent && (
        <CodeModal
          isOpen={showCodeModal}
          onClose={() => setShowCodeModal(false)}
          title={`${selectedComponent.name} - React Component`}
          code={selectedComponent.code}
          componentName={selectedComponent.name}
        />
      )}
    </div>
  );
};