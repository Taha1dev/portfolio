import IconCloud from '@/components/magicui/icon-cloud';
import { NeonGradientCard } from '../magicui/neon-gradient-card';

const slugs = [
  'typescript',
  'javascript',
  'react',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'figma',
  'axios',
  'angulardotjs',
  'mui',
  'pug',
  'tailwindcss',
  'pnpm',
  'json',
  'redux'
];

export function IconCloudDemo() {
  return (
    <NeonGradientCard className="items-center justify-center text-center">
    <div className="relative flex h-full w-full max-w-[42rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
    </NeonGradientCard>
  );
}
