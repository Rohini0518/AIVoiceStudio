export interface QuickAction {
  title: string;
  description: string;
  gradient: string;
  href: string;
};

export const quickActions: QuickAction[] = [
  {
    title: "Narrate a Story",
    description: "Bring characters to life with expressive AI narration",
    gradient: "from-cyan-400 to-cyan-50",
    href: "/text-to-speech?text=In a village tucked between mist-covered mountains, there lived an old clockmaker whose clocks never told the right time — but they always told the truth. One rainy evening, a stranger walked in and asked for a clock that could show him his future.",
  },
 {
  title: "Podcast Intro",
  description: "Generate a professional introduction for your podcast",
  gradient: "from-violet-500 to-fuchsia-400",
  href: "/text-to-speech?text=Welcome to Voice Studio, the podcast where creativity meets artificial intelligence. In today's episode, we'll explore how AI voice technology is transforming content creation for creators, businesses, and storytellers around the world.",
},
{
  title: "Product Advertisement",
  description: "Create a persuasive voiceover for a product launch",
  gradient: "from-emerald-500 to-lime-400",
  href: "/text-to-speech?text=Introducing the all-new SmartBottle, designed to keep your drinks at the perfect temperature all day. Stay hydrated, stay healthy, and experience innovation like never before. Order yours today.",
},
{
  title: "Motivational Speech",
  description: "Inspire your audience with an energetic speech",
  gradient: "from-orange-500 to-yellow-400",
  href: "/text-to-speech?text=Every great achievement begins with a single decision to try. Believe in yourself, embrace every challenge, and remember that success belongs to those who never give up on their dreams.",
},
{
  title: "News Bulletin",
  description: "Read the latest headlines with a professional news voice",
  gradient: "from-blue-600 to-sky-400",
  href: "/text-to-speech?text=Good evening. Here are today's top headlines. Scientists have announced a breakthrough in renewable energy technology, while global markets showed steady growth following positive economic reports.",
},
{
  title: "Meditation Guide",
  description: "Generate a calm and relaxing guided meditation",
  gradient: "from-teal-500 to-cyan-400",
  href: "/text-to-speech?text=Close your eyes and take a slow, deep breath. Allow your shoulders to relax and let every breath bring a sense of peace. Focus only on the present moment as your mind becomes calm and clear.",
},
];