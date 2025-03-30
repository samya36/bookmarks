import React, { useState, useEffect } from 'react';
import { Search, Check, Clock, Star, BookOpen, PenTool, Video, Briefcase, Lock, Unlock, AlertCircle, Tag } from 'lucide-react';

const PrivateNavigation = () => {
  // 状态管理
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  
  // 检查本地存储中的认证状态
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);
  
  // 验证密码 
  const handleLogin = () => {
    // 正确密码为 "knowledge2024"
    if (password === 'knowledge2024') {
      setIsAuthenticated(true);
      setPasswordError('');
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      setPasswordError('密码不正确，请重试');
    }
  };
  
  // 退出登录
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };
  
  // 过滤器类别
  const filters = [
    { id: 'all', name: '全部内容', icon: <BookOpen size={16} /> },
    { id: 'learning', name: '学习资源', icon: <BookOpen size={16} /> },
    { id: 'projects', name: '项目案例', icon: <Briefcase size={16} /> },
    { id: 'social-media', name: '社媒运营', icon: <PenTool size={16} /> },
    { id: 'ai-tools', name: 'AI工具', icon: <Star size={16} /> },
    { id: 'urgent', name: '紧急事项', icon: <AlertCircle size={16} /> },
    { id: 'completed', name: '已完成', icon: <Check size={16} /> }
  ];
  
  // 待办事项分类
  const todoCategories = [
    { 
      id: 'reading', 
      name: '阅读与学习计划', 
      icon: <BookOpen size={18} className="text-blue-500" /> 
    },
    { 
      id: 'social-media', 
      name: '社媒与运营项目', 
      icon: <PenTool size={18} className="text-purple-500" /> 
    },
    { 
      id: 'ai-tools', 
      name: 'AI工具与实验', 
      icon: <Star size={18} className="text-yellow-500" /> 
    },
    { 
      id: 'project-cases', 
      name: '项目案例分析', 
      icon: <Briefcase size={18} className="text-green-500" /> 
    },
    { 
      id: 'web-courses', 
      name: '线上课程与视频', 
      icon: <Video size={18} className="text-red-500" /> 
    }
  ];
  
  // 完整待办事项数据
  const todoItems = [
    // 阅读与学习计划
    {
      id: 1,
      title: 'Managing Client Expectations | Coursera',
      url: 'https://www.coursera.org/learn/managing-client-expectations-seo',
      description: '学习如何有效管理客户期望的课程',
      category: 'reading',
      tags: ['SEO', '职业发展'],
      urgent: false,
      completed: false,
      dueDate: '2025-04-15',
      filters: ['learning']
    },
    {
      id: 2,
      title: 'Proving Your Value to Potential Clients | Coursera',
      url: 'https://www.coursera.org/learn/proving-value-seo',
      description: '学习如何向潜在客户证明自己的价值',
      category: 'reading',
      tags: ['营销', '客户关系'],
      urgent: true,
      completed: false,
      dueDate: '2025-04-10',
      filters: ['learning', 'urgent']
    },
    {
      id: 3,
      title: 'Scoping an SEO Project | Coursera',
      url: 'https://www.coursera.org/learn/scoping-seo-project',
      description: '学习如何规划和界定SEO项目范围',
      category: 'reading',
      tags: ['SEO', '项目管理'],
      urgent: false,
      completed: true,
      dueDate: '2025-03-28',
      filters: ['learning', 'completed']
    },
    {
      id: 4,
      title: 'A Clear Path for Marketers to Surviving Content Shock - Moz',
      url: 'https://moz.com/blog/clear-path-for-marketers-surviving-content-shock',
      description: '了解如何在内容饱和的环境中脱颖而出',
      category: 'reading',
      tags: ['内容营销', 'SEO']
    }
  ];
  
  // 根据当前过滤器筛选待办事项
  const filteredItems = todoItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || 
                        (activeFilter === 'urgent' && item.urgent) || 
                        (activeFilter === 'completed' && item.completed) ||
                        (item.filters && item.filters.includes(activeFilter));
                        
    const matchesSearch = searchTerm === '' || 
                        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
                        
    return matchesFilter && matchesSearch;
  });
  
  // 按分类对待办事项进行分组
  const groupedItems = {};
  filteredItems.forEach(item => {
    if (!groupedItems[item.category]) {
      groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
  });
  
  // 获取分类名称
  const getCategoryName = (categoryId) => {
    const category = todoCategories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };
  
  // 获取分类图标
  const getCategoryIcon = (categoryId) => {
    const category = todoCategories.find(c => c.id === categoryId);
    return category ? category.icon : <BookOpen size={18} />;
  };
  
  // 组件返回的 JSX
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Lock className="h-8 w-8 text-blue-500" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">个人待办清单</h1>
            </div>
            
            {isAuthenticated && (
              <div className="flex items-center">
                <button
                  onClick={handleLogout}
                  className="ml-4 px-3 py-1 text-sm text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center">
                    <Unlock className="h-4 w-4 mr-1" />
                    退出登录
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isAuthenticated ? (
          // 登录界面
          <div className="flex justify-center items-center">
            <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
              <div className="flex justify-center mb-6">
                <Lock className="h-12 w-12 text-blue-500" />
              </div>
              <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">访问私人待办清单</h2>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  请输入访问密码
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="输入密码"
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                />
                {passwordError && (
                  <p className="mt-2 text-sm text-red-600">{passwordError}</p>
                )}
              </div>
              <button
                onClick={handleLogin}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                确认
              </button>
              <p className="mt-4 text-sm text-gray-500 text-center">
                <span className="font-medium">提示：</span> 默认密码为 knowledge2024
              </p>
            </div>
          </div>
        ) : (
          // 已验证用户可见的待办清单内容
          <>
            {/* 搜索框 */}
            <div className="mb-8">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out sm:text-sm"
                  placeholder="搜索待办事项..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            {/* 过滤器 */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex space-x-2 pb-2">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    className={`px-4 py-2 rounded-md text-sm font-medium focus:outline-none transition-colors duration-200 flex items-center space-x-1 ${
                      activeFilter === filter.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    <span>{filter.icon}</span>
                    <span>{filter.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* 待办事项列表 */}
            <div className="space-y-8">
              {Object.keys(groupedItems).length > 0 ? (
                Object.keys(groupedItems).map(categoryId => (
                  <div key={categoryId} className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:px-6 bg-gray-50 border-b border-gray-200">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                        {getCategoryIcon(categoryId)}
                        <span className="ml-2">{getCategoryName(categoryId)}</span>
                      </h3>
                    </div>
                    <ul className="divide-y divide-gray-200">
                      {groupedItems[categoryId].map(item => (
                        <li key={item.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition duration-150">
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                {item.completed ? (
                                  <Check className="h-5 w-5 text-green-500 mr-2" />
                                ) : item.urgent ? (
                                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                                ) : (
                                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                                )}
                                <p className={`text-sm font-medium truncate ${
                                  item.completed ? 'text-gray-500 line-through' : 'text-blue-600'
                                }`}>
                                  {item.title}
                                </p>
                              </div>
                              <div className="ml-2 flex-shrink-0 flex">
                                {item.tags && item.tags.map((tag, index) => (
                                  <span key={index} className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 mr-1">
                                    {tag}
                                  </span>
                                ))}
                                {item.dueDate && (
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                    截止: {item.dueDate}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                              <div className="sm:flex">
                                <p className="text-sm text-gray-500">{item.description}</p>
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
                  <h3 className="mt-2 text-sm font-medium text-gray-900">未找到待办事项</h3>
                  <p className="mt-1 text-sm text-gray-500">尝试使用其他关键词或清除筛选条件。</p>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={() => {
                        setSearchTerm('');
                        setActiveFilter('all');
                      }}
                    >
                      清除筛选
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </main>
      
      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">© 2025 个人待办清单 | 私人内容管理</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivateNavigation;