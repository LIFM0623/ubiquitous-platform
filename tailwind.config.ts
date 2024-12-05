import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        // className 中无法设置  实现layout页面的标题颜色渐变
        'custom-blue-start': 'rgba(7, 152, 216, 1)',
        'custom-blue-end': 'rgba(9, 255, 247, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
