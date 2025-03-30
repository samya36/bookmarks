import React, { useState, useEffect } from 'react';
import { Search, Book, GraduationCap, Code, Wrench, Globe, Film, Lock } from 'lucide-react';

const PublicNavigation = () => {
  // 搜索状态管理
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // 控制响应式布局
  const [isMobile, setIsMobile] = useState(false);
  
  // 处理窗口尺寸变化
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // 资源分类数据
  const categories = [
    { id: 'all', name: '全部资源', icon: <Globe size={18} /> },
    { id: 'education', name: '教育学习', icon: <GraduationCap size={18} /> },
    { id: 'english', name: '英语学习', icon: <Book size={18} /> },
    { id: 'exam', name: '备考与考试', icon: <Book size={18} /> },
    { id: 'tools', name: '实用工具', icon: <Wrench size={18} /> },
    { id: 'programming', name: '编程与技术', icon: <Code size={18} /> },
    { id: 'resources', name: '学习资源', icon: <Book size={18} /> },
    { id: 'media', name: '影音娱乐', icon: <Film size={18} /> }
  ];
  
  // 完整资源数据
  const resources = [
    // 教育学习分类
    { 
      id: 1, 
      name: 'Crash Course', 
      url: 'https://crashcourse.org/', 
      description: '适合各学科入门学习的教学视频', 
      category: 'education',
      tags: ['学习视频', '知识点'] 
    },
    { 
      id: 2, 
      name: 'Wootube', 
      url: 'https://wootube.herokuapp.com/', 
      description: '数学学习资源网站', 
      category: 'education',
      tags: ['数学'] 
    },
    { 
      id: 3, 
      name: 'OmegaLearn', 
      url: 'https://omegalearning.com/', 
      description: '在线教育资源平台', 
      category: 'education',
      tags: ['课程资源'] 
    },
    { 
      id: 4, 
      name: 'Wolfram|Alpha', 
      url: 'https://www.wolframalpha.com/', 
      description: '计算知识引擎', 
      category: 'education',
      tags: ['计算工具', '数学'] 
    },
    { 
      id: 5, 
      name: 'Business | tutor2u', 
      url: 'https://www.tutor2u.net/business', 
      description: '商业学科教程平台', 
      category: 'education',
      tags: ['商业', '经济'] 
    },
    { 
      id: 6, 
      name: 'Khan Academy', 
      url: 'https://www.khanacademy.org/', 
      description: '免费教育平台，提供各类学科视频教程', 
      category: 'education',
      tags: ['免费课程', '多学科'] 
    },
    { 
      id: 7, 
      name: 'BBC Bitesize', 
      url: 'https://www.bbc.co.uk/bitesize', 
      description: 'BBC教育网站，覆盖多种学科', 
      category: 'education',
      tags: ['综合学习'] 
    },
    
    // 英语学习分类
    { 
      id: 8, 
      name: 'IELTS Online Tests', 
      url: 'https://ieltsonlinetests.com/', 
      description: '雅思在线练习与测试', 
      category: 'english',
      tags: ['雅思', '在线测试'] 
    },
    { 
      id: 9, 
      name: 'IELTS Listening Tests', 
      url: 'https://www.ieltslisteningtests.com/', 
      description: '雅思听力练习平台', 
      category: 'english',
      tags: ['雅思', '听力'] 
    },
    { 
      id: 10, 
      name: 'IELTS Liz', 
      url: 'https://ieltsliz.com/', 
      description: '雅思备考指导和技巧', 
      category: 'english',
      tags: ['雅思', '备考技巧'] 
    },
    { 
      id: 11, 
      name: 'IELTS Simon', 
      url: 'https://ieltssimon.com/', 
      description: '雅思写作和口语备考资源', 
      category: 'english',
      tags: ['雅思', '写作', '口语'] 
    },
    { 
      id: 12, 
      name: 'Cambridge Dictionary', 
      url: 'https://dictionary.cambridge.org/', 
      description: '剑桥词典查询', 
      category: 'english',
      tags: ['词典', '语言学习'] 
    },
    { 
      id: 13, 
      name: 'Write & Improve', 
      url: 'https://writeandimprove.com/', 
      description: '英语写作练习与评估平台', 
      category: 'english',
      tags: ['写作', '在线评估'] 
    },
    { 
      id: 14, 
      name: 'YouGlish', 
      url: 'https://youglish.com/', 
      description: '查找单词在YouTube视频中的发音', 
      category: 'english',
      tags: ['发音', '词汇学习'] 
    },
    
    // 备考与考试分类
    { 
      id: 15, 
      name: 'Physics & Maths Tutor', 
      url: 'https://www.physicsandmathstutor.com/', 
      description: '物理和数学备考资源', 
      category: 'exam',
      tags: ['物理', '数学', '备考资料'] 
    },
    { 
      id: 16, 
      name: 'Save My Exams', 
      url: 'https://www.savemyexams.co.uk/', 
      description: '考试复习资料和练习题', 
      category: 'exam',
      tags: ['复习资料', '练习题'] 
    },
    { 
      id: 17, 
      name: 'XtremePapers', 
      url: 'https://www.xtremexpapers.com/', 
      description: '历年考试试题和资源', 
      category: 'exam',
      tags: ['历年试题', '复习资料'] 
    },
    { 
      id: 18, 
      name: 'Revision Village', 
      url: 'https://www.revisionvillage.com/', 
      description: 'IB数学考试资源', 
      category: 'exam',
      tags: ['IB', '数学', '备考'] 
    },
    { 
      id: 19, 
      name: 'A Level Physics Online', 
      url: 'https://www.alevelphysicsonline.com/', 
      description: 'A Level物理在线学习资源', 
      category: 'exam',
      tags: ['A Level', '物理'] 
    },
    { 
      id: 20, 
      name: 'A Level Biology', 
      url: 'https://alevelbiology.co.uk/', 
      description: 'A Level生物学习资源', 
      category: 'exam',
      tags: ['A Level', '生物'] 
    },
    { 
      id: 21, 
      name: 'Isaac Physics', 
      url: 'https://www.isaacphysics.org/', 
      description: '物理在线学习与问题解决平台', 
      category: 'exam',
      tags: ['物理', '在线学习'] 
    },
    
    // 实用工具分类
    { 
      id: 22, 
      name: 'Claude AI', 
      url: 'https://claude.ai/', 
      description: 'AI助手和对话工具', 
      category: 'tools',
      tags: ['AI', '对话助手'] 
    },
    { 
      id: 23, 
      name: 'ChatGPT', 
      url: 'https://chat.openai.com/', 
      description: 'OpenAI开发的AI聊天机器人', 
      category: 'tools',
      tags: ['AI', '聊天助手'] 
    },
    { 
      id: 24, 
      name: 'DeepSeek', 
      url: 'https://www.deepseek.com/', 
      description: '深度搜索和人工智能平台', 
      category: 'tools',
      tags: ['AI', '搜索工具'] 
    },
    { 
      id: 25, 
      name: 'Perplexity', 
      url: 'https://www.perplexity.ai/', 
      description: 'AI搜索和问答引擎', 
      category: 'tools',
      tags: ['AI', '搜索'] 
    },
    { 
      id: 26, 
      name: 'Midjourney', 
      url: 'https://www.midjourney.com/', 
      description: 'AI图像生成工具', 
      category: 'tools',
      tags: ['AI', '图像生成'] 
    },
    { 
      id: 27, 
      name: 'Adobe Firefly', 
      url: 'https://firefly.adobe.com/', 
      description: 'Adobe的生成式AI创意工具', 
      category: 'tools',
      tags: ['AI', '创意工具'] 
    },
    { 
      id: 28, 
      name: 'Smallpdf', 
      url: 'https://smallpdf.com/', 
      description: 'PDF在线处理工具', 
      category: 'tools',
      tags: ['PDF', '文档处理'] 
    },
    { 
      id: 29, 
      name: 'TinyPNG', 
      url: 'https://tinypng.com/', 
      description: '图片压缩工具', 
      category: 'tools',
      tags: ['图像压缩', '优化'] 
    },
    
    // 编程与技术分类
    { 
      id: 30, 
      name: 'GitHub', 
      url: 'https://github.com/', 
      description: '代码托管和协作平台', 
      category: 'programming',
      tags: ['代码托管', '开源'] 
    },
    { 
      id: 31, 
      name: 'freeCodeCamp', 
      url: 'https://www.freecodecamp.org/', 
      description: '免费学习编程的平台', 
      category: 'programming',
      tags: ['编程学习', '免费资源'] 
    },
    { 
      id: 32, 
      name: 'Kaggle', 
      url: 'https://www.kaggle.com/', 
      description: '数据科学和机器学习社区', 
      category: 'programming',
      tags: ['数据科学', '机器学习'] 
    },
    { 
      id: 33, 
      name: 'Python for Everybody', 
      url: 'https://py4e.com/', 
      description: 'Python编程入门教程', 
      category: 'programming',
      tags: ['Python', '编程入门'] 
    },
    { 
      id: 34, 
      name: 'MIT Computational Thinking', 
      url: 'https://computationalthinking.mit.edu/', 
      description: 'MIT计算思维课程', 
      category: 'programming',
      tags: ['计算思维', '编程基础'] 
    },
    
    // 学习资源分类
    { 
      id: 35, 
      name: 'OpenStax', 
      url: 'https://openstax.org/', 
      description: '免费开放的教科书资源', 
      category: 'resources',
      tags: ['免费教科书', '学习资源'] 
    },
    { 
      id: 36, 
      name: 'Z-Library', 
      url: 'https://z-lib.org/', 
      description: '电子书资源库', 
      category: 'resources',
      tags: ['电子书', '文献资源'] 
    },
    { 
      id: 37, 
      name: 'r/IGCSE Resources', 
      url: 'https://www.reddit.com/r/IGCSE/', 
      description: 'IGCSE学习资源社区', 
      category: 'resources',
      tags: ['IGCSE', '学习资源'] 
    },
    { 
      id: 38, 
      name: 'IB Documents Repository', 
      url: 'https://ib-documents.com/', 
      description: 'IB课程文档资源库', 
      category: 'resources',
      tags: ['IB', '文档资源'] 
    },
    { 
      id: 39, 
      name: 'ChemGuide', 
      url: 'https://www.chemguide.co.uk/', 
      description: '化学学习指南网站', 
      category: 'resources',
      tags: ['化学', '学习指南'] 
    },
    
    // 影音娱乐分类
    { 
      id: 40, 
      name: 'YouTube', 
      url: 'https://www.youtube.com/', 
      description: '视频分享平台', 
      category: 'media',
      tags: ['视频', '学习资源'] 
    },
    { 
      id: 41, 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/', 
      description: '短视频平台', 
      category: 'media',
      tags: ['短视频', '娱乐'] 
    },
    { 
      id: 42, 
      name: 'SoundCloud', 
      url: 'https://soundcloud.com/', 
      description: '音乐分享平台', 
      category: 'media',
      tags: ['音乐', '播客'] 
    },
    { 
      id: 43, 
      name: 'Spotify', 
      url: 'https://www.spotify.com/', 
      description: '音乐流媒体服务', 
      category: 'media',
      tags: ['音乐', '播客'] 
    },
    { 
      id: 44, 
      name: 'TED Talks', 
      url: 'https://www.ted.com/', 
      description: '高质量演讲视频平台', 
      category: 'media',
      tags: ['演讲', '知识分享'] 
    }
  ];
  
  // 根据当前分类和搜索词过滤资源
  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // 按照分类对过滤后的资源进行分组
  const groupedResources = {};
  filteredResources.forEach(resource => {
    if (!groupedResources[resource.category]) {
      groupedResources[resource.category] = [];
    }
    groupedResources[resource.category].push(resource);
  });
  
  // 获取类别名称
  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-blue-500" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">知识导航站</h1>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 搜索框 */}
        <div className="mb-8">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out sm:text-sm"
              placeholder="搜索资源..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* 分类过滤 */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md text-sm font-medium focus:outline-none transition-colors duration-200 flex items-center space-x-1 ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* 资源列表 */}
        <div className="space-y-8">
          {Object.keys(groupedResources).length > 0 ? (
            Object.keys(groupedResources).map(categoryId => (
              <div key={categoryId} className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                    {categories.find(c => c.id === categoryId)?.icon}
                    <span className="ml-2">{getCategoryName(categoryId)}</span>
                  </h3>
                </div>
                <ul className="divide-y divide-gray-200">
                  {groupedResources[categoryId].map(resource => (
                    <li key={resource.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition duration-150">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-blue-600 truncate">{resource.name}</p>
                          <div className="ml-2 flex-shrink-0 flex">
                            {resource.tags.map((tag, index) => (
                              <span key={index} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 mr-1">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="text-sm text-gray-500">{resource.description}</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">未找到相关资源</h3>
              <p className="mt-1 text-sm text-gray-500">尝试使用其他关键词或清除筛选条件。</p>
              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                >
                  清除筛选
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">© 2025 个人知识导航站 | 精选实用资源收藏</p>
        </div>
      </footer>
    </div>
  );
};

export default PublicNavigation;