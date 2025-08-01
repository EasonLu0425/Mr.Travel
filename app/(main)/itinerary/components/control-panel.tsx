
import { Button } from "@/components/ui/button";
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { CircleDollarSign, Copy, FileText, GripHorizontal, GripVertical, Trash2 } from "lucide-react";


const ControlPanel = () => {

  return (
    <Card className="absolute top-2 left-2 bottom-2 z-[1000] liquid-glass-nonhover !bg-secondary/95 w-96 !p-4">
      <CardHeader className="px-0">
        <CardTitle className="text-2xl">台北四天三頁</CardTitle>
        <CardDescription>行程管理</CardDescription>
        <CardAction>
          <Button className="btn btn-primary">編輯</Button>
        </CardAction>
      </CardHeader>
      <CardContent className="">
        <div className="">
          {/* watchDrag控制可否用touch或者mouse控制滑動 */}
          <Carousel opts={{ watchDrag: false }} className="">
            <div className="flex shadow-md border border-white rounded-xl overflow-hidden">
              <CarouselContent className="ml-0 gap-0 h-16 flex flex-grow divide-x divide-white ">
                <CarouselItem
                  className="basis-1/3 p-0 flex items-center justify-center gap-2 bg-white/20"
                >
                  <div className="flex flex-col gap-2">
                    <GripVertical className="text-primary w-4 h-4" />
                    <Trash2 className="hover:text-primary w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">09月24日</p>
                    <p className="text-xs opacity-90">第一天</p>
                  </div>
                </CarouselItem>
                <CarouselItem
                  className="basis-1/3 p-0 flex items-center gap-1 bg-white/20"
                >
                  <div>
                    <GripVertical className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">09月25日</p>
                    <p className="text-xs opacity-90">第二天</p>
                  </div>
                </CarouselItem>
                <CarouselItem
                  className="basis-1/3 p-0 flex items-center gap-1
             bg-white/20 "
                >
                  <div>
                    <GripVertical className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">09月26日</p>
                    <p className="text-xs opacity-90">第一天</p>
                  </div>
                </CarouselItem>
                <CarouselItem
                  className="basis-1/3 p-0 flex items-center gap-1
             bg-white/20"
                >
                  <div>
                    <GripVertical className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">09月27日</p>
                    <p className="text-xs opacity-90">第一天</p>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </div>
            <CarouselPrevious className="w-6 -left-8" />
            <CarouselNext className="w-6 -right-8" />
          </Carousel>
        </div>
      </CardContent>
      <CardFooter className="flex-1 flex-col border border-gray-400 overflow-y-auto overflow-x-hidden custom-scrollbar px-0.5">
        <div className="itinerary-items-container w-full">
          <Card className="relative gap-2 pb-2">
            <GripHorizontal className="w-4 h-4 absolute top-2 left-4" />
            <CardHeader className="grid-cols-2 items-center divide-x-1 gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto]">
              <CardTitle className="text-base font-semi-bold">09:00~10:00(1小時)</CardTitle>
              <CardDescription className="text-lg font-bold">活速換匯</CardDescription>
            </CardHeader>
            <CardContent className="flex h-10 items-center justify-start gap-2">
              <div>
                <Image src={"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop"} alt={"京都"} width={40} height={40} className="" />
              </div>
              <div>
                <p className="text-xl font-semibold">中正紀念堂</p>
                <p className="text-xs opacity-90">台北市大安區中正路996號</p>
              </div>
            </CardContent>
            <CardFooter className="gap-4">
              <div className="flex flex-col items-center justify-center gap-1">
                <Button size="icon" variant="outline">
                  <FileText />
                </Button>
                <p className="text-sm font-bold">資訊</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <Button size="icon" variant="outline">
                  <CircleDollarSign />
                </Button>
                <p className="text-sm font-bold">花費</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <Button size="icon" variant="outline">
                  <Copy />
                </Button>
                <p className="text-sm font-bold">複製</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <Button size="icon">
                  <Trash2 />
                </Button>
                <p className="text-sm font-bold">刪除</p>
              </div>

            </CardFooter>
          </Card>
        </div>
      </CardFooter>
    </Card>
  )
}

export default ControlPanel;