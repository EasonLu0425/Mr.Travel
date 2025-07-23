"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  Users,
  Receipt,
  TrendingUp,
  TrendingDown,
  Search,
  Bell,
  Settings,
  CreditCard,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  DollarSign
} from 'lucide-react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  // 模擬數據
  const user = {
    name: '王小明',
    avatar: 'WX',
    totalBalance: -1250,
    totalOwed: 2100,
    totalOwing: 3350
  };

  const recentGroups = [
    {
      id: 1,
      name: '日本旅遊',
      members: 5,
      totalExpenses: 45680,
      yourBalance: -1250,
      lastActivity: '2小時前',
      color: 'bg-blue-100'
    },
    {
      id: 2,
      name: '室友分帳',
      members: 3,
      totalExpenses: 12500,
      yourBalance: 450,
      lastActivity: '1天前',
      color: 'bg-green-100'
    },
    {
      id: 3,
      name: '聚餐群',
      members: 8,
      totalExpenses: 3200,
      yourBalance: -180,
      lastActivity: '3天前',
      color: 'bg-purple-100'
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      description: '便利商店購物',
      amount: -320,
      group: '室友分帳',
      paidBy: '李小華',
      date: '今天 14:30',
      category: 'shopping'
    },
    {
      id: 2,
      description: '晚餐 - 火鍋店',
      amount: -1200,
      group: '聚餐群',
      paidBy: '你',
      date: '昨天 19:45',
      category: 'food'
    },
    {
      id: 3,
      description: '電費分攤',
      amount: -850,
      group: '室友分帳',
      paidBy: '張小美',
      date: '3天前',
      category: 'utilities'
    },
    {
      id: 4,
      description: '機票',
      amount: -8500,
      group: '日本旅遊',
      paidBy: '你',
      date: '5天前',
      category: 'travel'
    }
  ];

  const quickActions = [
    { icon: <Plus className="h-5 w-5" />, label: '新增支出', color: 'bg-black' },
    { icon: <Users className="h-5 w-5" />, label: '建立群組', color: 'bg-gray-600' },
    { icon: <Receipt className="h-5 w-5" />, label: '掃描收據', color: 'bg-gray-600' },
    { icon: <CreditCard className="h-5 w-5" />, label: '結算', color: 'bg-gray-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-6 py-6 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">嗨，{user.name}！</h2>
          <p className="text-gray-600">這是你今天的分帳概況</p>
        </div>

        {/* Balance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className={`border-2 ${user.totalBalance < 0 ? 'border-red-200 bg-red-50' : user.totalBalance > 0 ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">總餘額</p>
                  <p className={`text-2xl font-bold ${user.totalBalance < 0 ? 'text-red-600' : user.totalBalance > 0 ? 'text-green-600' : 'text-gray-900'}`}>
                    ${Math.abs(user.totalBalance).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {user.totalBalance < 0 ? '你欠別人' : user.totalBalance > 0 ? '別人欠你' : '已結清'}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${user.totalBalance < 0 ? 'bg-red-100' : user.totalBalance > 0 ? 'bg-green-100' : 'bg-gray-100'}`}>
                  {user.totalBalance < 0 ?
                    <ArrowDownRight className="h-6 w-6 text-red-600" /> :
                    user.totalBalance > 0 ?
                      <ArrowUpRight className="h-6 w-6 text-green-600" /> :
                      <DollarSign className="h-6 w-6 text-gray-600" />
                  }
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">別人欠你</p>
                  <p className="text-2xl font-bold text-green-600">${user.totalOwed.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">來自 3 個群組</p>
                </div>
                <div className="p-3 rounded-full bg-green-100">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">你欠別人</p>
                  <p className="text-2xl font-bold text-red-600">${user.totalOwing.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">來自 2 個群組</p>
                </div>
                <div className="p-3 rounded-full bg-red-100">
                  <TrendingDown className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-black mb-4">快速操作</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className={`h-16 flex flex-col items-center space-y-2 ${index === 0
                  ? 'bg-black text-white border-black hover:bg-gray-800'
                  : 'hover:bg-gray-50'
                  }`}
              >
                {action.icon}
                <span className="text-sm">{action.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Groups */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>最近群組</CardTitle>
                <Button variant="ghost" size="sm">查看全部</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGroups.map((group) => (
                  <div key={group.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${group.color} rounded-lg flex items-center justify-center`}>
                        <Users className="h-6 w-6 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">{group.name}</h4>
                        <p className="text-sm text-gray-500">{group.members} 位成員 • {group.lastActivity}</p>
                        <p className="text-sm text-gray-600">總支出: ${group.totalExpenses.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${group.yourBalance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {group.yourBalance < 0 ? '-' : '+'}${Math.abs(group.yourBalance).toLocaleString()}
                      </p>
                      <Badge variant={group.yourBalance < 0 ? "destructive" : "default"} className="text-xs mt-1">
                        {group.yourBalance < 0 ? '你欠' : '欠你'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>最近交易</CardTitle>
                <Button variant="ghost" size="sm">查看全部</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <Receipt className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-black">{transaction.description}</h4>
                        <p className="text-sm text-gray-500">{transaction.group} • 由 {transaction.paidBy} 支付</p>
                        <p className="text-xs text-gray-400">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-red-600">
                        ${Math.abs(transaction.amount).toLocaleString()}
                      </p>
                      <Button variant="ghost" size="sm" className="p-1">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Monthly Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>本月摘要</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">總支出</span>
                  <span className="font-semibold">$12,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">新增群組</span>
                  <span className="font-semibold">2 個</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">交易筆數</span>
                  <span className="font-semibold">28 筆</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">已結算金額</span>
                  <span className="font-semibold text-green-600">$3,200</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pending Settlements */}
          <Card>
            <CardHeader>
              <CardTitle>待結算</CardTitle>
              <CardDescription>需要處理的款項</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-medium text-black">向李小華付款</p>
                    <p className="text-sm text-gray-500">日本旅遊群組</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-red-600">$1,250</p>
                    <Button size="sm" className="mt-1 bg-black text-white hover:bg-gray-800">
                      付款
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-black">張小美欠款</p>
                    <p className="text-sm text-gray-500">室友分帳群組</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">$450</p>
                    <Button size="sm" variant="outline" className="mt-1">
                      提醒
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}