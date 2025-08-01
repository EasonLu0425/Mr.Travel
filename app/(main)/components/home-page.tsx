"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Plus,
  Users,
  Bell,
  Settings,
  ArrowRight,
  Calendar,
  Search,
  MapPin,
  Filter,
  MoreHorizontal,
  Star,
  ChevronRight
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function SimpleExpenseApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // 模擬數據
  const trips: {
    id: number;
    title: string;
    dates: string;
    location: string;
    city: City;
    image: string;
    days: number;
    attractions: number;
    status: 'planning' | 'upcoming' | 'draft';
    members: { name: string; avatar: string }[];
  }[] = [
      {
        id: 1,
        title: '台北三日遊',
        dates: '2025/08/15 - 2025/08/17',
        location: '台北, 台灣',
        city: '台北',
        image: 'https://images.unsplash.com/photo-1540629372994-b61e99c77256?w=400&h=240&fit=crop',
        days: 3,
        attractions: 8,
        status: 'planning',
        members: [
          { name: '小明', avatar: 'https://i.pravatar.cc/150?img=1' },
          { name: '小華', avatar: 'https://i.pravatar.cc/150?img=2' },
          { name: '小美', avatar: 'https://i.pravatar.cc/150?img=3' }
        ]
      },
      {
        id: 2,
        title: '京都賞櫻之旅',
        dates: '2025/04/05 - 2025/04/10',
        location: '京都, 日本',
        city: '京都',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop',
        days: 6,
        attractions: 12,
        status: 'upcoming',
        members: [
          { name: '小明', avatar: 'https://i.pravatar.cc/150?img=1' },
          { name: '小華', avatar: 'https://i.pravatar.cc/150?img=2' },
          { name: '小美', avatar: 'https://i.pravatar.cc/150?img=3' }
        ]
      },
      {
        id: 3,
        title: '巴黎藝術之旅',
        dates: '2025/06/01 - 2025/06/07',
        location: '巴黎, 法國',
        city: '巴黎',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=240&fit=crop',
        days: 7,
        attractions: 10,
        status: 'draft',
        members: [
          { name: '小明', avatar: 'https://i.pravatar.cc/150?img=1' },
          { name: '小華', avatar: 'https://i.pravatar.cc/150?img=2' },
          { name: '小美', avatar: 'https://i.pravatar.cc/150?img=3' }
        ]
      }
    ]
  // 基於行程地點的推薦景點
  type City = '台北' | '京都' | '巴黎';
  type Destination = { name: string; rating: number; image: string; category: string; description: string; };
  const recommendationsByCity: Record<City, Destination[]> = {
    '台北': [
      { name: '台北101', rating: 4.8, image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=200&h=200&fit=crop', category: '地標', description: '台北最著名的摩天大樓' },
      { name: '士林夜市', rating: 4.6, image: 'https://images.unsplash.com/photo-1559592413-b967e0a0826e?w=200&h=200&fit=crop', category: '夜市', description: '台北最大的夜市' },
      { name: '故宮博物院', rating: 4.7, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop', category: '博物館', description: '世界級的中華文物收藏' },
      { name: '陽明山國家公園', rating: 4.5, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop', category: '自然', description: '台北近郊的自然美景' }
    ],
    '京都': [
      { name: '清水寺', rating: 4.9, image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=200&h=200&fit=crop', category: '寺廟', description: '京都最著名的古寺' },
      { name: '金閣寺', rating: 4.8, image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=200&h=200&fit=crop', category: '寺廟', description: '金光閃閃的禪寺建築' },
      { name: '嵐山竹林', rating: 4.7, image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c9a4?w=200&h=200&fit=crop', category: '自然', description: '如夢似幻的竹林步道' },
      { name: '祇園', rating: 4.6, image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=200&h=200&fit=crop', category: '街區', description: '傳統的藝伎區' }
    ],
    '巴黎': [
      { name: '艾菲爾鐵塔', rating: 4.7, image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=200&h=200&fit=crop', category: '地標', description: '巴黎的象徵建築' },
      { name: '羅浮宮', rating: 4.8, image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=200&h=200&fit=crop', category: '博物館', description: '世界最大的藝術博物館' },
      { name: '聖母院', rating: 4.6, image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d7329e?w=200&h=200&fit=crop', category: '教堂', description: '哥德式建築的傑作' },
      { name: '香榭麗舍大道', rating: 4.5, image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=200&h=200&fit=crop', category: '街道', description: '世界最美的大道' }
    ]
  };


  const recentSearches = ['台北美食', '京都神社', '巴黎博物館', '東京購物'];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="default">即將開始</Badge>;
      case 'planning':
        return <Badge variant="secondary">規劃中</Badge>;
      case 'finished':
        return <Badge variant="outline">已結束</Badge>;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col flex-grow flex-shrink sm:basis-0 rounded-md border sm:overflow-hidden liquid-glass-nonhover">
      <div className="container flex-1 flex flex-col">
        {/* Welcome Section */}
        <div className="mb-4 sm:mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">歡迎回來！</h2>
          <p className="text-muted-foreground text-sm sm:text-base">讓我們繼續規劃你的精彩旅程</p>
        </div>

        {/* Search Bar */}
        <div className="mb-4 sm:mb-4">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="搜尋景點、城市或行程..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 text-sm sm:text-base h-10 sm:h-12"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-4 sm:mb-4 flex flex-wrap gap-2 sm:gap-3">
          <Button size="sm" className="h-10 md:h-12 text-xs md:text-sm">
            <Plus className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            新增行程
          </Button>
          <Button variant="outline" size="sm" className="h-10 md:h-12 text-xs md:text-sm">
            <Search className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            探索景點
          </Button>
        </div>
        <div className="flex-1 flex flex-col">
          <Tabs defaultValue="trips" className="w-full flex-1">
            <TabsList className="grid w-full max-w-xs sm:max-w-md grid-cols-2">
              <TabsTrigger value="trips" className="text-xs sm:text-sm">我的行程</TabsTrigger>
              <TabsTrigger value="discover" className="text-xs sm:text-sm">探索景點</TabsTrigger>
            </TabsList>

            <TabsContent value="trips" className="mt-2 min-h-0 sm:mt-2 flex-1 flex flex-col">
              {/* Filter Bar */}
              <div className="mb-2 sm:mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                    <SelectTrigger className="w-full sm:w-40">
                      <SelectValue placeholder="篩選行程" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">所有行程</SelectItem>
                      <SelectItem value="upcoming">即將到來</SelectItem>
                      <SelectItem value="planning">規劃中</SelectItem>
                      <SelectItem value="draft">草稿</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                    <Filter className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    更多篩選
                  </Button>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">共 {trips.length} 個行程</p>
              </div>

              {/* Trip Cards */}
              <div className="flex-grow flex-shrink sm:basis-0 p-4 md:p-8 overflow-auto overflow-x-hidden custom-scrollbar">
                <div className="flex flex-col gap-2">
                  {trips.map((trip) => (
                    <Card key={trip.id} className="flex flex-row overflow-hidden transition-all hover:shadow-lg relative liquid-glass">
                      {/* 狀態 Badge 放在右上角 */}
                      <div className="absolute right-4 top-2 z-10">
                        {getStatusBadge(trip.status)}
                      </div>

                      {/* 左側圖片區 */}
                      <div className="w-32 hidden sm:block h-auto flex-shrink-0">
                        <Image src={trip.image} alt={trip.title} width={40} height={40} className="w-full h-full object-cover" />
                      </div>

                      {/* 右側內容區 */}
                      <div className="flex flex-col justify-between flex-1 p-4 space-y-2">
                        {/* 標題與操作 */}
                        <div className="flex items-start justify-between">
                          <div className="min-w-0">
                            <CardTitle className="text-base sm:text-xl text-2xl truncate">{trip.title}</CardTitle>
                            <CardDescription className="flex items-center mt-1 text-xs sm:text-sm">
                              <MapPin className="mr-1 h-3 w-3 flex-shrink-0 text-primary" />
                              <span className="truncate">{trip.location}</span>
                            </CardDescription>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>編輯行程</DropdownMenuItem>
                              <DropdownMenuItem>分享行程</DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">刪除行程</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        {/* 行程成員 Avatar 群組 */}
                        <div className="flex -space-x-2 overflow-hidden mb-1">
                          {trip.members.map((member, idx) => (
                            <Tooltip key={idx}>
                              <TooltipTrigger asChild>
                                <Avatar className="h-10 w-10 border border-white">
                                  <AvatarImage src={member.avatar} alt={member.name} />
                                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                                </Avatar>
                              </TooltipTrigger>
                              <TooltipContent side="top">{member.name}</TooltipContent>
                            </Tooltip>
                          ))}
                        </div>

                        {/* 日期資訊 */}
                        <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span className="truncate">{trip.dates}</span>
                        </div>

                        {/* Footer 資訊 */}
                        <div className="flex justify-between text-xs sm:text-sm pt-2">
                          <div className="flex space-x-3 sm:space-x-4 text-muted-foreground">
                            <span>{trip.days} 天</span>
                            <span>{trip.attractions} 個景點</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-xs sm:text-sm h-8">
                            查看詳情
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="discover" className="mt-2 min-h-0 sm:mt-2 flex-1 flex flex-col">
              {/* Recent Searches */}
              <div className="mb-6 sm:mb-8">
                <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">最近搜尋</h3>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-secondary/80 text-xs">
                      {search}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Trip-based Recommendations */}
              <div className="flex-grow flex-shrink sm:basis-0 p-4 md:p-8 overflow-auto overflow-x-hidden custom-scrollbar">
                <div className="flex flex-col gap-2 space-y-6 sm:space-y-8">
                  {trips.map((trip) => (
                    <div key={trip.id}>
                      <div className="mb-3 sm:mb-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <Image
                            src={trip.image}
                            alt={trip.title}
                            width={40}
                            height={40}
                            className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg object-cover"
                          />
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base sm:text-lg font-semibold truncate">{trip.city} 推薦景點</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground truncate">為你的 {trip.title} 精選</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs sm:text-sm flex-shrink-0">
                          查看全部
                          <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                        {recommendationsByCity[trip.city]?.map((destination, index) => (
                          <Card key={index} className="overflow-hidden transition-all hover:shadow-md cursor-pointer liquid-glass">
                            <div className="relative">
                              <Image
                                src={destination.image}
                                alt={destination.name}
                                width={40}
                                height={40}
                                className="h-24 sm:h-32 w-full object-cover"
                              />
                              <Badge className="absolute right-1 sm:right-2 top-1 sm:top-2 text-xs" variant="secondary">
                                {destination.category}
                              </Badge>
                            </div>
                            <CardContent className="p-2 sm:p-4">
                              <div className="space-y-1 sm:space-y-2">
                                <div className="flex items-start justify-between gap-2">
                                  <div className="min-w-0 flex-1">
                                    <h4 className="font-semibold text-sm sm:text-base truncate">{destination.name}</h4>
                                    <p className="text-xs sm:text-sm text-muted-foreground truncate">{destination.description}</p>
                                  </div>
                                  <div className="flex items-center flex-shrink-0">
                                    <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs font-medium">{destination.rating}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}



