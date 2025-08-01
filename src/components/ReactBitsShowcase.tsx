@@ .. @@
 import { 
   GlitchText, 
   ShinyText, 
   RotatingText,
+  CircularText,
+  ScrambledText,
+  GradientText,
+  TrueFocus,
+  VariableProximity,
   SpotlightCard,
-  BentoCard,
   MagicBento,
+  Counter,
+  Dock,
+  Folder,
+  AnimatedList,
   BlobCursor,
   StarBorder,
-  DotGrid
+  Noise,
+  MetaBalls,
+  DotGrid,
+  Particles,
+  Waves
 } from '../lib/components/react-bits';
 import { CodeModal } from './CodeModal';
+import { Home, Settings, User, Mail, Heart, Star } from 'lucide-react';
 
 interface ReactBitsShowcaseProps {
   onNavigate: (view: string) => void;
@@ .. @@
       code: `import { RotatingText } from '@/lib/components/react-bits';

<RotatingText 
  words={['AMAZING', 'BEAUTIFUL', 'STUNNING', 'INCREDIBLE']}
  duration={2000}
  fontSize="3rem"
  fontWeight="900"
  color="#ffffff"
/>`
+    },
+    {
+      id: 'circular-text',
+      name: 'Circular Text',
+      description: 'Text arranged in a rotating circle with customizable radius',
+      category: 'text-animations',
+      component: CircularText,
+      props: {
+        text: 'CIRCULAR TEXT ANIMATION',
+        radius: 80,
+        fontSize: '16px',
+        fontWeight: '900',
+        color: '#ffffff',
+        animationSpeed: 10
+      },
+      code: `import { CircularText } from '@/lib/components/react-bits';

<CircularText 
+  text="CIRCULAR TEXT ANIMATION"
+  radius={80}
+  fontSize="16px"
+  fontWeight="900"
+  color="#ffffff"
+  animationSpeed={10}
+/>`
+    },
+    {
+      id: 'scrambled-text',
+      name: 'Scrambled Text',
+      description: 'Matrix-style character scrambling effect on click or hover',
+      category: 'text-animations',
+      component: ScrambledText,
+      props: {
+        text: 'SCRAMBLED TEXT',
+        fontSize: '2rem',
+        fontWeight: '900',
+        color: '#00ff00',
+        scrambleSpeed: 50,
+        scrambleChars: '!@#$%^&*()_+-=[]{}|;:,.<>?',
+        triggerOnHover: true
+      },
+      code: `import { ScrambledText } from '@/lib/components/react-bits';

<ScrambledText 
+  text="SCRAMBLED TEXT"
+  fontSize="2rem"
+  fontWeight="900"
+  color="#00ff00"
+  scrambleSpeed={50}
+  scrambleChars="!@#$%^&*()_+-=[]{}|;:,.<>?"
+  triggerOnHover={true}
+/>`
+    },
+    {
+      id: 'gradient-text',
+      name: 'Gradient Text',
+      description: 'Animated gradient background with text overlay',
+      category: 'text-animations',
+      component: GradientText,
+      props: {
+        text: 'GRADIENT TEXT',
+        fontSize: '2.5rem',
+        fontWeight: '900',
+        gradientColors: ['#ff0080', '#7928ca', '#0070f3', '#00ff80'],
+        animationSpeed: 4,
+        backgroundColor: '#000000'
+      },
+      code: `import { GradientText } from '@/lib/components/react-bits';

<GradientText 
+  text="GRADIENT TEXT"
+  fontSize="2.5rem"
+  fontWeight="900"
+  gradientColors={['#ff0080', '#7928ca', '#0070f3', '#00ff80']}
+  animationSpeed={4}
+  backgroundColor="#000000"
+/>`
+    },
+    {
+      id: 'true-focus',
+      name: 'True Focus',
+      description: 'Focus effect with corner highlights on hover',
+      category: 'text-animations',
+      component: TrueFocus,
+      props: {
+        text: 'FOCUS ON ME',
+        fontSize: '2rem',
+        fontWeight: '900',
+        color: '#ffffff',
+        borderColor: '#3b82f6',
+        blurAmount: 2
+      },
+      code: `import { TrueFocus } from '@/lib/components/react-bits';

<TrueFocus 
+  text="FOCUS ON ME"
+  fontSize="2rem"
+  fontWeight="900"
+  color="#ffffff"
+  borderColor="#3b82f6"
+  blurAmount={2}
+/>`
+    },
+    {
+      id: 'variable-proximity',
+      name: 'Variable Proximity',
+      description: 'Font weight changes based on mouse proximity',
+      category: 'text-animations',
+      component: VariableProximity,
+      props: {
+        text: 'VARIABLE WEIGHT',
+        fontSize: '2rem',
+        fontWeight: '400',
+        color: '#ffffff',
+        maxDistance: 100
+      },
+      code: `import { VariableProximity } from '@/lib/components/react-bits';

<VariableProximity 
+  text="VARIABLE WEIGHT"
+  fontSize="2rem"
+  fontWeight="400"
+  color="#ffffff"
+  maxDistance={100}
+/>`
     },
     // Components
     {
@@ .. @@
   globalSpotlight={true}
 />`
+    },
+    {
+      id: 'counter',
+      name: 'Animated Counter',
+      description: 'Smooth number counting animation with easing',
+      category: 'components',
+      component: Counter,
+      props: {
+        value: 12345,
+        duration: 2000,
+        fontSize: '3rem',
+        fontWeight: '700',
+        color: '#ffffff'
+      },
+      code: `import { Counter } from '@/lib/components/react-bits';

<Counter 
+  value={12345}
+  duration={2000}
+  fontSize="3rem"
+  fontWeight="700"
+  color="#ffffff"
+/>`
+    },
+    {
+      id: 'dock',
+      name: 'Dock Navigation',
+      description: 'macOS-style dock with hover magnification effect',
+      category: 'components',
+      component: Dock,
+      props: {
+        items: [
+          { id: 'home', icon: <Home size={24} color="#fff" />, label: 'Home' },
+          { id: 'settings', icon: <Settings size={24} color="#fff" />, label: 'Settings' },
+          { id: 'user', icon: <User size={24} color="#fff" />, label: 'Profile' },
+          { id: 'mail', icon: <Mail size={24} color="#fff" />, label: 'Mail' },
+          { id: 'heart', icon: <Heart size={24} color="#fff" />, label: 'Favorites' }
+        ],
+        size: 48
+      },
+      code: `import { Dock } from '@/lib/components/react-bits';
+import { Home, Settings, User, Mail, Heart } from 'lucide-react';

<Dock 
+  items={[
+    { id: 'home', icon: <Home size={24} />, label: 'Home' },
+    { id: 'settings', icon: <Settings size={24} />, label: 'Settings' },
+    { id: 'user', icon: <User size={24} />, label: 'Profile' }
+  ]}
+  size={48}
+/>`
+    },
+    {
+      id: 'folder',
+      name: 'Interactive Folder',
+      description: 'Animated folder that opens to reveal papers inside',
+      category: 'components',
+      component: Folder,
+      props: {
+        isOpen: false,
+        folderColor: '#70a1ff',
+        folderBackColor: '#4785ff',
+        paperColors: ['#e6e6e6', '#f2f2f2', '#ffffff'],
+        size: 120
+      },
+      code: `import { Folder } from '@/lib/components/react-bits';

<Folder 
+  folderColor="#70a1ff"
+  folderBackColor="#4785ff"
+  paperColors={['#e6e6e6', '#f2f2f2', '#ffffff']}
+  size={120}
+/>`
+    },
+    {
+      id: 'animated-list',
+      name: 'Animated List',
+      description: 'Scrollable list with gradient overlays and smooth animations',
+      category: 'components',
+      component: AnimatedList,
+      props: {
+        items: [
+          { id: '1', content: 'First Item' },
+          { id: '2', content: 'Second Item' },
+          { id: '3', content: 'Third Item' },
+          { id: '4', content: 'Fourth Item' },
+          { id: '5', content: 'Fifth Item' },
+          { id: '6', content: 'Sixth Item' }
+        ],
+        itemHeight: 80,
+        maxHeight: 300,
+        showScrollbar: false
+      },
+      code: `import { AnimatedList } from '@/lib/components/react-bits';

<AnimatedList 
+  items={[
+    { id: '1', content: 'First Item' },
+    { id: '2', content: 'Second Item' },
+    { id: '3', content: 'Third Item' }
+  ]}
+  itemHeight={80}
+  maxHeight={300}
+  showScrollbar={false}
+/>`
     },
     // Animations
     {
@@ -
   speed={5}
   gradientColors={['#ff0080', '#7928ca', '#0070f3']}
 >
   <span>Your content here</span>
 </StarBorder>`
+    },
+    {
+      id: 'noise',
+      name: 'Noise Overlay',
+      description: 'Animated noise texture overlay effect',
+      category: 'animations',
+      component: Noise,
+      props: {
+        opacity: 0.1,
+        scale: 1,
+        speed: 1
+      },
+      code: `import { Noise } from '@/lib/components/react-bits';

<Noise 
+  opacity={0.1}
+  scale={1}
+  speed={1}
+/>`
+    },
+    {
+      id: 'metaballs',
+      name: 'MetaBalls',
+      description: 'Fluid metaball animation with organic blob shapes',
+      category: 'animations',
+      component: MetaBalls,
+      props: {
+        ballCount: 4,
+        ballColor: '#8b5cf6',
+        ballSize: 40,
+        speed: 1,
+        threshold: 0.6
+      },
+      code: `import { MetaBalls } from '@/lib/components/react-bits';

<MetaBalls 
+  ballCount={4}
+  ballColor="#8b5cf6"
+  ballSize={40}
+  speed={1}
+  threshold={0.6}
+/>`
     },
     // Backgrounds
     {
@@ -
   opacity={0.3}
   className="w-full h-64"
 />`
+    },
+    {
+      id: 'particles',
+      name: 'Particles Background',
+      description: 'Floating particles with customizable movement',
+      category: 'backgrounds',
+      component: Particles,
+      props: {
+        particleCount: 50,
+        particleColor: '#ffffff',
+        particleSize: 2,
+        speed: 1,
+        opacity: 0.6
+      },
+      code: `import { Particles } from '@/lib/components/react-bits';

<Particles 
+  particleCount={50}
+  particleColor="#ffffff"
+  particleSize={2}
+  speed={1}
+  opacity={0.6}
+/>`
+    },
+    {
+      id: 'waves',
+      name: 'Animated Waves',
+      description: 'Smooth wave animation background',
+      category: 'backgrounds',
+      component: Waves,
+      props: {
+        waveColor: '#3b82f6',
+        waveHeight: 50,
+        waveSpeed: 0.02,
+        waveCount: 3,
+        opacity: 0.6
+      },
+      code: `import { Waves } from '@/lib/components/react-bits';

<Waves 
+  waveColor="#3b82f6"
+  waveHeight={50}
+  waveSpeed={0.02}
+  waveCount={3}
+  opacity={0.6}
+/>`
     }
   ];