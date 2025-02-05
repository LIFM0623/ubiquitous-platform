import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        // className 中无法设置  实现layout页面的标题颜色渐变
        'custom-blue-start': 'rgba(7, 152, 216, 1)',
        'custom-blue-end': 'rgba(9, 255, 247, 1)',
        'custom-tabs-yellow': 'rgba(243, 204, 48, 1)',
        // scrollbar 进度条样式颜色
        'theme-bg': '#f1f1f1',
      },
      spacing: {
        'scrollbar-width': '5px', // 用于滚动条宽度
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.scrollbar': {
          'scrollbar-width': 'thin',
          'scrollbar-color': 'gray transparent', // 设置滚动条颜色
        },
        '.scrollbar::-webkit-scrollbar': {
          width: '5px', // 设置滚动条宽度
          height: '5px', // 设置水平滚动条高度
        },
        '.scrollbar::-webkit-scrollbar-track': {
          backgroundColor: '#f1f1f1', // 背景颜色
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          borderRadius: '3px', // 圆角
          backgroundColor: 'gray', // 滚动条滑块颜色
        },
        '.scrollbar::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555', // 鼠标悬停时颜色
        },
      });
    },
  ],
};

export default config;
