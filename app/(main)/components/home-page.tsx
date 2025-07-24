"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
  Star
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

export default function SimpleExpenseApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // 模擬數據
  const trips = [
    {
      id: 1,
      title: '台北三日遊',
      dates: '2025/08/15 - 2025/08/17',
      location: '台北, 台灣',
      progress: 85,
      image: 'https://images.unsplash.com/photo-1540629372994-b61e99c77256?w=400&h=240&fit=crop',
      days: 3,
      attractions: 8,
      status: 'planning'
    },
    {
      id: 2,
      title: '京都賞櫻之旅',
      dates: '2025/04/05 - 2025/04/10',
      location: '京都, 日本',
      progress: 45,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop',
      days: 6,
      attractions: 12,
      status: 'upcoming'
    },
    {
      id: 3,
      title: '巴黎浪漫假期',
      dates: '2025/09/20 - 2025/09/25',
      location: '巴黎, 法國',
      progress: 20,
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=240&fit=crop',
      days: 6,
      attractions: 15,
      status: 'draft'
    }
  ];

  const popularDestinations = [
    { name: '台北101', location: '台北', rating: 4.8, image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=200&h=200&fit=crop', category: '地標' },
    { name: '清水寺', location: '京都', rating: 4.9, image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=200&h=200&fit=crop', category: '寺廟' },
    { name: '艾菲爾鐵塔', location: '巴黎', rating: 4.7, image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=200&h=200&fit=crop', category: '地標' },
    { name: '九份老街', location: '新北', rating: 4.6, image: 'https://images.unsplash.com/photo-1559592413-b967e0a0826e?w=200&h=200&fit=crop', category: '老街' }
  ];

  const recentSearches = ['台北美食', '京都神社', '巴黎博物館', '東京購物'];

  interface Trip {
    id: number;
    title: string;
    dates: string;
    location: string;
    progress: number;
    image: string;
    days: number;
    attractions: number;
    status: 'planning' | 'upcoming' | 'draft' | string;
  }

  interface Destination {
    name: string;
    location: string;
    rating: number;
    image: string;
    category: string;
  }

  const getStatusBadge = (status: Trip['status']): React.ReactNode => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="default">即將開始</Badge>;
      case 'planning':
        return <Badge variant="secondary">規劃中</Badge>;
      case 'draft':
        return <Badge variant="outline">草稿</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col flex-grow flex-shrink basis-0 rounded-md border overflow-hidden liquid-glass">
      <div className="container mx-auto px-4 py-2">
        <div className="mb-4">
          <h2 className="text-3xl font-bold tracking-tight mb-2">歡迎回來！</h2>
          <p className="text-primary text-lg">讓我們繼續規劃你的精彩旅程</p>
        </div>

        <div className="mb-4">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="搜尋景點、城市或行程..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 text-base h-12"
            />
          </div>
        </div>

        <div className="mb-4 flex flex-wrap gap-3">
          <Button size="lg" className="h-12">
            <Plus className="mr-2 h-5 w-5" />
            新增行程
          </Button>
          <Button variant="outline" size="lg" className="h-12">
            <Search className="mr-2 h-5 w-5" />
            探索景點
          </Button>
          <Button variant="outline" size="lg" className="h-12">
            <MapPin className="mr-2 h-5 w-5" />
            我的地圖
          </Button>
        </div>

        <Tabs defaultValue="trips" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="trips">我的行程</TabsTrigger>
            <TabsTrigger value="discover">探索景點</TabsTrigger>
          </TabsList>

          <TabsContent value="trips" className="">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="篩選行程" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">所有行程</SelectItem>
                    <SelectItem value="upcoming">即將到來</SelectItem>
                    <SelectItem value="planning">規劃中</SelectItem>
                    <SelectItem value="past">已結束</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  更多篩選
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">共 {trips.length} 個行程</p>
            </div>


            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {trips.map((trip) => (
                <Card key={trip.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="h-48 w-full object-cover"
                    />
                    <div className="absolute right-2 top-2">
                      {getStatusBadge(trip.status)}
                    </div>
                  </div>
                  <CardHeader className="">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl">{trip.title}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="mr-1 h-3 w-3 text-primary" />
                          {trip.location}
                        </CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
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
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center text-base text-muted-foreground mb-3">
                      <Calendar className="mr-1 h-3 w-3 text-primary" />
                      {trip.dates}
                    </div>

                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                      <span>{trip.days} 天</span>
                      <span>{trip.attractions} 個景點</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      查看詳情
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="discover" className="mt-4">
            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold">最近搜尋</h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                    {search}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Popular Destinations */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">熱門景點</h3>
                <Button variant="ghost" size="sm">
                  查看全部
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {popularDestinations.map((destination, index) => (
                  <Card key={index} className="overflow-hidden transition-all hover:shadow-md cursor-pointer">
                    <div className="relative">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="h-32 w-full object-cover"
                      />
                      <Badge className="absolute right-2 top-2" variant="secondary">
                        {destination.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold">{destination.name}</h4>
                          <p className="text-sm text-muted-foreground">{destination.location}</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">{destination.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}